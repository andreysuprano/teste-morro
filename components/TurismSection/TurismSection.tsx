import * as S from './styles';

export const TurismSection = () => {
	return (
		<S.Container>
			<S.TitleWrapper>
				<S.Title>O TURISMO PÓS-PANDEMIA SEGUE CRESCENDO</S.Title>
			</S.TitleWrapper>
			<S.Paragraph>
				Ao fim da pandemia, o interesse das pessoas pelo turismo religioso só aumenta. Veja os números e
				comprove.
			</S.Paragraph>
			<S.Grafico src="./assets/img/GRAFICO.png" />
			<S.GraficoMobile src="./assets/img/infografico.png" />
		</S.Container>
	);
};
