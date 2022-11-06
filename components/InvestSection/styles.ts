import styled from 'styled-components';

export const Container = styled.section`
	width: 100vw;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 100px;
	overflow-x: hidden;
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
		padding: 40px;
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
	margin-top: 30px;
	margin-bottom: 30px;
	gap: 40px;
`;

export const Data = styled.div`
	display:flex;
	flex-direction: column;
`;

export const DataTitle = styled.span`
	color: ${(props) => props.theme.secondary};
	font-size: 22px;
	font-weight: 500;
	line-height: 30px;
`;

export const DataTitleHilight = styled(DataTitle)`
	color: ${(props) => props.theme.primary};

`;

export const DataMinWeight = styled(DataTitle)`
	color: ${(props) => props.theme.secondary};
	font-weight: 200;
`;

export const DataValue = styled(DataTitle)`
	color: ${(props) => props.theme.secondary};
	font-size: 28px;
	font-weight: 800;
`;

export const GridImage = styled.img`

`;

