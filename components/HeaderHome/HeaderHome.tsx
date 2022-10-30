import { CardContato } from '../CardContato/CardContato';
import * as S from './styles';
import Logo from '../../assets/img/LogoAzulEBranca.png';

export const HeaderHome = () => {
	return (
		<S.Container>
			<S.LeftContainer>
				<S.Logo src={Logo} alt="" />
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
		</S.Container>
	);
};
