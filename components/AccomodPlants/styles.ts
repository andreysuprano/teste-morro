import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: auto;
    margin-bottom: 10vh;
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: center;
    align-items: center;
    @media (max-width: 1050px){
        flex-direction: column;
    }
`;

export const WhiteDiv = styled.div`
    width: 40%;
    height: 600px;
    display: flex;
    flex-direction: row;
    @media (max-width: 1050px){
        height: 400px;
        width: 100%;
    }
`;

export const BlueDiv = styled.div`
    width: 60%;
    height: 600px;
    background-color: ${(props) => props.theme.secondary};
    display: flex;
    flex-direction: row;
    @media (max-width: 1050px){
        height: 800px;
        width: 100%;
        margin-top: -10vh;
    }
`;

export const Wrap = styled.div`
    width: 100%;
    height: 80%;
    position: absolute;
    left: 0;
    top: 10%;
    z-index: +1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    @media (max-width: 1400px){
        left: 6%;
        width: 90%;
    }
    @media (max-width: 1050px){
        flex-direction: column;
        justify-content:center;
        gap: 2vh;
        .adapta{
            width: 300px;
            height: auto;

        }
    }
`;

export const WrapLeft = styled.div`
display: flex;
flex-direction: column;
align-items: right;
justify-content: center;
text-align: right;
h2{
    margin-bottom: 2vh;
    color: ${(props) => props.theme.primary};
    font-weight: 400;
    font-size: 2rem;
}
p{
    color: ${(props) => props.theme.secondary};
    font-weight: 400;
    font-size: 1rem;
}
h5{
    color: ${(props) => props.theme.primary};
    font-weight: 600;
    font-size: 1rem;
}
`;

export const WrapRight = styled.div`

display: flex;
flex-direction: column;
align-items: left;
justify-content: center;
text-align: left;
h2{
    margin-bottom: 2vh;
    color: ${(props) => props.theme.primary};
    font-weight: 400;
    font-size: 2rem;
}
p{
    color: ${(props) => props.theme.white};
    font-weight: 400;
    font-size: 1rem;
}
h5{
    color: ${(props) => props.theme.primary};
    font-weight: 600;
    font-size: 1rem;
}
`;

