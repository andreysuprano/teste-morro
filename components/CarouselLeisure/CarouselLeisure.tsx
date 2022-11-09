import * as S from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Button } from '../CardContato/styles';
import { isMobile } from 'react-device-detect';

import FirstImage from '../../assets/img/Leisure/complexo_aquatico_1.jpg';
import SecondImage from '../../assets/img/Leisure/lazy_river.jpg';
import ThirdImage from '../../assets/img/Leisure/bar_molhado.jpg';
import FourthImage from '../../assets/img/Leisure/piscina_coberta.jpg';
import FifthImage from '../../assets/img/Leisure/aquaplay-infantil.jpg';
import SixthImage from '../../assets/img/Leisure/piscina_surfe.jpg';


import {ContainerMobile,ComponentBackgroundMobileFirst,WrapCircles,Circle1,Circle2,Circle3,Circle4,Circle5,Circle6} from '../PicturesSection/styles';
import { useEffect, useState } from 'react';

export const CarouselLeisure = () => {
	const [pic, setPic] = useState(0);

    const images = [FirstImage,SecondImage,ThirdImage,FourthImage,FifthImage,SixthImage]
	let nois:any = undefined;
    useEffect(() => {
        nois = setTimeout(() => {
                setPic(oldState => oldState === 5 ? 0 : oldState + 1);
            }, 5000);
    }, [pic]);
	
	return (
		<>
		<S.Container>
			<S.Title>
				<strong>COMPLEXO AQUÁTICO</strong> COM ÁGUAS<br />QUENTES PARA TODA A FAMÍLIA
			</S.Title>
			<S.SubTitle>
				O Morro dos Anjos tem um parque de águas completo, perfeito pra se divertir, surfar ou<br />
				relaxar. São piscinas incríveis de águas quentes termais para todas as idades, disponíveis<br />
				para você e sua família aproveitarem em qualquer estação do ano.
			</S.SubTitle>
			<Button>
			<a style={{textDecoration: "none", color: "inherit"}} href="https://api.whatsapp.com/send?phone=554398446070&text=Ol%C3%A1%20vim%20do%20site%2C%20gostaria%20de%20falar%20com%20um%20consultor!" target="_blank" rel="noreferrer">
							FALE JÁ COM UM CONSULTOR
							</a>
			</Button>
			<S.Wrap>
				<Carousel
					thumbWidth={isMobile ? 40 : 200}
					showArrows={true}
					showStatus={false}
					swipeable={true}
					useKeyboardArrows={true}
					emulateTouch={true}
				>
					<div>
						<img src="./assets/img/Leisure/complexo_aquatico_1.jpg" />
						<p className="legend">Complexo aquático</p>
					</div>
					<div>
						<img src="./assets/img/Leisure/lazy_river.jpg" />
						<p className="legend">Lazy river</p>
					</div>
					<div>
						<img src="./assets/img/Leisure/bar_molhado.jpg" />
						<p className="legend">Bar molhado</p>
					</div>
					<div>
						<img src="./assets/img/Leisure/piscina_coberta.jpg" />
						<p className="legend">Piscina coberta</p>
					</div>
					<div>
						<img src="./assets/img/Leisure/aquaplay-infantil.jpg" />
						<p className="legend">Aquaplay infantil</p>
					</div>
					<div>
						<img src="./assets/img/Leisure/piscina_surfe.jpg" />
						<p className="legend">Piscina de surfe</p>
					</div>
				</Carousel>
			</S.Wrap>
		</S.Container>
		{isMobile && <br></br>}
		       <ContainerMobile>
			   <S.BtnRightMobile onClick={() => {clearTimeout(nois);setPic(oldState => oldState + 1)}}/>
                <S.BtnLeftMobile onClick={() => {clearTimeout(nois);setPic(oldState => oldState - 1)}}/>
			   {pic === 0 && <ComponentBackgroundMobileFirst src={FirstImage} alt="Background Image" />}
			   {pic === 1 && <ComponentBackgroundMobileFirst src={SecondImage} alt="Background Image" />}
			   {pic === 2 && <ComponentBackgroundMobileFirst src={ThirdImage} alt="Background Image" />}
			   {pic === 3 && <ComponentBackgroundMobileFirst src={FourthImage} alt="Background Image" />}
			   {pic === 4 && <ComponentBackgroundMobileFirst src={FifthImage} alt="Background Image" />}
			   {pic === 5 && <ComponentBackgroundMobileFirst src={SixthImage} alt="Background Image" />}
		  <WrapCircles>
			   <Circle1 onClick={() => {clearTimeout(nois);setPic(0)}} pic={pic}/>
			   <Circle2 onClick={() => {clearTimeout(nois);setPic(1)}} pic={pic}/>
			   <Circle3 onClick={() => {clearTimeout(nois);setPic(2)}} pic={pic}/>
			   <Circle4 onClick={() => {clearTimeout(nois);setPic(3)}} pic={pic}/>
			   <Circle5 onClick={() => {clearTimeout(nois);setPic(4)}} pic={pic}/>
			   <Circle6 onClick={() => {clearTimeout(nois);setPic(5)}} pic={pic}/>
		  </WrapCircles>
		   </ContainerMobile>
		   </>
	);
};
