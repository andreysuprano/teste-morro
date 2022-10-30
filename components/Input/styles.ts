import styled from "styled-components";

export const Input = styled.input`
	width: 100%;
	border-radius: 7px;
	border:none;
	padding: 10px 30px;
	font-size: 16px;
	box-sizing: border-box;
	font-weight: 400;

	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);

	margin-bottom: 20px;

	&:focus{outline:none!important;}

	&:not(:placeholder-shown){
		color: ${props => props.theme.primary};
		font-weight: 500;
	}
`;