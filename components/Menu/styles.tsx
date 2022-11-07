import styled from 'styled-components';
import Image from 'next/image';

interface IMenu {
	isOpen?: boolean;
}

export const Container = styled.section<IMenu>`
    position: fixed;
    top: 0;
	width: 100vw;
	height: ${({ isOpen }) => (isOpen === true ? '110vh' : '0vh')};
	background: ${(isOpen) => (isOpen ? 'RGBA(23,25,70,0.95)' : 'transparent')};
    transition: all 200ms linear;
    z-index: 999;
`;

export const LineUp = styled.hr`
	position: fixed;
	top: 0;
	width: 100vw;
	height: 0.6vh;
	background-color: ${(props) => props.theme.secondary};
	border: none;
	box-shadow: rgb(0, 0, 0, 0.4) 0px 20px 150px 80px;
	transition: all 200ms linear;
`;

export const WrapFirst = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 10px;
	position: absolute;
	right: 11vw;
	top: 2vh;
	:hover {
		cursor: pointer;
	}
`;

export const WrapLines = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 3px;
`;

export const LineMenu = styled.hr`
	width: 20px;
	height: 3px;
	background-color: ${(props) => props.theme.white};
	border: none;
	transition: all 200ms linear;
`;

export const MenuLabel = styled.h1`
	color: ${(props) => props.theme.white};
	font-weight: 300;
	transition: all 200ms linear;
`;

export const WrapMenuLinks = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${(props) => props.theme.primary};
	font-size: 2rem;
	line-height: 60px;
	width: 50%;
	position: absolute;
	transform: translate(-50%, -50%);
	top: 55%;
	left: 60%;
	@media (max-width: 1400px) {
		width: 70%;
		line-height: 35px;
	}
	@media (max-width:800px) {
		width: 70%;
		line-height: 30px;
	}
	@media (max-width: 767px) {
		width: 90%;
		padding-left: 12vw;
		padding-right: 2vw;
	}
	@media (max-width: 500px) {
		width: 90%;
		padding-left: 0;
		padding-right: 10vw;
	}
`;

export const PrincipalNav = styled.p`
	width: 100%;
	height: auto;
	opacity: 0.9;
	font-size: 2rem;
	@media (max-width: 1300px) {
		font-size: 1.4rem;
	}
	:hover {
		cursor: pointer;
		opacity: 1;
	}
`;

export const PrincipalNavNone = styled.p`
	width: 100%;
	height: auto;
	opacity: 0.9;
	font-size: 2rem;
	@media (max-width: 1300px) {
		font-size: 1.4rem;
	}
`;

export const SublNav = styled.p`
	width: 100%;
	height: auto;
	opacity: 0.5;
	padding-left: 100px;
	font-size: 2rem;
	@media (max-width: 1300px) {
		font-size: 1.4rem;
	}
	:hover {
		cursor: pointer;
		opacity: 1;
	}
`;

export const Logo = styled(Image)`
  	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 12vh;
    margin-left: 21.5vw;
    transform: scale(1.4);
	@media (max-width: 1300px) {
		transform: scale(1);

	}
`;

export const WrapMidiaIcons = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: auto;
	position: absolute;
	transform: translate(-50%, -50%);
	top: 86%;
	left: 50%;
	gap: 2vw;
	@media (max-width: 1200px) {
		gap: 4vw;
	}
	@media (max-width: 767px) {
		left: 48%;
		top: 85%;
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
    opacity: 0.5;
    transform: scale(1.1);
    transition: all 200ms linear;
    :hover{
        cursor: pointer;
        opacity: 1;
        transition: all 200ms linear;
        transform: translateY(-5px) scale(1.1);
    }
`;
