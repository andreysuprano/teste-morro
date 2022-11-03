import { Button } from '../CardContato/styles';
import * as S from './styles';

export const DescricaoSection = () => {
	return (
		<S.Container>
			<S.TitleWrapper>
				<S.Title>A MELHOR EXPERIÊNCIA EM UM DOS MELHORES E MAIS COMPLETOS HOTÉIS RESORT DO BRASIL.</S.Title>
			</S.TitleWrapper>
			<S.Paragraph>
				No Morro dos Anjos, você aproveita o melhor da vida em família. Sua estrutura de lazer é única na região
				e está à disposição todos os meses do ano, oferecendo acomodações de alto padrão para até 10 pessoas. Um
				fantástico hotel resort, com águas quentes termais, complexo aquático, parque indoor, piscina de surfe e
				até a única praia do interior do Paraná, além de um complexo esportivo e opções com o melhor da
				gastronomia. E o melhor: ter tudo isso é mais acessível do que você imagina.
			</S.Paragraph>
			<S.ParagraphMobile>
				Viver uma experiência única em um fantástico hotel resort e conquistar tudo que você deseja para passar
				dias incríveis. Bem-vindo ao Morro dos Anjos, um mundo de águas quentes e lazer para você sua família.
			</S.ParagraphMobile>
			<S.ButtonConsultor>QUERO FALAR COM UM CONSULTOR</S.ButtonConsultor>
		</S.Container>
	);
};
