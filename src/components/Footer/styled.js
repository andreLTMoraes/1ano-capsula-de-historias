import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    background-color: #1e5598;
    margin-top: 6em;
    width: 100%;
    justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    position: relative;
`;

export const Info = styled.div`
    padding-top: 4em;
    padding-bottom: 4em;
    width: 50%;
    justify-content: center;
    display: flex;

    @media screen and (max-width: 767px) {
        padding-top: 20em;
        flex-basis: 100%;
    }
`;

export const P = styled.p`
    color: #fff;
    font-size: 1.5em;
    line-height: 1.7em;
`;

export const UpperP = styled.p`
    color: #fff;
    font-size: 1.8em;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: .5em;
`;

export const Book = styled.div`
    width: 50%;

    @media screen and (max-width: 767px) {
        flex-basis: 100%;
    }
`;