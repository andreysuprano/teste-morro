import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;	
	display: flex;
	justify-content: center;
`;

export const TextWrapper = styled.div`
	max-width: 600px;
	padding: 80px 50px 200px 50px;
`;

export const FormWrapper = styled.div`
	padding: 80px 50px 200px 50px;
`;

export const Title = styled.span`
	color: ${props => props.theme.white};
	font-size: 54px;
	font-weight: 200;
`;

export const Paragraph = styled.p`
	color: ${props => props.theme.secondary};
	font-size: 24px;
	font-weight: 400;
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