import styled from 'styled-components';

export const Container = styled.div`
	background-color: rgba(255, 255, 255, 0.9);
	width: 423px;
	height: auto;
	padding: 40px;
	border-radius: 20px;
	box-sizing: border-box;

	display: flex;
	flex-direction: column;
	align-items: center;

	box-shadow: 0px 12px 18px rgba(0, 0, 0, 0.16);
	@media (max-width: 767px) {
		width: 320px;
		padding: 30px;
	}
`;

export const Title = styled.span`
	color: ${(props) => props.theme.secondary};
	font-size: 24px;
	text-align: center;
	font-weight: 300;
	margin-bottom: 40px;
	@media (max-width: 767px) {
		font-size: 20px;
		font-weight: 400;
	}
`;

export const Button = styled.button`
	background-color: ${(props) => props.theme.primary};
	box-sizing: border-box;
	padding: 10px 40px;
	border: none;
	border-radius: 26px;
	color: ${(props) => props.theme.white};
	font-size: 20px;
	cursor: pointer;
`;
