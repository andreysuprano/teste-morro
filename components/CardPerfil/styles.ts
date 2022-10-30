import styled from 'styled-components';

interface ContainerProps {
	imageUrl: string;
}

export const Container =styled.div <ContainerProps>`
	width: 312px;
	height: 312px;
	background-color: aliceblue;
	background: url(${props => props.imageUrl}) no-repeat;

	border-radius: 20px;
	display: flex;
	align-items: flex-end;

	margin-right:8px;
	@media (max-width: 767px) {
		margin-top: 20px;
	}
`;

export const Content = styled.div`
	width: 250px;
	padding: 20px;
`;

export const Title = styled.span`
	color: ${(props) => props.theme.white};
	font-size: 26px;
	text-align: center;
	font-weight: 500;
	margin-bottom: 40px;
	font-style: italic;
`;
