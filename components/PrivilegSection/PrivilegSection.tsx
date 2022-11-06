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
        <Button>
        <a style={{textDecoration: "none", color: "inherit"}} href="https://api.whatsapp.com/send?phone=554398446070&text=Ol%C3%A1%20vim%20do%20site%2C%20gostaria%20de%20falar%20com%20um%20consultor!" target="_blank" rel="noreferrer">
							FALE JÁ COM UM CONSULTOR
							</a>
        </Button>
		</S.Wrap>
			</S.Container>
	);
};