import * as S from './styles';
import Image from 'next/image';

import imgEx from "../../assets/img/ang.png";
export const AngelsSection = () => {
	return (
			<S.Container>
                <S.Left/>
                <S.Right>
                    <h1>UM LUGAR<br/>PARA PRATICAR<br/>A FÉ EM FAMÍLIA</h1>
                    <p>O Morro dos Anjos vai muito além de um hotel resort. O empreendimento tem espaços especialmente pensados para você que, além do descanso e lazer, quer prolongar sua experiência da fé ao lado de quem mais ama.</p>
                    <Image src={imgEx} alt=""/>
                </S.Right>
			</S.Container>
	);
};