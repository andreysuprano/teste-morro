import styled from 'styled-components';

interface IImage{
    imageBackground?: string;
}

export const Container = styled.div<IImage>`
   background-image: url(${props => props.imageBackground});
   background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 160vh;
    `;

export const FooterContent = styled.footer`
    background-color: RGBA(23,25,70,0.95);
    width: 100%;
    height: 40vh;
    padding: 20px;
`;