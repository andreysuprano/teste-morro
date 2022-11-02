import styled from 'styled-components';

export const Container = styled.section`
    width: 100vw;
    height: auto;

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
`;

export const Mapa = styled.div`
    top: 100px;
    position: absolute;
    width: 100vw;
    height: 500px;
	background: url('./assets/img/Mapa.png') no-repeat;
    background-size: cover;
    background-position: center;
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
`;

export const Title = styled.span`
    font-size: 22px;
    font-weight: 200;
    color: ${props => props.theme.white};
`;

export const City = styled.span`
    font-size: 24px;
    font-weight: 800;
    color: ${props => props.theme.primary};
`;

export const Km = styled.span`
    font-size: 46px;
    font-weight: 200;
    color: ${props => props.theme.primary};
`;

export const Divider = styled.hr`
    width: 1px;
    height: 80px;
    background-color: grey;
    border:none;
`;