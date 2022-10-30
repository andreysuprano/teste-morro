import styled from 'styled-components';

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
	background: url('./assets/img/LOGO_MARCADAGUA.png') no-repeat;
	background-position: center;
	padding: 150px 0px;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 1000px;
`;

export const Title = styled.span`
	color: ${(props) => props.theme.secondary};
	font-size: 48px;
	display: flex;
	text-align: center;
	font-weight: 100;
	line-height: 50px;
`;

export const Paragraph = styled.p`
	color: ${(props) => props.theme.secondary};
	font-size: 20px;
	display: flex;
	text-align: center;
	max-width: 1200px;
	font-weight: 200;
	@media (max-width: 767px) {
		padding: 0px 50px;
	}
`;
