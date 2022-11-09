import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: -10vh;
    @media (max-width: 1400px){
       margin-bottom: 20vh;
    }
    @media (max-width: 1200px){
       margin-bottom: 10vh;
    }
    @media (max-width: 900px){
        flex-direction: column;
        margin-top: 0;
        height: auto;
        margin-bottom: 2vh;
    }
`;

export const Left = styled.div`
    width: 500px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 1vh;
    @media (max-width: 900px){
       width: 100%;
    }
    h1{
        color:${(props) => props.theme.secondary};
        font-size: 3rem;
        line-height: 50px;
        font-weight: 300;
        text-align: right;
        @media (max-width: 900px){
            font-size: 2.6rem;
            line-height: 35px;
            width: 90%;
            margin-top: 4vh;
        }
    }
    p{
        color:${(props) => props.theme.secondary};
        font-size: 1rem;
        line-height: 20px;
        font-weight: 400;
        text-align: right;
        margin-left: 60px;
        width: 310px;
        margin-bottom: 260px;
        @media (max-width: 900px){
            font-size: 1rem;
            width: 90%;
            margin-left: 0;

        }
    }
`;

export const Right = styled.div`
    width: 800px;
    height:  500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-image: url('./assets/img/int.png');
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: 900px){
        width:100%;
        height: auto;
    }
    .btnThings{
        margin-top: 60vh;
        @media (max-width: 900px){
            margin-top: 50vh;
       
        }
    }
`;

export const Absolute01 = styled.div`
position: absolute;
bottom: -80px;
left: 170px;
border-radius: 20px;
background-color: #fff;
    @media (max-width: 900px){
        bottom: -80px;
        left: 40px;
        background-color: transparent;
        }
     .imgclass1{
        width: 200px;
        height: 200px;
        border: 1px solid ${(props) => props.theme.secondary};
        padding: 20px;
        border-radius: 20px;
        @media (max-width: 900px){
            border: none;
        }
    }
h4{
    color: ${(props) => props.theme.primary};
    font-weight: 500;
    font-size: 1.4rem;
}
h5{
    color: ${(props) => props.theme.secondary};
    font-weight: 500;
    font-size: 1rem;
    line-height: 20px;
    @media (max-width: 900px){
        color: ${(props) => props.theme.white};
        }
}
`;

export const Absolute02 = styled.div`
position: absolute;
bottom: -160px;
left: 430px;
border-radius: 20px;
background-color: #fff;
    @media (max-width: 900px){
        bottom: -410px;
        left: 150px;
        background-color: transparent;
        }
   .imgclass2{
        width: 200px;
        height: 200px;
        border: 1px solid ${(props) => props.theme.secondary};
        padding: 20px;
        border-radius: 20px;
        @media (max-width: 900px){
            border: none;
        }
    }
h4{
    color: ${(props) => props.theme.primary};
    font-weight: 500;
    font-size: 1.4rem;
}
h5{
    color: ${(props) => props.theme.secondary};
    font-weight: 500;
    font-size: 1rem;
    line-height: 20px;
    @media (max-width: 900px){
        color: ${(props) => props.theme.white};
        }
}
`;


