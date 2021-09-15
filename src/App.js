import React, { useState } from 'react'
import * as S from './styled'

import logo from './assets/logotypo.png'

import Modal from './components/modal/Modal';
import Book from './components/Book/Book';

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleBookClick = () => {
    setShowModal(true)
  }

  return (
    <S.Container>
      {showModal && <Modal closeModal={() => setShowModal(false)}/>}
      <S.Content>
      <S.Logo src={logo} alt="Colégio Geração Ativa"/>
        <h2>2021</h2>
        <S.ShelfLine/>
        <S.ShelfRow>
          <Book year='1º ano' classCode='E10' hardcoverColor='yellow' bookClick={() => handleBookClick()}/>
          <Book year='1º ano' classCode='E11' hardcoverColor='blue'/>
          <Book year='1º ano' classCode='E20' hardcoverColor='red'/>
          <Book year='1º ano' classCode='E21' hardcoverColor='green'/>
        </S.ShelfRow>
      </S.Content>
    </S.Container>
  );
}

export default App;
