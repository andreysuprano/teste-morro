import styled from "styled-components";
import {Button as BaseButton} from '../CardContato/styles';

interface ComponentInverse {
    inverse:boolean;
}

interface ButtonProps {
    position:boolean;
}

export const Container = styled.section<ComponentInverse>`
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    flex-direction: ${props => props.inverse ? 'row-reverse':'row'};
    margin: 100px 0px;
`;

export const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 450px;
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
	}
`;

export const Image = styled.img`
   @media (max-width: 767px) {
	}
`;

export const PrincipalImage = styled.img`
    @media (max-width: 767px) {

	}
`;

export const Title = styled.span<ComponentInverse>`
    font-size: 3.6rem;
    line-height: 70px;
    font-weight: 200;
    color: ${props => props.theme.secondary};
    display: flex;
    text-align: ${props => props.inverse ? 'left':'right'};
    @media (max-width: 767px) {
        font-size: 3rem;
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
`;

export const Button = styled(BaseButton)<ButtonProps>`
    margin-top: ${props => !props.position ? '50px' : '-200px'};
    @media (max-width: 767px) {
		display:none;
	}
`;