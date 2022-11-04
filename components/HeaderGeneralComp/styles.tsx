import styled from 'styled-components';
import Image from 'next/image';
interface IImage {
	imageBackground?: string;
}

export const Container = styled.section<IImage>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    width: 100%;
    height:100vh;
    background-image: url(${(props) => props.imageBackground});
    background-size: cover;
    background-repeat: no-repeat;
    
`;

export const Logo = styled(Image)`
		width: 300px;
        height: auto;
        margin-top: -30vh;
        margin-left: 15vw;
        align-self: flex-start;
        @media (max-width: 767px){
        margin-left: 0;
        margin: 0 auto;
        }
`;

export const Text = styled.h1`
    color: ${props => props.theme.white};
	font-size: 4rem;
    letter-spacing: 10px;
    font-weight: 300;
    margin-top: -15vh;
    width: 70%;
    min-width: 50%;
    max-width: 70%;
    text-align: center;
    background-color: transparent;
    @media (max-width: 767px){
        font-size: 3rem;

        }
`;