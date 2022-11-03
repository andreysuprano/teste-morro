import * as S from './styles';

interface footerProps {
	imageBackground: string;
	footerComponent: React.ReactElement;
}

export const Footer = ({ imageBackground, footerComponent }: footerProps) => {
	return (
		<S.Container imageBackground={imageBackground}>
			<S.Wrapper>
				{footerComponent}
				<S.Footer>
					<h1>footer content</h1>
				</S.Footer>
			</S.Wrapper>
		</S.Container>
	);
};
