import styled from 'styled-components';
import Image from 'next/image';

interface IImage {
	imageBackground?: string;
}

export const Container = styled.div <IImage>`
	width: 100vw;	
    flex-direction: column;
    background: url(${(props) => props.imageBackground});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Wrapper = styled.div<IImage>`
	position: relative;
	padding-bottom:300px ;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Footer = styled.footer`
		background-color: RGBA(23, 25, 70, 0.95);
		width: 100%;
		height: 312px;
		position: absolute;
		bottom: 0;
		left: 0;
		padding: 20px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 4vw;
    @media (max-width: 900px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0px;
		width: 100%;
		height: 321px;
    }
`;

export const Logo = styled(Image)`
     @media (max-width: 900px) {
		width: 50px;
		height:auto;

    }
`;

export const WrapFooterBwtween = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2vh;
`;

export const WrapMidiaIcons = styled.div`
  	display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width:100%;
    height:auto;
    gap: 2vw;
    @media (max-width: 1200px) {
        gap: 4vw;
	}
    @media (max-width: 767px) {
        left: 48%;
        gap: 8vw;
	}
    @media (max-width: 500px) {
        gap: 10vw;
	}
`;

export const Icon = styled(Image)`
  	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    transform: scale(1.1);
    transition: all 200ms linear;
    :hover{
        cursor: pointer;
        opacity: 1;
        transition: all 200ms linear;
        transform: translateY(-5px) scale(1.1);
    }
`;

export const WrapOptions = styled.div`
  	display: flex;
	flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width:100%;
    height:auto;
    gap: 1vw;
	font-size: 14px;
`;

export const Option = styled.p`
color: ${props => props.theme.primary};
opacity: 0.5;
`;

export const LineOver = styled.hr`
background-color: ${props => props.theme.primary};
border: none;
width: 2px;
height: 15px;
opacity: 0.5;

`;

export const LineOverPhones = styled.hr`
background-color: ${props => props.theme.white};
border: none;
width: 2px;
height: 40px;
opacity: 1;

`;

export const WrapContactPhones = styled.div`
	display: flex;
	flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
	gap: 1vw;
	color: ${props => props.theme.white};
	text-align: center;
`;

export const Local = styled.p`
	color: ${props => props.theme.white};
	text-align: center;
`;