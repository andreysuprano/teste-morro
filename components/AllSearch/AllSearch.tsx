import * as S from './styles';
import Image from 'next/image';
import Security from '../../assets/svg/Security.svg';
import Rental from '../../assets/svg/Rental.svg';
import Liquidty from '../../assets/svg/Liquidty.svg';

export const AllSearch = () => {
	return (
		<S.Container>
			<S.TitleWrapper>
				<S.Title>O MORRO DOS ANJOS TEM TUDO O QUE VOCÊ PROCURA.</S.Title>
			</S.TitleWrapper>

			<S.Spans>
				<S.SpanWrapper>
					<Image src={Security} alt="" />
					<S.TextWrapper>
						<S.TitleSpan>SEGURANÇA</S.TitleSpan>
						<S.Paragraph>
							Comprar seu imóvel no Morro dos Anjos é um investimento seguro, com muitos ganhos.
						</S.Paragraph>
					</S.TextWrapper>
				</S.SpanWrapper>
				<S.SpanWrapper>
					<Image src={Rental} alt="" />
					<S.TextWrapper>
						<S.TitleSpan>RENTABILIDADE</S.TitleSpan>
						<S.Paragraph>
							Possibilidade de alto retorno baseado em taxa de ocupação superior à média nacional.
						</S.Paragraph>
					</S.TextWrapper>
				</S.SpanWrapper>
				<S.SpanWrapper>
					<Image src={Liquidty} alt="" />
					<S.TextWrapper>
						<S.TitleSpan>LIQUIDEZ</S.TitleSpan>
						<S.Paragraph>
							Resultado da qualidade do empreendimento somado à exclusividade do produto.
						</S.Paragraph>
					</S.TextWrapper>
				</S.SpanWrapper>
			</S.Spans>
		</S.Container>
	);
};
