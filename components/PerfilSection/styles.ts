import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.section`
	width: 100vw;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ContainerPerfis = styled.section`
	width: 100vw;
	height: 320px;
	background-color: ${(props) => props.theme.secondary};

	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 767px) {
		height: auto;
		align-items: center;
	}
`;

export const Icon = styled(Image)`
	@media (max-width: 767px) {
		display: flex;
		align-items: center;
		justify-content: center;
		display: none;
	}
`;
export const IconMobile = styled(Image)`
	display: none;
	@media (max-width: 767px) {
		width: 20%;
		height: 20%;
		display: flex;
		align-content: flex-start;
		margin-left: -8px;
	}
`;

export const WrapperPerfis = styled.section`
	background-image: url('./assets/img/LOGO_MARCADAGUA.png');
	background-repeat: no-repeat;

	width: 100vw;

	max-width: 1800px;
	height: 320px;
	display: flex;
	justify-content: center;
	@media (max-width: 767px) {
		height: auto;
		flex-direction: column;
		align-items: center;
		background-position: center;
		background: none;
		background-color: #fff;
	}
`;

export const Perfis = styled.section`
	margin-top: -50px;
	display: flex;
	@media (max-width: 767px) {
		flex-direction: column;
		margin-top: -50px;
	}
`;

export const Content = styled.div`
	max-width: 700px;
	display: flex;
	align-items: center;
	margin-bottom: 150px;
	@media (max-width: 767px) {
		padding: 30px;
		margin-bottom: 50px;
	}
`;

export const TextWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	@media (max-width: 767px) {
		text-align: center;
		justify-content: left;
		flex-direction: row;
		flex-wrap: wrap;
	}
`;

export const Title = styled.span`
	color: ${(props) => props.theme.primary};
	font-size: 42px;
	font-weight: 600;
	@media (max-width: 767px) {
		color: ${(props) => props.theme.secondary};
		font-size: 32px;
		text-transform: uppercase;
		text-align: left;
		line-height: 35px;
		display: flex;
		align-items: center;
		font-weight: 300;
		max-width: 200px;
	}
`;

export const Paragraph = styled.p`
	color: ${(props) => props.theme.secondary};
	font-size: 20px;
	font-weight: 200;
	@media (max-width: 767px) {
		font-size: 16px;
		text-align: left;
		line-height: 25px;
	}
`;
