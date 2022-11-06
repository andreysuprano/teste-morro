import * as S from './styles';
import Image from 'next/image';

import p1 from '../../assets/img/CASA VILA.png';
import p2 from '../../assets/img/CHALE.png';


export const AccomodPlants = () => {
	return (
		<S.Container >
            <S.WhiteDiv/>
            <S.BlueDiv/>
            <S.Wrap>
                <S.WrapLeft>
                    <h2>Casa Vila</h2>
                    <p>90 m² de área privativa</p>
                    <h5>Até 10 pessoas</h5>
                </S.WrapLeft>
                <Image className='adapta' src={p1} alt="" />
                <Image className='adapta' src={p2} alt="" />
                <S.WrapRight>
                    <h2>Chalé</h2>
                    <p>60 m² de área privativa</p>
                    <h5>Até 6 pessoas</h5>
                </S.WrapRight>
            </S.Wrap>
		</S.Container>
	);
};