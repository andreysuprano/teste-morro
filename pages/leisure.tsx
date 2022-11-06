import { Menu } from '../components/Menu/Menu';
import { Footer } from '../components/Footer/Footer';
import { HeaderGeneralComp } from '../components/HeaderGeneralComp/HeaderGeneralComp';
import { ContactFooter } from '../components/ContactFooter/ContactFooter';
import { CarouselLeisure } from '../components/CarouselLeisure/CarouselLeisure';
import { ArqPlant } from '../components/ArqPlant/ArqPlant';
import { LeisureBanner } from '../components/LeisureBanner/LeisureBanner';
import { GridImage } from '../components/GridImage/GridImage';

const Lists = [
	[
		'• 4 quadras de vôlei',
		'• Beach tennis',
		'• 2 quadras de tênis',
		'• Quadra poliesportiva coberta',
		'• Campo de futebol',
		'• Spa',
		'• Saunas',
		'• Academia',
		'• Hidromassagens'
	],
	[ 'Cinema •', 'Jogos teen •', 'Playground •', 'Boliche • ', 'Centro de convenções •' ],
	[ '• Restaurante internacional', '• Microcervejaria artesanal', '• Pizzaria', '• Hamburgueria', '• Bar' ]
];

export default function Leisure() {
	return (
		<div>
			<Menu />
			<HeaderGeneralComp text={'UM NOVO JEITO DE VIVER A VIDA'} imageBackground={'./assets/img/leisure.png'} />

			<GridImage
				title="ÁGUAS QUENTES, LAZER E DIVERSÃO O ANO INTEIRO."
				paragraph="No Morro dos Anjos, você e sua família podem desfrutar momentos únicos em qualquer estação do ano. O hotel resort oferece opções de lazer como nenhum outro na região."
				principalPic="./assets/img/Leisure/Principal.png"
				pic1="./assets/img/Leisure/1-1.png"
				pic2="./assets/img/Leisure/1-2.png"
				buttonPosition="pic"
			/>
			<LeisureBanner />
			<CarouselLeisure />

			<GridImage
				title="UM COMPLEXO ESPORTIVO PARA VOCÊ SE EXERCITAR E RELAXAR."
				paragraph="O Morro dos Anjos tem o melhor lugar para se exercitar e explorar diferentes modalidades de esportes sempre que desejar. Sua estrutura completa e moderna tem diversas quadras para você aproveitar ao máximo o diferencial de cada atividade. Além disso, tem espaços pensados também para você relaxar."
				principalPic="./assets/img/Leisure/Principal2.png"
				pic1="./assets/img/Leisure/2-1.png"
				pic2="./assets/img/Leisure/2-2.png"
				pic3="./assets/img/Leisure/2-3.png"
				buttonPosition="pic"
				button={false}
				inverse={true}
				list={Lists[0]}
				mobileButton={false}
			/>

			<GridImage
				title="DIVERSÃO SEMPRE GARANTIDA."
				paragraph="Faça chuva ou faça sol, O Morro dos Anjos oferece diferentes espaços de entretenimento para você relaxar e curtir com a família."
				principalPic="./assets/img/Leisure/Principal4.png"
				pic1="./assets/img/Leisure/3-1.png"
				pic2="./assets/img/Leisure/3-2.png"
				buttonPosition="pic"
				button={false}
				inverse={false}
				list={Lists[1]}
				mobileButton={false}
			/>

			<GridImage
				title="APROVEITE O MELHOR DA GASTRONOMIA."
				paragraph="No Morro dos Anjos, as ótimas opções de gastronomia são muitas, agradando os paladares mais diferentes e exigentes."
				principalPic="./assets/img/Leisure/Principal4.png"
				pic1="./assets/img/Leisure/4-1.png"
				pic2="./assets/img/Leisure/4-2.png"
				pic3="./assets/img/Leisure/4-3.png"
				buttonPosition="pic"
				button={false}
				inverse={true}
				list={Lists[2]}
				mobileButton={false}
			/>
			<ArqPlant />
			<Footer
				footerComponent={
					<ContactFooter
						formLabel={true}
						title="TENHA SEU PRÓXIMO IMÓVEL NO MORRO DOS ANJOS."
						paragraph='Envie seus dados e receba o contato
						de um dos nossos consultores.'/>
				}
				imageBackground={"'./assets/img/footerl.png'"}
			/>
		</div>
	);
}
