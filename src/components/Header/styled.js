import styled from "styled-components"
//#207c9f possivel cor inicial para o degrade
export const Container = styled.div`
    display: flex;
    background-image: linear-gradient(#207c9f, #073C5F);
    width: 100%;
    justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
`;

export const Logo = styled.img`
    width: 10em;
    margin-top: 5em;
    margin-bottom: 2em;
`;

export const HeaderLabel = styled.h1`
    margin-bottom: 4em;
    text-align: center;
`;

export const Cloud1 = styled.img`
    position: absolute;
    top: 4%;
    left: 13%;

    @media screen and (max-width: 1023px) {
        width: 5.5em;
        left: 20%;
    }
`;

export const Cloud2 = styled.img`
    position: absolute;
    top: 13%;
    right: 15%;

    @media screen and (max-width: 1023px) {
        width: 7em;
    }
`;