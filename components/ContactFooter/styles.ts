import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;	
	display: flex;
	justify-content: center;
	@media (max-width: 767px) {
		flex-wrap: wrap;
	}
`;

export const TextWrapper = styled.div`
	max-width: 600px;
	padding: 80px 50px 200px 50px;
	@media (max-width: 767px) {
		padding: 80px 50px 0px 50px;
	}
`;

export const FormWrapper = styled.div`
	padding: 80px 50px 200px 50px;
	@media (max-width: 767px) {
		padding: 80px 50px 80px 50px;
	}
`;

export const Title = styled.span`
	color: ${props => props.theme.white};
	font-size: 54px;
	font-weight: 200;
	@media (max-width: 767px) {
		font-size: 34px;
	}
`;

export const Paragraph = styled.p`
	color: ${props => props.theme.secondary};
	font-size: 24px;
	font-weight: 400;
	@media (max-width: 767px) {
		font-size: 18px;
	}
`;

export const FormLabel = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 350px;
	color: ${props => props.theme.white};
	font-size: 22px;
	font-weight: 300;
	padding: 20px;
`;