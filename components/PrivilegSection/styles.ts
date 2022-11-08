import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
background-image: url('./assets/img/fefefe.png');
background-size: cover;
background-repeat: no-repeat;
margin-top: 10vh;
@media (max-width: 900px){
    margin-top: 0;
}
`;

export const Wrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
text-align: center;
gap: 4vh;
@media (max-width: 900px){
    width: 90%;
}
h1{
    color: ${(props) => props.theme.white};
    font-weight: 300;
    font-size: 3.2rem;
    @media (max-width: 900px){
        font-size: 2.6rem;

}
}
p{
    color: ${(props) => props.theme.white};
    line-height: 25px;
    font-weight: 300;
    text-align: center;
    font-size: 1.4rem;
    @media (max-width: 900px){
        font-size: 0.8rem;
        font-weight: 400;
        margin-top: 18vh;


}

}

`;