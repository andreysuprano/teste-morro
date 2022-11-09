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
		/* height: 600px;
		align-items: center;
        flex-direction: column;
		margin-bottom: -100px; */
		display: none;
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
	background-color:${({pic}) => pic === 0 ? "RGBA(25,170,233)" : "RGBA(25,170,233,0.7)"} ;
	width: 10vw;
	height: 20vh;
	font-size: ${({pic}) => pic === 0 ? "14px" : "16px"};
	line-height: ${({pic}) => pic === 0 ? "20px" : "25px"};
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
		font-weight: ${({pic}) => pic === 0 ? "600" : "200"};
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
	background-color:${({pic}) => pic === 1 ? "RGBA(25,170,233)" : "RGBA(25,170,233,0.7)"} ;
	width: 10vw;
	height: 20vh;
	font-size: ${({pic}) => pic === 1 ? "14px" : "16px"};
	line-height: ${({pic}) => pic === 1 ? "20px" : "25px"};
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
		font-weight: ${({pic}) => pic === 1 ? "600" : "200"};
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
	background-color:${({pic}) => pic === 2 ? "RGBA(25,170,233)" : "RGBA(25,170,233,0.7)"} ;
	width: 10vw;
	height: 20vh;
	font-size: ${({pic}) => pic === 2 ? "14px" : "16px"};
	line-height: ${({pic}) => pic === 2 ? "20px" : "25px"};
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
	background-color:${({pic}) => pic === 3 ? "RGBA(25,170,233)" : "RGBA(25,170,233,0.7)"} ;
	width: 10vw;
	height: 20vh;
	font-size: ${({pic}) => pic === 3 ? "14px" : "16px"};
	line-height: ${({pic}) => pic === 3 ? "20px" : "25px"};
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
	background-color:${({pic}) => pic === 4 ? "RGBA(25,170,233)" : "RGBA(25,170,233,0.7)"} ;
	width: 10vw;
	height: 20vh;
	font-size: ${({pic}) => pic === 4 ? "14px" : "16px"};
	line-height: ${({pic}) => pic === 4 ? "20px" : "25px"};
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
	background-color:${({pic}) => pic === 5 ? "RGBA(25,170,233)" : "RGBA(25,170,233,0.7)"} ;
	width: 10vw;
	height: 20vh;
	font-size: ${({pic}) => pic === 5 ? "14px" : "16px"};
	line-height: ${({pic}) => pic === 5 ? "20px" : "25px"};
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
	background-color:${({pic}) => pic === 6 ? "RGBA(25,170,233)" : "RGBA(25,170,233,0.7)"} ;
	width: 10vw;
	height: 20vh;
	font-size: ${({pic}) => pic === 6 ? "14px" : "16px"};
	line-height: ${({pic}) => pic === 6 ? "20px" : "25px"};
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

export const ContainerMobile = styled.section`
	@media (max-width: 767px) {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: transparent;
		width: 100%;
		height: 600px;
		overflow: hidden;
		position: relative;
		margin-top: 2vh;
		margin-bottom: 2vh;
		position: relative;
	}
	@media (min-width: 768px) {
		display: none;
	}
`;
export const BtnLeftMobile = styled.button`
position: absolute;
top: 0;
left: 0;
width: 50%;
height: 100vw;
background-color: transparent;
z-index: 888;
border: none;
`;

export const BtnRightMobile = styled.button`
position: absolute;
top: 0;
right: 0;
width: 50%;
height: 100vw;
background-color: transparent;
z-index: 888;
border: none;
`;

export const ComponentBackgroundMobileFirst = styled(Image)`
	@media (max-width: 767px) {
		width: 200%;
		min-height: 90%;
		height: auto;
		position: absolute;
		top: 0;
		left: -210px;
		animation-name: fromSide;
		animation-duration: 400ms;
		animation-timing-function: linear;
	}
	@keyframes fromSide {
		from{
			opacity: 0;
			transform: translateX(500px);
		}
		to{
			opacity: 1;
			transform: translateX(0);

		}
	}
	@media (min-width: 768px) {
		display: none;
	}
`;

export const WrapCircles = styled.div`
	@media (max-width: 767px) {
		display: flex;
		justify-content:center;
		align-items:center;
		flex-direction: row;
		width: 100%;
		gap: 4vw;
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 888;

	}
	@media (min-width: 768px) {
		display: none;
	}
`;

export const Circle1 = styled.div<IWords>`
	@media (max-width: 767px) {
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background-color:${({pic}) => pic === 0 ? "RGBA(25,170,233)" : "#ffff"} ;

	border: 2px solid #171946;
	}
	@media (min-width: 768px) {
		display: none;
	}
`;

export const Circle2 = styled.div<IWords>`
	@media (max-width: 767px) {
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background-color:${({pic}) => pic === 1 ? "RGBA(25,170,233)" : "#ffff"} ;

	border: 2px solid #171946;
	}
	@media (min-width: 768px) {
		display: none;
	}
`;

export const Circle3 = styled.div<IWords>`
	@media (max-width: 767px) {
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background-color:${({pic}) => pic === 2 ? "RGBA(25,170,233)" : "#ffff"} ;

	border: 2px solid #171946;
	}
	@media (min-width: 768px) {
		display: none;
	}
`;

export const Circle4 = styled.div<IWords>`
	@media (max-width: 767px) {
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background-color:${({pic}) => pic === 3 ? "RGBA(25,170,233)" : "#ffff"} ;

	border: 2px solid #171946;
	}
	@media (min-width: 768px) {
		display: none;
	}
`;

export const Circle5 = styled.div<IWords>`
	@media (max-width: 767px) {
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background-color:${({pic}) => pic === 4 ? "RGBA(25,170,233)" : "#ffff"} ;

	border: 2px solid #171946;
	}
	@media (min-width: 768px) {
		display: none;
	}
`;

export const Circle6 = styled.div<IWords>`
	@media (max-width: 767px) {
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background-color:${({pic}) => pic === 5 ? "RGBA(25,170,233)" : "#ffff"} ;

	border: 2px solid #171946;
	}
	@media (min-width: 768px) {
		display: none;
	}
`;

export const Circle7 = styled.div<IWords>`
	@media (max-width: 767px) {
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background-color:${({pic}) => pic === 6 ? "RGBA(25,170,233)" : "#ffff"} ;
	border: 2px solid #171946;
	}
	@media (min-width: 768px) {
		display: none;
	}
`;