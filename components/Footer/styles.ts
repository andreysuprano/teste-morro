import styled from 'styled-components';

interface IImage {
	imageBackground?: string;
}

export const Container = styled.div <IImage>`
	width: 100vw;	
    flex-direction: column;
    background: url(${(props) => props.imageBackground});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Wrapper = styled.div <IImage>`
	position: relative;
	padding-bottom:300px ;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Footer = styled.footer`
	background-color: RGBA(23, 25, 70, 0.95);
	width: 100%;
	height: 312px;
	padding: 20px;
	position: absolute;
	bottom: 0;
	left: 0;
`;
