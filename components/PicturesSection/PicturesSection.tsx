import * as S from './styles';
import { useState } from 'react';
import FirstImage from '../../assets/img/FE.png';
import SecondImage from '../../assets/img/DIVERSAO.png';
import ThirdImage from '../../assets/img/PRAIA.png';
import FourthImage from '../../assets/img/GASTRONOMIA.png';
import FifthImage from '../../assets/img/CORPO E ALMA.png';
import SixthImage from '../../assets/img/ESPORTIVO.png';
import SeventhImage from '../../assets/img/AQUATICO.png';


export const PicturesSection = () => {

    const [pic, setPic] = useState(1);

	return (
		<div>
			<S.Container>
            <S.ComponentBackground src={pic === 1 ? FirstImage
                                       : pic === 2 ? SecondImage
                                       : pic === 3 ? ThirdImage
                                       : pic === 4 ? FourthImage
                                       : pic === 5 ? FifthImage
                                       : pic === 6 ? SixthImage
                                       : pic === 7 ? SeventhImage : FirstImage
                                       } alt="Background Image" />
                <S.WrapLeft>
                    <S.FirstDiv onClick={() => setPic(1)} pic={pic}>
                        <h1>UM LUGAR<br/> PARA PRATICAR<br/>  A FE E O LAZER<br/>  EM FAMILIA</h1>
                    </S.FirstDiv>
                    <S.SecondDiv onClick={() => setPic(2)} pic={pic}>
                        <h1>DIVERSAO<br/> SEMPRE<br/> GARANTIDA</h1>
                    </S.SecondDiv>
                    <S.ThirdDiv onClick={() => setPic(3)} pic={pic}>
                        <h1>A PRIMEIRA<br/> E UNICA<br/>  PRAIA DO<br/>  INTERIOR<br/> DO PARANA</h1>
                    </S.ThirdDiv>
                </S.WrapLeft>
                <S.WrapRight>
                    <S.FourthDiv onClick={() => setPic(4)} pic={pic}>
                        <h1>APROVEITE<br/> A MELHOR DA<br/>  GASTRONOMIA</h1>
                    </S.FourthDiv>
                    <S.FifthDiv onClick={() => setPic(5)} pic={pic}>
                        <h1>PARA SENTIR O<br/> CORPO E A ALMA<br/> BEM CUIDADOS</h1>
                    </S.FifthDiv>
                    <S.SixthDiv onClick={() => setPic(6)} pic={pic}>
                        <h1>UM COMPLEXO<br/> ESPORTIVO<br/>  PARA VOCE SE<br/>  EXERCITAR</h1>
                    </S.SixthDiv>
                    <S.SeventhDiv onClick={() => setPic(7)} pic={pic}>
                        <h1>COMPLEXO<br/>  AQUATICO COM<br/> AGUAS QUENTES<br/>  PARA TODA<br/> A FAMILIA</h1>
                    </S.SeventhDiv>
                </S.WrapRight>
			</S.Container>
		</div>
	);
};