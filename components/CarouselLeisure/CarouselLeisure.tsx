import * as S from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Button } from '../CardContato/styles';
import { isMobile } from 'react-device-detect';

import FirstImage from '../../assets/img/FE.png';
import SecondImage from '../../assets/img/DIVERSAO.png';
import ThirdImage from '../../assets/img/PRAIA.png';
import FourthImage from '../../assets/img/GASTRONOMIA.png';
import FifthImage from '../../assets/img/CORPO E ALMA.png';
import SixthImage from '../../assets/img/ESPORTIVO.png';
import SeventhImage from '../../assets/img/AQUATICO.png';
import {ContainerMobile,ComponentBackgroundMobileFirst,WrapCircles,Circle1,Circle2,Circle3,Circle4,Circle5,Circle6,Circle7} from '../PicturesSection/styles';
import { useState } from 'react';
export const CarouselLeisure = () => {
	const [pic, setPic] = useState(1);
	return (
		<>
		<S.Container>
			<S.Title>
				<strong>COMPLEXO AQUÁTICO</strong> COM ÁGUAS<br />QUENTES PARA TODA A FAMÍLIA
			</S.Title>
			<S.SubTitle>
				O Morro dos Anjos tem um parque de águas completo, perfeito pra se divertir, surfar ou<br />
				relaxar. São piscinas incríceis de águas quentes termais para todas as idades, disponíveis<br />
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
						<img src="./assets/img/leisure.png" />
						<p className="legend">Complexo aquatico</p>
					</div>
					<div>
						<img src="./assets/img/family.png" />
						<p className="legend">Lazy river</p>
					</div>
					<div>
						<img src="./assets/img/invest.png" />
						<p className="legend">Bar molhado</p>
					</div>
					<div>
						<img src="./assets/img/leisure.png" />
						<p className="legend">Complexo aquatico</p>
					</div>
					<div>
						<img src="./assets/img/family.png" />
						<p className="legend">Lazy river</p>
					</div>
					<div>
						<img src="./assets/img/invest.png" />
						<p className="legend">Bar molhado</p>
					</div>
				</Carousel>
			</S.Wrap>
		</S.Container>
		{isMobile && <br></br>}
		
		       <ContainerMobile>
			   {pic === 1 && <ComponentBackgroundMobileFirst src={FirstImage} alt="Background Image" />}
			   {pic === 2 && <ComponentBackgroundMobileFirst src={SecondImage} alt="Background Image" />}
			   {pic === 3 && <ComponentBackgroundMobileFirst src={ThirdImage} alt="Background Image" />}
			   {pic === 4 && <ComponentBackgroundMobileFirst src={FourthImage} alt="Background Image" />}
			   {pic === 5 && <ComponentBackgroundMobileFirst src={FifthImage} alt="Background Image" />}
			   {pic === 6 && <ComponentBackgroundMobileFirst src={SixthImage} alt="Background Image" />}
			   {pic === 7 && <ComponentBackgroundMobileFirst src={SeventhImage} alt="Background Image" />}
		  <WrapCircles>
			   <Circle1 onClick={() => setPic(1)} pic={pic}/>
			   <Circle2 onClick={() => setPic(2)} pic={pic}/>
			   <Circle3 onClick={() => setPic(3)} pic={pic}/>
			   <Circle4 onClick={() => setPic(4)} pic={pic}/>
			   <Circle5 onClick={() => setPic(5)} pic={pic}/>
			   <Circle6 onClick={() => setPic(6)} pic={pic}/>
			   <Circle7 onClick={() => setPic(7)} pic={pic}/>
		  </WrapCircles>
		   </ContainerMobile>
		   </>
	);
};
