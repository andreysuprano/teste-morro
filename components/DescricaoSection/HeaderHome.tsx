import { Button } from '../CardContato/styles';
import * as S from './styles';

export const DescricaoSection = () => {
	return (
		<S.Container>
			<S.TitleWrapper>
				<S.Title>
					A MELHOR EXPERIÊNCIA EM UM DOS <br />MELHORES E MAIS COMPLETOS HOTÉIS <br />RESORT DO BRASIL.
				</S.Title>
			</S.TitleWrapper>
			<S.Paragraph>
				No Morro dos Anjos, você aproveita o melhor da vida em família. Sua estrutura de lazer é única na região
				e está à disposição todos os meses do ano, oferecendo acomodações de alto padrão para até 10 pessoas. Um
				fantástico hotel resort, com águas quentes termais, complexo aquático, parque indoor, piscina de surfe e
				até a única praia do interior do Paraná, além de um complexo esportivo e opções com o melhor da
				gastronomia. E o melhor: ter tudo isso é mais acessível do que você imagina.
			</S.Paragraph>
			<Button style={{ marginTop: 70, marginBottom: 30 }}>QUERO FALAR COM UM CONSULTOR</Button>
		</S.Container>
	);
};
