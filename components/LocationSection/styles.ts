import styled from 'styled-components';

export const Container = styled.section`
	width: 100vw;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 100px;
	flex-wrap: wrap;
`;

export const GridWrapper = styled.div`
	width: 100vw;
	display: flex;
	gap: 40px;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	@media (max-width: 767px) {
		justify-content: center;
		align-items: center;
	}
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 400px;
	@media (max-width: 767px) {
		width: 100vw;
		max-width: 100vw;
		justify-content: center;
		align-items: center;
	}
	@media (max-width: 900px) {
		width: 100vw;
		max-width: 100vw;
		padding: 40px;
	}
	@media (max-width: 1300px) {
		width: 100vw;
		max-width: 100vw;
		padding:  40px;
	}
`;

export const Title = styled.span`
	color: ${(props) => props.theme.secondary};
	font-size: 48px;
	display: flex;
	text-align: left;
	font-weight: 100;
	line-height: 50px;
	@media (max-width: 767px) {
		font-size: 36px;
		font-weight: 200;
		text-align: center;
	}
`;

export const Pragraph = styled.p`
	color: ${(props) => props.theme.secondary};
	font-size: 18px;
	font-weight: 200;
	margin-top: 30px;
	@media (max-width: 767px) {
		text-align: center;
	}
`;

export const DataWrapper = styled.div`
	display:flex;
	flex-direction: column;
	margin-top: 30px;
	margin-bottom: 30px;
`;

export const Data = styled.div`
	display:flex;
	flex-direction: column;
`;

export const DataTitle = styled.span`
	color: ${(props) => props.theme.secondary};
	font-size: 22px;
	font-weight: 500;
	line-height: 45px;
`;

export const DataTitleHilight = styled(DataTitle)`
	color: ${(props) => props.theme.primary};
	font-size: 48px;
	font-weight: 700;
	@media (max-width: 767px) {
		display: none;
	}
`;

export const DataMinWeight = styled(DataTitle)`
	color: ${(props) => props.theme.secondary};
	font-weight: 400;
	line-height: 30px;
	@media (max-width: 767px) {
		display: none;
	}
`;

export const DataTitleHilightMobile = styled(DataTitle)`
	color: ${(props) => props.theme.primary};
	font-size: 48px;
	font-weight: 700;
	display: none;
	@media (max-width: 767px) {
		display: flex;
		margin-top: -150px;
	}
`;

export const DataMinWeightMobile = styled(DataTitle)`
	color: ${(props) => props.theme.secondary};
	font-weight: 400;
	line-height: 30px;
	display: none;
	@media (max-width: 767px) {
		display: flex;
	}
`;

export const GridImage = styled.img`
	@media (max-width: 767px) {
		transform: scale(0.6);
		margin-top: -200px;
	}
`;

export const ImageWrapper = styled.div`
	@media (max-width: 767px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

