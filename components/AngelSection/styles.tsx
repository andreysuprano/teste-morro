import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    overflow-x: hidden;
    margin-top: -10vh;
    @media (max-width: 900px){
        flex-direction: column;
        height: auto;
        margin-top: 0;
       
    }
`;

export const Left = styled.div`
    width: 900px;
    height: 500px;
    border-radius: 20px;
    background-image: url("./assets/img/picfaith.png");
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: 900px){
        width: 100%;
        height:200px;
        margin-top: 2vh;
    }
`;

export const Right = styled.div`
    width: 30%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;
    gap: 1vw;
    @media (max-width: 900px){
        width: 90%;
        align-items: center;
        text-align: center;
        flex-direction: column;
        height: auto;
        gap: 4vh;
    }
    h1{
        font-size: 3rem;
        line-height: 50px;
        font-weight: 200;
        color: ${(props) => props.theme.secondary};
        margin-top: 24vh;
        max-height: 250px;
        @media (max-width: 900px){
            margin-top: 2vh;

    }
    }
    p{
        font-size: 1rem;
        line-height: 24px;
        font-weight: 400;
        color: ${(props) => props.theme.secondary};
        width: 18vw;
        max-height: 250px;
        @media (max-width: 900px){
            width: 100%;
    }
    }
`;