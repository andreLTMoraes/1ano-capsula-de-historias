import React from 'react'
import * as S from './styled'
import logo from '../../assets/coverbook.png'

export default function FBook() {
    return (
        <S.Card id='card'>
            <S.ImgBox id='imgBox'>
                <S.Bark id='bark'/>
                <img src={logo}/>
            </S.ImgBox>
            <S.Details id='details'>
                <S.P>Tempos difíceis</S.P>
                <S.P>não duram.</S.P>
                <S.P>Pessoas fortes</S.P>
                <S.P>duram.</S.P>
                <S.TextRight>--John Watson</S.TextRight>
            </S.Details>
	    </S.Card>
    )
}
