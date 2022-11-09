import * as S from './styles';
import { useEffect, useState } from 'react';
import FirstImage from '../../assets/img/AQUATICO.png';
import SecondImage from '../../assets/img/DIVERSAO.png';
import ThirdImage from '../../assets/img/PRAIA.png';
import FourthImage from '../../assets/img/GASTRONOMIA.png';
import FifthImage from '../../assets/img/CORPO E ALMA.png';
import SixthImage from '../../assets/img/ESPORTIVO.png';
import SeventhImage from '../../assets/img/FE.png';


export const PicturesSection = () => {

    const [pic, setPic] = useState(0);

    const images = [FirstImage,SecondImage,ThirdImage,FourthImage,FifthImage,SixthImage,SeventhImage]
    let nois:any = undefined;
    useEffect(() => {
        nois = setTimeout(() => {
                setPic(oldState => oldState === 6 ? 0 : oldState + 1);
            }, 5000);
    }, [pic]);

	return (
		<div>
			<S.Container>
            {/* <S.ComponentBackground src={pic === 1 ? FirstImage
                                       : pic === 2 ? SecondImage
                                       : pic === 3 ? ThirdImage
                                       : pic === 4 ? FourthImage
                                       : pic === 5 ? FifthImage
                                       : pic === 6 ? SixthImage
                                       : pic === 7 ? SeventhImage : FirstImage
                                       } alt="Background Image" /> */}
                                        <S.ComponentBackground src={images[pic]
                                       } alt="Background Image" />
                <S.WrapLeft>
                    <S.FirstDiv onMouseOver={() => {clearTimeout(nois);setPic(0)}} onClick={() => {clearTimeout(nois);setPic(0)}} pic={pic}>
                    <h1>COMPLEXO<br/>  AQUÁTICO COM<br/> ÁGUAS QUENTES<br/>  PARA TODA<br/> A FAMÍLIA</h1>
                    </S.FirstDiv>
                    <S.SecondDiv onMouseOver={() => {clearTimeout(nois);setPic(1)}} onClick={() => {clearTimeout(nois);setPic(1)}} pic={pic}>
                        <h1>DIVERSÃO<br/> SEMPRE<br/> GARANTIDA</h1>
                    </S.SecondDiv>
                    <S.ThirdDiv onMouseOver={() => {clearTimeout(nois);setPic(2)}} onClick={() => {clearTimeout(nois);setPic(2)}} pic={pic}>
                        <h1>A PRIMEIRA<br/> E ÚNICA<br/>  PRAIA DO<br/>  INTERIOR<br/> DO PARANÁ</h1>
                    </S.ThirdDiv>
                </S.WrapLeft>
                <S.WrapRight>
                    <S.FourthDiv onMouseOver={() => {clearTimeout(nois);setPic(3)}} onClick={() => {clearTimeout(nois);setPic(3)}} pic={pic}>
                        <h1>APROVEITE<br/> A MELHOR DA<br/>  GASTRONOMIA</h1>
                    </S.FourthDiv>
                    <S.FifthDiv onMouseOver={() => {clearTimeout(nois);setPic(4)}} onClick={() => {clearTimeout(nois);setPic(4)}} pic={pic}>
                        <h1>PARA SENTIR O<br/> CORPO E A ALMA<br/> BEM CUIDADOS</h1>
                    </S.FifthDiv>
                    <S.SixthDiv onMouseOver={() => {clearTimeout(nois);setPic(5)}} onClick={() => {clearTimeout(nois);setPic(5)}} pic={pic}>
                        <h1>UM COMPLEXO<br/> ESPORTIVO<br/>  PARA VOCÊ SE<br/>  EXERCITAR</h1>
                    </S.SixthDiv>
                    <S.SeventhDiv onMouseOver={() => {clearTimeout(nois);setPic(6)}} onClick={() => {clearTimeout(nois);setPic(6)}} pic={pic}>
                    <h1>UM LUGAR<br/> PARA PRATICAR<br/>  A FÉ E O LAZER<br/>  EM FAMÍLIA</h1>
                    </S.SeventhDiv>
                </S.WrapRight>
			</S.Container>
            <S.ContainerMobile>
                <S.BtnRightMobile onClick={() => {clearTimeout(nois);setPic(oldState => oldState + 1)}}/>
                <S.BtnLeftMobile onClick={() => {clearTimeout(nois);setPic(oldState => oldState - 1)}}/>
                {/* {pic === 0 && <S.ComponentBackgroundMobileFirst src={FirstImage} alt="Background Image" />}
                {pic === 1 && <S.ComponentBackgroundMobileFirst src={SecondImage} alt="Background Image" />}
                {pic === 2 && <S.ComponentBackgroundMobileFirst src={ThirdImage} alt="Background Image" />}
                {pic === 3 && <S.ComponentBackgroundMobileFirst src={FourthImage} alt="Background Image" />}
                {pic === 4 && <S.ComponentBackgroundMobileFirst src={FifthImage} alt="Background Image" />}
                {pic === 5 && <S.ComponentBackgroundMobileFirst src={SixthImage} alt="Background Image" />} */}
                <S.ComponentBackgroundMobileFirst src={images[pic]} alt="Background Image" />
           <S.WrapCircles>
                <S.Circle1 onClick={() => {clearTimeout(nois);setPic(0)}} pic={pic}/>
                <S.Circle2 onClick={() => {clearTimeout(nois);setPic(1)}} pic={pic}/>
                <S.Circle3 onClick={() => {clearTimeout(nois);setPic(2)}} pic={pic}/>
                <S.Circle4 onClick={() => {clearTimeout(nois);setPic(3)}} pic={pic}/>
                <S.Circle5 onClick={() => {clearTimeout(nois);setPic(4)}} pic={pic}/>
                <S.Circle6 onClick={() => {clearTimeout(nois);setPic(5)}} pic={pic}/>
                <S.Circle7 onClick={() => {clearTimeout(nois);setPic(6)}} pic={pic}/>
           </S.WrapCircles>
            </S.ContainerMobile>
		</div>
	);
};