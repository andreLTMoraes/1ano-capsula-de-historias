import styled from 'styled-components';

export const Shadow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100%;
    background-color: #073c5fa0;
    z-index: 5;
    position: fixed;
`;
export const PopUpContainer = styled.div`
    display: flex;
    width: 80%;
    height: 80%;
    background-color: #fff;
    margin: 2rem 0;
    border-radius: .7rem;
    position: relative;
    padding: 2rem 1rem 1rem 1rem;
    z-index: 15;
`;
export const StoriesList = styled.div`
    width: 30%;
    margin-right: .75em;
    background-color: #f1f1f1;
    overflow-y: scroll;
    direction: rtl;
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ddd;
        border-radius: 10px;
    }
`;
export const StoriesItem = styled.div`
    background-color: ${props => (props.actual ? '#fff' : 'none')};
    display: flex;
    padding: .5em;
    flex-direction: column;
    border-bottom: #ccc solid 1px;
    border-top: #ccc solid 1px;
    height: 4em;
    justify-content: center;
`;
export const HistoryContent = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;
export const HistoryTitle = styled.p`
    color: ${props => (props.actual ? '#f79f00' : '#969696')};
    font-weight: 800;
    margin-bottom: 8px;
`;
export const HistoryAuthor = styled.p`
    color: ${props => (props.actual ? '#f79f00' : '#969696')};
    font-weight: 600;
    margin-bottom: 8px;
`;
export const CardHistoryTitle = styled.p`
    color: #073C5F;
    font-weight: 800;
    margin-bottom: 8px;
    font-size: 1.7em;
`;
export const CardHistoryAuthor = styled.p`
    color: #073C5F;
    font-weight: 600;
    margin-bottom: 8px;
    font-size: 1.4em;
`;
export const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const VideoConteiner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;