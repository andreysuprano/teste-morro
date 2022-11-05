import styled from 'styled-components';
import { Title as TitleBase } from '../DescricaoSection/styles';
import { Button as ButtonBase } from '../CardContato/styles';

export const Container = styled.section`
    width: 100vw;
    height: auto;

    display: flex;
    justify-content: center;

`;

export const Wrapper = styled.div`
    padding: 100px;
	max-width: 1200px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 767px) {
		padding: 50px 0px 50px 0px;
	}
`;

export const BeneficiosContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    margin-top: 50px;
    margin-bottom: 50px;
    flex-wrap: wrap;
`;

export const BeneficioWrapper = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 767px) {
		padding: 25px 15px 25px 15px;
	}
`;

export const Paragraph = styled.p`
    font-size: 14px;
    font-weight: 200;
    color: ${props => props.theme.secondary};
    margin-top: 20px;
    text-align: center;
    max-width: 150px;
    @media (max-width: 767px) {
		font-size:18px;
        max-width: 150px;
        line-height: 20px;
	}
`;

export const Title = styled(TitleBase)`
    max-width: 1000px;
    @media (max-width: 767px) {
		font-size:32px;
        max-width: 300px;
        font-weight: 300;
        line-height: 40px;
        text-align: left;
	}
`;

export const Button = styled(ButtonBase)`
   @media (max-width: 767px) {
		font-size:18px;
        padding: 15px;
	}
`;