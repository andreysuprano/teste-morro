import styled from 'styled-components';
import { Button } from '../CardContato/styles';

export const Container = styled.section`
	width: 100vw;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 100px 0px;
`;

export const TitleWrapper = styled.div`
	background: url('./assets/img/LOGO_MARCADAGUA.png') no-repeat;
	background-position: center;
	padding: 170px 0px;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 1000px;
	@media (max-width: 767px) {
        background-size: contain;
        padding: 80px 30px 20px 30px;
	}
`;

export const Title = styled.span`
	color: ${(props) => props.theme.secondary};
	font-size: 48px;
	display: flex;
	text-align: center;
	font-weight: 100;
	line-height: 50px;
	@media (max-width: 767px) {
		font-size: 36px;
		font-weight: 200;
		text-align: center;
	}
`;

export const TitleSpan = styled(Title)`
	font-size: 40px;
    @media (max-width: 767px) {
        text-align: center;
	}
`;

export const Paragraph = styled.p`
    max-width: 300px;
    color: ${(props) => props.theme.secondary};
    font-weight: 200;
    @media (max-width: 767px) {
        max-width: 350px;
        font-size:18px;
	}
`;

export const SpanWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    @media (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
	}
`;

export const Spans = styled.div`
    display: flex;
    gap: 80px;
    flex-wrap: wrap;
    justify-content: center;
	@media (max-width: 767px) {
        align-items: center;
	}
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 767px) {
        align-items: center;
        text-align: center;
	}
`;