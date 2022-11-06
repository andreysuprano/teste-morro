import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
	width: 100%;
	height: 120vh;
	position: relative;
	z-index: 500;
	margin-bottom: 52px;
`;

export const AbsoluteGradient = styled.div`
	z-index: 600;
	position: absolute;
	width: 100vw;
	height: 120vh;
	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 0.7539390756302521) 0%,
		rgba(0, 0, 0, 0.5382528011204482) 30%,
		rgba(255, 255, 255, 0.8491771708683473) 65%,
		rgba(80, 80, 80, 0.7595413165266106) 97%
	);
	@media (max-width: 900px) {
		height: 123.42vh;
	}
`;

export const Logo = styled(Image)`
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
	z-index: 700;
    width: 20vw;
    height: auto;
    @media (max-width: 1000px) {
        width: 40vw;  
    }
`;

export const WrapForm = styled.div`
	background-color: #ffffff;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	border-radius: 20px;
	width: 50vw;
	height: auto;
	position: absolute;
	top: 60%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 800;
	padding: 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 30px;
	@media (max-width: 600px) {
		top: 60%;
		width: 85vw;
		height: 900px;
		padding-bottom: 0px;
	}
`;

export const PrincipalLabel = styled.h1`
	color: ${(props) => props.theme.primary};
	font-weight: 400;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	text-align: center;
	font-size: 2.2rem;
	line-height: 40px;
	margin-top: 2vh;
	@media (max-width: 767px) {
		line-height: 30px;
		font-size: 1.2rem;
	}
`;

export const Sub = styled.p`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	text-align: center;
	font-size: 1.2rem;
	margin-top: 1vh;
	@media (max-width: 767px) {
		line-height: 20px;
		font-size: 1rem;
	}
`;

export const WrapInputs = styled.div`
	width: 50%;
	margin-top: 2vh;
	@media (max-width: 767px) {
		width: 80%;
	}
`;

export const WrapChecks = styled.div`
	width: 50%;
	min-height: 80px;
	background-color: transparent;
	margin-bottom: 1vh;
	text-align: center;
	@media (max-width: 767px) {
		width: 80%;
	}
`;

export const CheckLabel = styled.div`
	font-size: 1rem;
	color: #171946;
	margin-bottom: 2vh;
`;

export const LineBetween = styled.hr`
	width: 100%;
	height: 1px;
	border: none;
	background-color: #171946;
	margin-top: 2vh;
	margin-bottom: 2vh;
`;

export const WrapInputsChoice = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	width: 100%;
	gap: 1vw;
`;

export const WrapEach = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: left;
	align-items: left;
	flex-direction: row;
	width: 120px;
	gap: 5px;
`;
