import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.section`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: auto;
	background-color: transparent;
	@media (max-width: 767px) {
		flex-direction: column;
		margin-top: -10vh;
	}
`;

export const AbsoluteBackground = styled.div`
	position: absolute;
	left: 0;
	top: 12%;
	z-index: +1;
	width: 100%;
	height: 78%;
	background-color: ${(props) => props.theme.secondary};
	@media (max-width: 767px) {
		height: 75%;
	}
`;

export const MapDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 50%;
	height: 900px;
	background-color: transparent;
	z-index: +1;

	@media (max-width: 767px) {
		width: 100%;
		margin-top: -15vh;
	}
`;

export const InfoDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 50%;
	height: 900px;
	background-color: transparent;
	z-index: +1;
	@media (max-width: 767px) {
		width: 100%;
		margin-top: -35vh;
	}
`;

export const Map = styled(Image)`
		width: 100%;
        height: auto;
        @media (max-width: 767px){
        margin-left: 0;
        margin: 0 auto;
        }
`;

export const Title = styled.h1`
	width: 83%;
	text-align: left;
	font-size: 2.4rem;
	line-height: 50px;
	font-weight: 200;
	color: ${(props) => props.theme.white};
`;

export const Wrap = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-top: 1vh;
	font-size: 14px;
	@media (max-width: 767px) {
		font-size: 12px;
		gap: 2vw;
	}
`;

export const Left = styled.div`
	width: 40%;
	height: 450px;
	display: flex-start;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	color: ${(props) => props.theme.white};
	font-weight: 200;
	@media (max-width: 767px) {
		width: 45%;
	}
`;

export const Right = styled.div`
	width: 40%;
	height: 450px;
	display: flex-start;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	color: ${(props) => props.theme.white};
	font-weight: 200;
	@media (max-width: 767px) {
		width: 45%;
	}
`;
