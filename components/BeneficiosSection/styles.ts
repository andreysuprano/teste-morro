import styled from 'styled-components';

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
`;

export const Paragraph = styled.p`
    font-size: 14px;
    font-weight: 200;
    font-color: ${props => props.theme.secondary};
    margin-top: 20px;
    text-align: center;
`;