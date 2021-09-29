import React from 'react'
import * as S from './styled'

import logo from '../../assets/logotypo.png'
import cloud from '../../assets/cloud.png'

export default function Header() {
    return (
        <S.Container>
            <S.Content>
                <S.Cloud1 src={cloud}/>
                <S.Cloud2 src={cloud}/>
                <S.Logo src={logo} alt="Colégio Geração Ativa"/>
                <S.HeaderLabel>Nossas historinhas contadas do nosso jeito!</S.HeaderLabel>
            </S.Content>
        </S.Container>
    )
}
