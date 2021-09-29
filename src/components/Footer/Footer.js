import React from 'react'
import * as S from './styled'

import FBook from '../FBook/FBook'

export default function Footer() {
    return (
        <S.Container>
            <S.Content>
                <S.Info>
                    <div>
                        <S.UpperP>Colégio Geração Ativa</S.UpperP>
                        <S.P>R. Gomes Taborda, 1826 - Cordeiro, Recife - PE</S.P>
                        <S.A href='http://www.geracaoativa.com.br/' target='_blank'><S.P>geracaoativa.com.br</S.P></S.A>
                        <S.P>(81) 3445-2190</S.P>
                    </div>
                </S.Info>
                <S.Book>
                    <FBook/>
                </S.Book>
            </S.Content>
        </S.Container>
    )
}
