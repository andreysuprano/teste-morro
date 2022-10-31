import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.section`
	width: 100vw;
	height: 900px;
	background-color: transparent;
	display: flex;
    flex-direction: row;
	justify-content: center;
	align-items: center;
    margin-bottom: 10vh;
	@media (max-width: 767px) {
		height: auto;
		align-items: center;
        flex-direction: column;
	}
`;

export const WrapLeft = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
	background-color: blue;

`;

export const WrapRight = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
	background-color: green;

`;

export const FirstDiv = styled.div`

`;

export const SecondDiv = styled.div`

`;

export const ThirdDiv = styled.div`

`;

export const FourthDiv = styled.div`

`;

export const FifthDiv = styled.div`

`;

export const SixthDiv = styled.div`

`;

export const SeventhDiv = styled.div`

`;