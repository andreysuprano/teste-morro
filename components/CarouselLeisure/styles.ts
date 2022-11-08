import styled from 'styled-components';

export const Container = styled.section`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 4vh;

`;

export const Wrap = styled.div`
	width: 70%;
	max-width: 70%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 4vh;
	@media (max-width: 767px) {
		display: none;
		width: 200px;
		max-width: 200px;
		.carousel img {
			border-radius: 0px;
		}
	}
	.carousel .thumbs {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: auto;
	}
	.carousel .thumb:hover {
		cursor: pointer;
	}
	.carousel .slide .legend {
		background: transparent;
		color: #ffff;
		opacity: 1;
		font-size: 1.4rem;
		font-weight: 300;
	}
	.carousel img {
		border-radius: 15px;
	}
	.carousel .thumb.selected,
	.carousel .thumb:hover {
		border: 3px solid ${(props) => props.theme.primary};
		border-radius: 20px;
	}
`;

export const Title = styled.h1`
	font-size: 2.2rem;
	margin-top: 4vh;
	width: 90%;
	text-align: center;
	color: ${(props) => props.theme.secondary};
	font-weight: 400;
	@media (max-width: 767px) {
		font-size: 1.4rem;
	}
`;

export const SubTitle = styled.p`
	width: 90%;
	text-align: center;
	color: ${(props) => props.theme.secondary};
`;
