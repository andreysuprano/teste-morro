import { Title } from '../DescricaoSection/styles';
import * as S from './styles';
import Image from 'next/image';

import KeyIcon from '../../assets/svg/KeyIcon.svg';
import CalendarIcon from '../../assets/svg/CalendarIcon.svg';
import HomeIcon from '../../assets/svg/HomeIcon.svg';
import SwingIcon from '../../assets/svg/SwingIcon.svg';
import PatrimonyIcon from '../../assets/svg/PatrimonyIcon.svg';
import { Button } from '../CardContato/styles';

export const BeneficiosSection = () => {
	return (
		<S.Container>
			<S.Wrapper>
				<Title style={{ maxWidth: 1000 }}>NO MORRO DOS ANJOS, VOCÊ PAGA PELO TEMPO QUE QUISER USAR.</Title>
				<S.BeneficiosContainer>
					<S.BeneficioWrapper>
						<Image src={KeyIcon} alt="" />
						<S.Paragraph>Um jeito mais acessível de comprar o seu imóvel</S.Paragraph>
					</S.BeneficioWrapper>
					<S.BeneficioWrapper>
						<Image src={CalendarIcon} alt="" />
						<S.Paragraph>Escolha o período para usar e quanto quer pagar</S.Paragraph>
					</S.BeneficioWrapper>
					<S.BeneficioWrapper>
						<Image src={HomeIcon} alt="" />
						<S.Paragraph>Casa de alto padrão com custos fixos mensais menores</S.Paragraph>
					</S.BeneficioWrapper>
					<S.BeneficioWrapper>
						<Image src={SwingIcon} alt="" />
						<S.Paragraph>
							Sua casa sem stress: você não se preocupa com manutenção, imprevistos ou reformas
						</S.Paragraph>
					</S.BeneficioWrapper>
					<S.BeneficioWrapper>
						<Image src={PatrimonyIcon} alt="" />
						<S.Paragraph>Patrimônio familiar: imóveis com escritura pública e matrícula</S.Paragraph>
					</S.BeneficioWrapper>
				</S.BeneficiosContainer>
				<Button>QUERO FALAR COM UM CONSULTOR</Button>
			</S.Wrapper>
		</S.Container>
	);
};
