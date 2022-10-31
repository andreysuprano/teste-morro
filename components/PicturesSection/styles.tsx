import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.section`
	width: 100vw;
	height: 900px;
	background-color: transparent;
	display: flex;
    flex-direction: row;
	justify-content: center;
	align-items: center;
    margin-bottom: 10vh;
	position: relative;
	@media (max-width: 767px) {
		height: auto;
		align-items: center;
        flex-direction: column;
	}
`;

export const ComponentBackground = styled(Image)`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
`;

export const WrapLeft = styled.div`
    width: 45%;
    height: 100%;
    position: relative;
	background-color:transparent;

`;

export const WrapRight = styled.div`
    width: 45%;
    height: 100%;
    position: relative;
	background-color: transparent;

`;

export const FirstDiv = styled.div`
	position: absolute;
	top: 100px;
	left: 100px;
	background-color:RGBA(25,170,233,0.7) ;
	width: 200px;
	height: 200px;
	font-size: 12px;
	line-height: 20px;
	padding: 10px;
	border-radius: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	:hover{
		cursor: pointer;
		background-color:RGBA(25,170,233) ;
	}
	h1{
	font-weight: 200;
	color: ${(props) => props.theme.white};
	}
`;

export const SecondDiv = styled.div`
	position: absolute;
	top: 320px;
	left: 320px;
	background-color:RGBA(25,170,233,0.7) ;
	width: 200px;
	height: 200px;
	font-size: 12px;
	line-height: 20px;
	padding: 10px;
	border-radius: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	:hover{
		cursor: pointer;
		background-color:RGBA(25,170,233, 0.9) ;
	}
	h1{
	font-weight: 200;
	color: ${(props) => props.theme.white};
	}
`;

export const ThirdDiv = styled.div`
	position: absolute;
	top: 540px;
	left: 100px;
	background-color:RGBA(25,170,233,0.7) ;
	width: 200px;
	height: 200px;
	font-size: 12px;
	line-height: 20px;
	padding: 10px;
	border-radius: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	:hover{
		cursor: pointer;
		background-color:RGBA(25,170,233, 0.9) ;
	}
	h1{
	font-weight: 200;
	color: ${(props) => props.theme.white};
	}
`;

export const FourthDiv = styled.div`
	position: absolute;
	top: 100px;
	right: 100px;
	background-color:RGBA(25,170,233,0.7) ;
	width: 200px;
	height: 200px;
	font-size: 12px;
	line-height: 20px;
	padding: 10px;
	border-radius: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	:hover{
		cursor: pointer;
		background-color:RGBA(25,170,233, 0.9) ;
	}
	h1{
	font-weight: 200;
	color: ${(props) => props.theme.white};
	}
`;

export const FifthDiv = styled.div`
	position: absolute;
	top: 320px;
	right: 320px;
	background-color:RGBA(25,170,233,0.7) ;
	width: 200px;
	height: 200px;
	font-size: 12px;
	line-height: 20px;
	padding: 10px;
	border-radius: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	:hover{
		cursor: pointer;
		background-color:RGBA(25,170,233, 0.9) ;
	}
	h1{
	font-weight: 200;
	color: ${(props) => props.theme.white};
	}
`;

export const SixthDiv = styled.div`
	position: absolute;
	top: 540px;
	right: 540px;
	background-color:RGBA(25,170,233,0.7) ;
	width: 200px;
	height: 200px;
	font-size: 12px;
	line-height: 20px;
	padding: 10px;
	border-radius: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	:hover{
		cursor: pointer;
		background-color:RGBA(25,170,233, 0.9) ;
	}
	h1{
	font-weight: 200;
	color: ${(props) => props.theme.white};
	}
`;

export const SeventhDiv = styled.div`
	position: absolute;
	top: 540px;
	right: 100px;
	background-color:RGBA(25,170,233,0.7) ;
	width: 200px;
	height: 200px;
	font-size: 12px;
	line-height: 20px;
	padding: 10px;
	border-radius: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	:hover{
		cursor: pointer;
		background-color:RGBA(25,170,233, 0.9) ;
	}
	h1{
	font-weight: 200;
	color: ${(props) => props.theme.white};
	}
`;

