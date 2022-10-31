import styled from 'styled-components';
import Image from 'next/image';

interface IMenu {
    isOpen?:boolean;
}

export const Container = styled.section<IMenu>`
    position: fixed;
    top: 0;
	width: 100%;
	height: ${({isOpen}) => isOpen === true ? "100vh" : "0vh" };
	background: ${(isOpen) => isOpen ? "RGBA(23,25,70,0.95)" : "transparent" };
    transition: all 200ms linear;
`;

export const LineUp = styled.hr`
    position: fixed;
    top: 0;
	width: 100%;
	height: 0.6vh;
    background-color: ${(props) => props.theme.secondary};
    border: none;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    transition: all 200ms linear;
`;

export const WrapFirst = styled.div`
	display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: absolute;
    right:11vw;
    top: 2vh;
    :hover{
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
    color:  ${(props) => props.theme.primary};
    font-size: 2rem;
    line-height: 50px;
    width: 30%;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 55%;
    left: 50%;
    :hover{
        cursor: pointer;
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
`;

export const WrapMidiaIcons = styled.div`
  	display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width:100%;
    height:auto;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 90%;
    left: 50%;
    gap: 2vw;
`;


export const Icon = styled(Image)`
  	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    :hover{
        cursor: pointer;
    }
`;
