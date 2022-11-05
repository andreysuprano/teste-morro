import styled from 'styled-components';
import Image from 'next/image';

interface IImage {
	imageBackground?: string;
}

export const Container = styled.div <IImage>`
	width: 100vw;	
    background: url(${(props) => props.imageBackground});
    background-size: cover;
    background-repeat: no-repeat;
	@media (max-width: 767px) {
		background-position: 50% 50%;
		background-position-y:-130px ;
	}
`;

export const Wrapper = styled.div<IImage>`
	position: relative;
	padding-bottom:300px ;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 767px) {
		padding-bottom:700px ;
	}
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
		justify-content: space-around;
		padding: 20px 0px 0px 0px;
		width: 100%;
		height: 650px;
    }
`;

export const LogoDesktop = styled(Image)`
     @media (max-width: 767px) {
		display: none;
    }
`;

export const LogoMobile = styled(Image)`
	display: none;
     @media (max-width: 767px) {
		display: flex;
		transform: scale(0.8);
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
        display:none;
	}
`;


export const WrapMidiaIconsMobile = styled(WrapMidiaIcons)`
    display:none;
	@media (max-width: 767px) {
		display:flex;
	}
    @media (max-width: 500px) {
		display:flex;
	}
`;

export const Icon = styled(Image)`
  	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
	@media (max-width: 767px) {
		flex-direction: column;
	}
`;

export const Option = styled.p`
	color: ${props => props.theme.tertiary};
	@media (max-width: 767px) {
		font-weight: 100;
		margin-bottom: 10px;
	}
`;

export const LineOver = styled.hr`
	background-color: ${props => props.theme.primary};
	border: none;
	width: 2px;
	height: 15px;
	opacity: 0.5;
	@media (max-width: 767px) {
		display: none;
	}
`;

export const LineOverPhones = styled.hr`
	background-color: ${props => props.theme.white};
	border: none;
	width: 2px;
	height: 40px;
	opacity: 1;
	@media (max-width: 767px) {
		display: none;
	}
`;

export const WrapContactPhones = styled.div`
	display: flex;
	flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
	gap: 4vw;
	color: ${props => props.theme.white};
	text-align: center;
	.hoverNot{
		margin-right: -3vw;
		transform: none;
		cursor:default ;
	}
	@media (max-width: 767px) {
		padding-top: 20px;
	}
`;

export const Local = styled.p`
	color: ${props => props.theme.white};
	text-align: center;
	@media (max-width: 767px) {
		font-size: 10px;
		padding: 10px;
	}
`;