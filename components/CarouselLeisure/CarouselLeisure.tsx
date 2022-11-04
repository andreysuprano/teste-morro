import * as S from './styles';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Button } from '../CardContato/styles';
import {isMobile} from 'react-device-detect';

export const CarouselLeisure = () => {

	return (
            <S.Container>
                <S.Title><strong>COMPLEXO AQUÁTICO</strong> COM ÁGUAS<br/>QUENTES PARA TODA A FAMÍLIA</S.Title>
                <S.SubTitle>O Morro dos Anjos tem um parque de águas completo, perfeito pra se divertir, surfar ou<br/>
                relaxar. São piscinas incríceis de águas quentes termais para todas as idades, disponíveis<br/>
                para você e sua família aproveitarem em qualquer estação do ano.</S.SubTitle>
                <Button>FALE JÁ COM UM CONSULTOR</Button>
                <S.Wrap>
                    <Carousel
                    thumbWidth={isMobile ? 50 : 200}
                    showArrows={true}
                    showStatus={false}
                    swipeable={true}
                    useKeyboardArrows={true}
                    emulateTouch={true}
                    autoFocus={true}
                    >
                            <div >
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
	);
};