import React, { useState, useEffect } from 'react'
import firebase from './Firebase'
import * as S from './styled'

import logo from './assets/logotypo.png'

import Modal from './components/Modal/Modal';
import Book from './components/Book/Book';
import Footer from './components/Footer/Footer';
import { onSnapshot, collection, doc, setDoc } from 'firebase/firestore';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [events, setEvents] = useState([])

  const e10Ref = collection(firebase, 'events', '2020', 'E10')

  function handleBookClick(){
    setShowModal(true)
  }

  function getColor(idx){
    const colorId = idx % 4
    switch (colorId) {
      case 0:
        return 'yellow'
      case 1:
        return 'blue'
      case 2:
        return 'red'
      case 3:
        return 'green'
    
      default:
        return 'yellow'
    }
  }

  function getStories(){

  }

  /*async function setStorie(){
    await setDoc(doc(e10Ref), {name: 'Messi', beginAt: 195, author: 'Artur Peixoto Silveira'})
    await setDoc(doc(e10Ref), {beginAt: 239, name: 'O fundo do mar', author: 'Carlos Eduardo Bione'})
    await setDoc(doc(e10Ref), {author: 'Carlos Eduardo Correia da silva Jr', name: 'O sonho do menino jogador', beginAt: 319})
    await setDoc(doc(e10Ref), {beginAt: 421, author: 'Davi Alencar Peixoto Pacheco Aquino', name: 'A onça, a macaquinha e o macaquinho'})
    await setDoc(doc(e10Ref), {author: 'Eric Welton Barros Tenório', beginAt: 574, name: 'Jurassic Park'})
    await setDoc(doc(e10Ref), {beginAt: 612, name: 'Alice e o tubarão', author: 'Gabriela Alves Brasil'})
    await setDoc(doc(e10Ref), {beginAt: 757, name: 'O panda Arco-Íris e a Flora', author: "Gabriela Santos L'amour"})
    await setDoc(doc(e10Ref), {author: 'Guilherme Neator Moreira Magalhães', name: 'Foz do Iguaçu', beginAt: 918})
    await setDoc(doc(e10Ref), {author: 'Guilherme Oliveira Brasil Bastos', name: 'Doces ou travessuras', beginAt: 1073})
    await setDoc(doc(e10Ref), {author: 'Helena Ferreira Alves', name: 'A sereia triste', beginAt: 1143})
    await setDoc(doc(e10Ref), {beginAt: 1329, author: 'Isabela Taís de Oliveira e Silva', name: 'O diário mágico'})
    await setDoc(doc(e10Ref), {name: 'Luci e o cachorro', beginAt: 1512, author: 'Lara Cavalcanti Batista de Lima'})
    await setDoc(doc(e10Ref), {beginAt: 1684, name: 'O leão e o rato', author: 'Luís Eduardo Tarjano Ferreira'})
    await setDoc(doc(e10Ref), {beginAt: 1847, name: 'João e o pé de feijão', author: 'Luiz Paulo Lima Calazans'})
    await setDoc(doc(e10Ref), {beginAt: 1945, name: 'Alice no fundo do mar', author: 'Maria Eduarda Gomes Ferreira Barbosa'})
    await setDoc(doc(e10Ref), {author: 'Miguel Soares da Silva Moura', name: 'Os três carneirinhos e o lobo', beginAt: 2084})
    await setDoc(doc(e10Ref), {author: 'Saulo Matias de Souza', name: 'Noite de acampamento', beginAt: 2233})
  }*/

    console.log(events);
  useEffect(() => 
    onSnapshot(collection(firebase, 'events'), (snapshot) => 
      setEvents(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    )
  , [])

  return (
    <S.Container>
      {showModal && <Modal closeModal={() => setShowModal(false)}/>}
      <S.Content>
        <S.Logo src={logo} alt="Colégio Geração Ativa"/>
        <S.HeaderLabel>Nossas historinhas contadas do nosso jeito!</S.HeaderLabel>
        {events.map((event) => (
          <>
            <h2>{event.id}</h2>
            <S.ShelfLine/>
            <S.ShelfRow>
              {event.classes.map((book, idx) => (
                <Book year='1º ano' classCode={book.name} hardcoverColor={getColor(idx)} bookClick={() => handleBookClick()}/>
              ))}
            </S.ShelfRow>
          </>
        ))}
        {/*<h2>2021</h2>
        <S.ShelfLine/>
        <S.ShelfRow>
          <Book year='1º ano' classCode='E10' hardcoverColor='yellow' bookClick={() => handleBookClick()}/>
          <Book year='1º ano' classCode='E11' hardcoverColor='blue'/>
          <Book year='1º ano' classCode='E20' hardcoverColor='red'/>
          <Book year='1º ano' classCode='E21' hardcoverColor='green'/>
        </S.ShelfRow>
        <h2>2020</h2>
        <S.ShelfLine/>
        <S.ShelfRow>
          <Book year='1º ano' classCode='E10' hardcoverColor='green' bookClick={() => handleBookClick()}/>
          <Book year='1º ano' classCode='E11' hardcoverColor='red'/>
          <Book year='1º ano' classCode='E20' hardcoverColor='yellow'/>
          <Book year='1º ano' classCode='E21' hardcoverColor='blue'/>
        </S.ShelfRow>*/}
      </S.Content>
      <Footer/>
    </S.Container>
  );
}

export default App;
