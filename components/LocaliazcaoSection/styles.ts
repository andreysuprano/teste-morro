import styled from 'styled-components';
import { Title as BaseTitle } from '../DescricaoSection/styles';
import { Button as BaseButton } from '../CardContato/styles';

export const Container = styled.section`
    width: 100vw;
    height: 900px;

    display: flex;
    justify-content: center;
    position: relative;
    flex-wrap: wrap;
`;

export const Wrapper = styled.div`
    background-color: ${props=>props.theme.secondary};
    position: absolute;
    width: 70vw;
    height: 750px;
    max-width: 800px;
    border-radius: 12px;
    padding: 30px;

    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 500px;

    @media (max-width: 767px) {
        width: 100vw;
        height: 780px;
        padding: 20px 0px 0px 0px;
        border-radius: 0px;
	}
`;

export const Mapa = styled.div`
    top: 100px;
    position: absolute;
    width: 100vw;
    height: 500px;
	background: url('./assets/img/Mapa.png') no-repeat;
    background-size: cover;
    background-position: center;
    @media (max-width: 767px) {
        height: 450px;
        background-position: 47% 50%;
	}
`;

export const Localizacoes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const Localizacao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding:50px;
    @media (max-width: 767px) {
        padding:10px;
	}
`;

export const Title = styled.span`
    font-size: 22px;
    font-weight: 200;
    color: ${props => props.theme.white};
    @media (max-width: 767px) {
        font-size: 14px;
	}
`;

export const SectionTitle = styled(BaseTitle)`
    color: ${props => props.theme.white};
    @media (max-width: 767px) {
        font-size: 32px;
	}
`;

export const City = styled.span`
    font-size: 24px;
    font-weight: 800;
    color: ${props => props.theme.primary};
    @media (max-width: 767px) {
        font-size: 20px;
	}
`;

export const Km = styled.span`
    font-size: 46px;
    font-weight: 200;
    color: ${props => props.theme.primary};
    @media (max-width: 767px) {
        font-size: 30px;
	}
`;

export const Divider = styled.hr`
    width: 1px;
    height: 80px;
    background-color: grey;
    border:none;
    @media (max-width: 767px) {
        height: 90px;
	}
`;

export const Button = styled(BaseButton)`
    position: absolute;
    top: 785px;
    @media (max-width: 767px) {
        top: 710px;
        font-size: 17px;
	}
`;