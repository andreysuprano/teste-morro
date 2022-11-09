import styled from "styled-components";
import {Button as BaseButton} from '../CardContato/styles';

interface ComponentInverse {
    inverse:boolean;
}

interface ButtonProps {
    position:boolean;
}

interface ImgageDiv{
    src:string;
}

export const Container = styled.section<ComponentInverse>`
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-direction: ${props => props.inverse ? 'row-reverse':'row'};
    margin: 100px 0px;
    @media (max-width: 767px) {
        gap: 20px;
        flex-wrap: wrap;
	}
`;

export const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    padding: 15px;
`;

export const ListItem = styled.li<ComponentInverse>`
    font-size:20px;
    color: ${props => props.theme.primary};
    text-align: ${props => props.inverse ? 'left':'right'};
    list-style: none;
`;

export const GridContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    @media (max-width: 767px) {
        overflow-x: hidden;
        padding: 20px;
        gap: 15px;
	}
`;

export const ThumbContainer = styled.div<ComponentInverse>`
    display: flex;
    align-items: center;
    justify-content: ${props => props.inverse ? 'flex-end' :'flex'};
    gap: 25px;
    @media (max-width: 767px) {
        justify-content: center;
        align-items: center;
        overflow-x: hidden;
        gap: 15px;
	}
`;

export const Image = styled.img`
    width: 100%;
`;

export const PrincipalImage = styled.img`
    width: 100%;
`;

export const ImageWrapper = styled.div`
    display: flex;
`;

export const Title = styled.span<ComponentInverse>`
    font-size: 3.6rem;
    line-height: 70px;
    font-weight: 200;
    color: ${props => props.theme.secondary};
    display: flex;
    text-align: ${props => props.inverse ? 'left':'right'};
    @media (max-width: 767px) {
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 35px;
	}
`;

export const Hilight = styled(Title)`
    color: ${props => props.theme.primary};
`;

export const Paragraph = styled.p<ComponentInverse>`
    font-size: 1.2rem;
    line-height: 30px;
    font-weight: 200;
    color: ${props => props.theme.secondary};
    text-align: ${props => props.inverse ? 'left':'right'};
    @media (max-width: 767px) {
        text-align: center;
        padding: 0px 15px;
	}
`;

export const Button = styled(BaseButton)<ButtonProps>`
    margin-top: ${props => !props.position ? '50px' : '-200px'};
    @media (max-width: 767px) {
		display:none;
	}
`;

export const ButtonMobileWrapper = styled.div`
	display:none;
    width: 100vw;
    margin-top: -50px;
    @media (max-width: 767px) {
		display:flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 100px;
	}
`;

export const ButtonMobile = styled(BaseButton)<ButtonProps>`
	display:none;
    width: 90%;
    @media (max-width: 767px) {
		display:flex;
        align-items: center;
        justify-content: center;
	}
`;

export const List = styled.div`
    @media (max-width: 767px) {
        padding: 0px 20px;
	}
`;