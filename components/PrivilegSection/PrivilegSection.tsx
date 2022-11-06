import * as S from './styles';
import Image from 'next/image';

import Icon from "../../assets/img/iconePIN.png";
import { Button } from '../CardContato/styles';

export const PrivilegSection = () => {
	return (
			<S.Container>
		<S.Wrap>
        <Image src={Icon} alt="local"/>
        <h1>LOCALIZAÇÃO PRIVILEGIADA</h1>
        <p>Ao lado do Santuário de Sçao Miguel Arcanjo, o terceiro<br/>
        maior santuário do mundo dedicado ao Arcanjo e um<br/>
        dos destinos religiosos mais procurados do Brasil.</p>
        <Button>FALE JÁ COM UM CONSULTOR</Button>
		</S.Wrap>
			</S.Container>
	);
};