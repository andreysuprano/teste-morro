import * as S from './styles';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';


export const CarouselLeisure = () => {

    // const handleDragStart = (e: any) => e.preventDefault();

    // const items = [
    //   <img src="./assets/img/leisure.png" onDragStart={handleDragStart} role="presentation" />,
    //   <img src="./assets/img/family.png" onDragStart={handleDragStart} role="presentation" />,
    //   <img src="./assets/img/invest.png" onDragStart={handleDragStart} role="presentation" />,
    //   <img src="./assets/img/leisure.png" onDragStart={handleDragStart} role="presentation" />,
    //   <img src="./assets/img/family.png" onDragStart={handleDragStart} role="presentation" />,
    //   <img src="./assets/img/invest.png" onDragStart={handleDragStart} role="presentation" />,
    //   <img src="./assets/img/leisure.png" onDragStart={handleDragStart} role="presentation" />,
    //   <img src="./assets/img/family.png" onDragStart={handleDragStart} role="presentation" />,
    //   <img src="./assets/img/invest.png" onDragStart={handleDragStart} role="presentation" />,
    // ];

	return (
            <S.Container>
                <S.Wrap>
                 <Carousel
                 showArrows={true}
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
            </Carousel>
               {/* <AliceCarousel
            
               disableSlideInfo={false}
               controlsStrategy="responsive"
               mouseTracking items={items} /> */}
            </S.Wrap>
            </S.Container>
	);
};