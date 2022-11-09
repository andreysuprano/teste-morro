import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	background-image: url('./assets/img/backLeisure.png');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50% 50%;
`;

export const WrapTitle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	width: 90%;
	height: auto;
	margin-top: -40vh;
	h1 {
		font-weight: 300;
		color: ${(props) => props.theme.secondary};
		font-size: 4rem;
	}
	@media (max-width: 767px) {
		h1 {
			font-size: 2.8rem;
			font-weight: 300;
			text-align: center;
		}
	}
`;
