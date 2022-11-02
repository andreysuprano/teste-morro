import styled from 'styled-components';
import Image from 'next/image';

interface IWords{
	pic?: number;
}

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
		height: 600px;
		align-items: center;
        flex-direction: column;
		margin-bottom: -100px;
	}
	@media (max-width: 1200px) {
		height: 800px;
		margin-bottom: -100px;
	}
	@media (max-width: 800px) {
		height: 800px;
		margin-bottom: -200px;
	}
`;

export const ComponentBackground = styled(Image)`
	position: absolute;
	left:0;
	top: 0;
	width: 100%;
	height: auto;
	transition: all 200ms linear;
	@media (min-width: 1600px){
		height: 90vh;
	}
	@media (max-width:767px) {
		height: 60vh;
	}

`;

export const WrapLeft = styled.div`
	position: absolute;
	top: 0;
	left: 0;
    width: 45%;
    height: 100%;
	background-color:transparent;
	@media (max-width: 1350px){
	    width: 40%;
		overflow: hidden;
	}
	@media (max-width: 767px) {
	    width: 100%;
	}
`;

export const WrapRight = styled.div`
	position: absolute;
	top: 0;
	right: 0;
    width: 45%;
    height: 100%;
	background-color: transparent;
	@media (max-width: 1350px){
	    width: 60%;
		overflow: hidden;
	}
	@media (max-width: 767px) {
	    width: 100%;
	}
`;

export const FirstDiv = styled.div<IWords>`
	position: absolute;
	top: 100px;
	left: 100px;
	background-color:${({pic}) => pic === 1 ? "RGBA(25,170,233)" : "RGBA(25,170,233,0.7)"} ;
	width: 10vw;
	height: 20vh;
	font-size: ${({pic}) => pic === 1 ? "10px" : "12px"};
	line-height: ${({pic}) => pic === 1 ? "15px" : "20px"};
	padding: 15px;
	border-radius: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	transition: all 200ms linear;
	:hover{
		transition: all 200ms linear;
		cursor: pointer;
		background-color:RGBA(25,170,233) ;
	}
	h1{
		font-weight: ${({pic}) => pic === 1 ? "600" : "200"};
		color: ${(props) => props.theme.white};
	}
	@media (max-width: 1350px){
		height: 12vh;
		line-height: 12px;
		font-size: 8px;
		top: 50px;
		left: 50px;
		overflow: hidden;
	}
	@media (max-width: 767px) {
		font-size: 8px;
		width: 15vw;
		z-index: 888;
	}
`;

export const SecondDiv = styled.div<IWords>`
	position: absolute;
	top: 320px;
	left: 320px;
	background-color:${({pic}) => pic === 2 ? "RGBA(25,170,233)" : "RGBA(25,170,233,0.7)"} ;
	width: 10vw;
	height: 20vh;
	font-size: ${({pic}) => pic === 2 ? "10px" : "12px"};
	line-height: ${({pic}) => pic === 2 ? "15px" : "20px"};
	padding: 15px;
	border-radius: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	transition: all 200ms linear;
	:hover{
		cursor: pointer;
		background-color:RGBA(25,170,233, 0.9) ;
		transition: all 200ms linear;
	}
	h1{
		font-weight: ${({pic}) => pic === 2 ? "600" : "200"};
		color: ${(props) => props.theme.white};
	}
	@media (max-width: 1350px){
		height: 12vh;
		font-size: 8px;
		top: 190px;
		line-height: 12px;
		left: 190px;
		overflow: hidden;
	}
	@media (max-width: 767px) {
		font-size: 8px;
		width: 15vw;
		z-index: 888;
	}
`;

export const ThirdDiv = styled.div<IWords>`
	position: absolute;
	top: 540px;
	left: 100px;
	background-color:${({pic}) => pic === 3 ? "RGBA(25,170,233)" : "RGBA(25,170,233,0.7)"} ;
	width: 10vw;
	height: 20vh;
	font-size: ${({pic}) => pic === 3 ? "10px" : "12px"};
	line-height: ${({pic}) => pic === 3 ? "15px" : "20px"};
	padding: 15px;
	border-radius: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	transition: all 200ms linear;
	:hover{
		cursor: pointer;
		background-color:RGBA(25,170,233, 0.9) ;
		transition: all 200ms linear;
	}
	h1{
		font-weight: ${({pic}) => pic === 3 ? "600" : "200"};
		color: ${(props) => props.theme.white};
	}
	@media (max-width: 1350px){
		height: 12vh;
		line-height: 12px;
		font-size: 8px;
		top: 330px;
		left: 50px;
		overflow: hidden;
	}
	@media (max-width: 767px) {
		font-size: 8px;
		width: 15vw;
		z-index: 888;
	}
`;

export const FourthDiv = styled.div<IWords>`
	position: absolute;
	top: 100px;
	right: 100px;
	background-color:${({pic}) => pic === 4 ? "RGBA(25,170,233)" : "RGBA(25,170,233,0.7)"} ;
	width: 10vw;
	height: 20vh;
	font-size: ${({pic}) => pic === 4 ? "10px" : "12px"};
	line-height: ${({pic}) => pic === 4 ? "15px" : "20px"};
	padding: 15px;
	border-radius: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	transition: all 200ms linear;
	:hover{
		cursor: pointer;
		background-color:RGBA(25,170,233, 0.9) ;
		transition: all 200ms linear;
	}
	h1{
		font-weight: ${({pic}) => pic === 4 ? "600" : "200"};
		color: ${(props) => props.theme.white};
		}
	@media (max-width: 1350px){
		height: 12vh;
		font-size: 8px;
		top: 50px;
		line-height: 12px;
		right: 50px;
		overflow: hidden;
	}
	@media (max-width: 767px) {
		font-size: 8px;
		width: 15vw;
		z-index: 888;
	}
`;

export const FifthDiv = styled.div<IWords>`
	position: absolute;
	top: 320px;
	right: 320px;
	background-color:${({pic}) => pic === 5 ? "RGBA(25,170,233)" : "RGBA(25,170,233,0.7)"} ;
	width: 10vw;
	height: 20vh;
	font-size: ${({pic}) => pic === 5 ? "10px" : "12px"};
	line-height: ${({pic}) => pic === 5 ? "15px" : "20px"};
	padding: 15px;
	border-radius: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	transition: all 200ms linear;
	:hover{
		cursor: pointer;
		background-color:RGBA(25,170,233, 0.9) ;
		transition: all 200ms linear;
	}
	h1{
		font-weight: ${({pic}) => pic === 5 ? "600" : "200"};
		color: ${(props) => props.theme.white};
	}
	@media (max-width: 1350px){
		height: 12vh;
		font-size: 8px;
		line-height: 12px;
		top: 190px;
		right: 190px;
		overflow: hidden;
	}
	@media (max-width: 767px) {
		font-size: 8px;
		width: 15vw;
		z-index: 888;
	}
`;

export const SixthDiv = styled.div<IWords>`
	position: absolute;
	top: 540px;
	right: 540px;
	background-color:${({pic}) => pic === 6 ? "RGBA(25,170,233)" : "RGBA(25,170,233,0.7)"} ;
	width: 10vw;
	height: 20vh;
	font-size: ${({pic}) => pic === 6 ? "10px" : "12px"};
	line-height: ${({pic}) => pic === 6 ? "15px" : "20px"};
	padding: 15px;
	border-radius: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	transition: all 200ms linear;
	:hover{
		cursor: pointer;
		background-color:RGBA(25,170,233, 0.9) ;
		transition: all 200ms linear;
	}
	h1{
		font-weight: ${({pic}) => pic === 6 ? "600" : "200"};
		color: ${(props) => props.theme.white};
	}
	@media (max-width: 1350px){
		height: 12vh;
		font-size: 8px;
		top: 330px;
		line-height: 12px;
		right: 330px;
		overflow: hidden;
	}
	@media (max-width: 767px) {
		font-size: 8px;
		width: 15vw;
		z-index: 888;
	}
`;

export const SeventhDiv = styled.div<IWords>`
	position: absolute;
	top: 540px;
	right: 100px;
	background-color:${({pic}) => pic === 7 ? "RGBA(25,170,233)" : "RGBA(25,170,233,0.7)"} ;
	width: 10vw;
	height: 20vh;
	font-size: ${({pic}) => pic === 7 ? "10px" : "12px"};
	line-height: ${({pic}) => pic === 7 ? "15px" : "20px"};
	padding: 15px;
	border-radius: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	transition: all 200ms linear;
	:hover{
		cursor: pointer;
		background-color:RGBA(25,170,233, 0.9) ;
		transition: all 200ms linear;
	}
	h1{
		font-weight: ${({pic}) => pic === 7 ? "600" : "200"};
		color: ${(props) => props.theme.white};
	}
	@media (max-width: 1350px){
		height: 12vh;
		font-size: 8px;
		line-height: 12px;
		top: 330px;
		right: 50px;
		overflow: hidden;
	}
	@media (max-width: 767px) {
		font-size: 8px;
		width: 15vw;
		z-index: 888;
	}
`;

