import { CardContato } from '../CardContato/CardContato';
import Image from 'next/image';
import * as S from './styles';

import Logo from '../../assets/img/LogoAzulEBranca.png';
import BottomIcon from '../../assets/svg/BottomIcon.svg';

export const HeaderHome = () => {
	return (
		<S.Container>
			<S.LeftContainer>
				<S.Logo src={Logo} alt="" />
				<S.MobileTitle>
					<S.Title>
						LAZER E CONFORTO
						<S.Hilight>
							PARA VOCÊ <br />E SUA FAMÍLIA{' '}
						</S.Hilight>
						O ANO INTEIRO.
					</S.Title>
				</S.MobileTitle>
				<CardContato />
			</S.LeftContainer>
			<S.RightContainer>
				<S.Title>
					LAZER E CONFORTO
					<S.Hilight>
						PARA VOCÊ <br />E SUA FAMÍLIA{' '}
					</S.Hilight>
					O ANO INTEIRO.
				</S.Title>
			</S.RightContainer>
			<S.MobileIcon>
				<Image src={BottomIcon} alt="" />
			</S.MobileIcon>
		</S.Container>
	);
};
