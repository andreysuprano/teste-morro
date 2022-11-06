import styled from 'styled-components';
import { Button } from '../CardContato/styles';

export const Container = styled.section`
	width: 100vw;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 50px 0px;
`;

export const TitleWrapper = styled.div`
	background-position: center;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 1000px;
	@media (max-width: 767px) {
		padding: 30px;
	}
`;

export const Title = styled.span`
	color: ${(props) => props.theme.secondary};
	font-size: 48px;
	display: flex;
	text-align: center;
	font-weight: 100;
	line-height: 50px;
	@media (max-width: 767px) {
		font-size: 36px;
		font-weight: 200;
		text-align: center;
	}
`;

export const Paragraph = styled.p`
	color: ${(props) => props.theme.secondary};
	font-size: 20px;
	display: flex;
	text-align: center;
	max-width: 600px;
	font-weight: 200;
	@media (max-width: 767px) {
		padding: 0px 50px;
	}
`;

export const ButtonConsultor = styled(Button)`
	margin-top: 70px;
	margin-bottom: 30px;
	display: none;
	@media (max-width: 767px) {
		display: flex;
		margin-top: 30px;
		margin-bottom: 30px;
		font-size: 18px;
		padding: 15px;
	}
`;

export const Grafico = styled.img`
	margin-bottom: 50px;
	@media (max-width: 767px) {
		display: none;
		transform: scale(0.6);
	}
`;

export const GraficoMobile = styled.img`
	margin-bottom: 50px;
	display: none;
	@media (max-width: 767px) {
		display: flex;
		width: 100%;
		margin-top: 50px;
	}
`;
