import * as S from './styles';

import PointerIcon from '../../assets/svg/PointerIcon.svg';
import { CardPerfil } from '../CardPerfil/CardPerfil';
import Link from 'next/link';

export const PerfilSection = () => {
	return (
		<div>
			<S.Container>
				<S.Content>
					<S.Icon src={PointerIcon} alt="" />
					<S.TextWrapper>
						<S.IconMobile src={PointerIcon} alt="" />
						<S.Title>Escolha o seu perfil</S.Title>
						<S.Paragraph>
							Você tem 3 maneiras de usufruir o Morro dos Anjos. Escolha qual se encaixa melhor em seu
							perfil e explore uma experiência personalizada.
						</S.Paragraph>
					</S.TextWrapper>
				</S.Content>
			</S.Container>
			<S.ContainerPerfis>
				<S.WrapperPerfis>
					<S.Perfis>
						<Link href={"/family"} style={{textDecoration: "none", color:"inherit"}}><CardPerfil title="CURTIR COM A FAMÍLIA" href="" imageUrl="./assets/img/FAMILIA.png" /></Link>
						<Link href={"/invest"} style={{textDecoration: "none", color:"inherit"}}><CardPerfil title="INVESTIR" href="" imageUrl="./assets/img/INVESTIDOR.png" /></Link>
						<Link href={"/faith"} style={{textDecoration: "none", color:"inherit"}}><CardPerfil title="PRATICAR A FÉ" href="" imageUrl="./assets/img/FE.png" /></Link>
					</S.Perfis>
				</S.WrapperPerfis>
			</S.ContainerPerfis>
		</div>
	);
};
