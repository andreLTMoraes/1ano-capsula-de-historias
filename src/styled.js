import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    border: 2px solid #214f6d;
`;

export const ShelfRow = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 1.5rem;
    margin-bottom: 10em;
    justify-content: space-between;

    &&:before {
        content: '';
    }

    &&:after {
        content: '';
    }
`;
