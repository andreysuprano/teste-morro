import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: auto;
    background-color: #ffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10vh;
`;

export const WrapAll = styled.div`
    width: 70%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    @media (max-width: 1610px){
    width: 80%;
    }
    @media (max-width: 900px){
    width: 99%;
    }
`;


export const WrapItems = styled.div`
    width: 350px;
    height: 200px;
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: center;
    gap: 1vw;
`;

export const WrapTexts = styled.div`
    width: 70%;
    height: auto;
    display: flex-start;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    h5{
        color: ${(props) => props.theme.primary};
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 25px;
        margin-bottom: 1vh;
    }
    p{
        color: ${(props) => props.theme.secondary};
        font-size: 1rem;
        font-weight: 400;
        line-height: 20px;
    }
`;