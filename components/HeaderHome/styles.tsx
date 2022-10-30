import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.section`
	width: 100vw;
	height: 100vh;
	background: url('./assets/img/backgroundTopo.png') no-repeat;
	background-size: cover;
	display: flex;
	justify-content: center;
	@media (max-width: 767px) {
		height: auto;
		flex-direction: column;
	}
`;

export const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media (max-width: 767px) {
		align-items: center;
	}
`;

export const RightContainer = styled.div`
	padding: 150px;
	@media (max-width: 767px) {
		align-items: center;
	}
`;

export const Title = styled.span`
	color: ${(props) => props.theme.secondary};
	font-size: 60px;
	text-align: end;
	display: flex;
	flex-direction: column;
	font-weight: 300;
`;

export const Hilight = styled(Title)`
	color: ${(props) => props.theme.white};
`;

export const Logo = styled(Image)`
	margin-bottom: 130px;
`;
