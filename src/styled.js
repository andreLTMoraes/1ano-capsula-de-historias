import styled from 'styled-components';

export const Logo = styled.img`
    width: 10em;
    margin: 5em 0;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    width: 80%;
    align-items: center;
    flex-direction: column;
`;

export const ShelfLine = styled.hr`
    width: 100%;
    margin-top: .7em;
    margin-bottom: 3em;
    border: 2px solid #214f6d;
`;

export const ShelfRow = styled.div`
    display: flex;
    width: 100%;
    margin: 1.5rem 0;
    justify-content: space-between;
`;
