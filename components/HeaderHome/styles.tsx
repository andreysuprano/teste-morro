import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.section`
	width: 100vw;
	height: auto;
	background: url('./assets/img/backgroundTopo.png') no-repeat;
	background-size: cover;
	background-position: 50% 50%;
	display: flex;
	justify-content: center;
	padding-bottom: 200px;
	flex-wrap: wrap;
	@media (max-width: 767px) {
		padding-bottom: 0px;
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
		display: none;
	}
`;

export const MobileTitle = styled.div`
	display: flex;
	flex-direction: column;
	display: none;
	@media (max-width: 767px) {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 100px;
	}
`;

export const MobileIcon = styled.div`
	display: none;
	@media (max-width: 767px) {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 80px 0px 30px 0px;
	}
`;

export const Title = styled.span`
	color: ${(props) => props.theme.secondary};
	font-size: 60px;
	text-align: end;
	display: flex;
	flex-direction: column;
	font-weight: 300;
	@media (max-width: 767px) {
		font-size: 37px;
		text-align: center;
	}
`;

export const Hilight = styled(Title)`
	color: ${(props) => props.theme.white};
`;

export const Logo = styled(Image)`
	margin-bottom: 130px;
	@media (max-width: 767px) {
		width: 80%;
		height:80%;
		margin-bottom: 20px;
		margin-top: 50px;
	}
`;
