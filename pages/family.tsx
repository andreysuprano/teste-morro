import {Menu} from "../components/Menu/Menu";
import { Footer } from "../components/Footer/Footer";
import { HeaderGeneralComp } from "../components/HeaderGeneralComp/HeaderGeneralComp";
import { ContactFooter } from '../components/ContactFooter/ContactFooter';
import { GridImage } from "../components/GridImage/GridImage";

export default function Family() {
	return (
		<div>
            <Menu/>
			<HeaderGeneralComp
				text={"CONFORTO E DIVERSÃO EM FAMÍLIA O ANO INTEIRO."}
				imageBackground={"./assets/img/family.png"}/>
			<GridImage 
				title="UM LUGAR ÚNICO EM TODOS OS SENTIDOS."
				paragraph="O Morro dos Anjos oferece inúmeras opções de lazer únicas na região, e é perfeito para você
				aproveitar com a família o ano inteiro. Sua infraestrutura moderna e completa proporciona máximo
				conforto, segurança e entretenimento para todas as idades."
				pic1="./assets/img/Familia/1.png" 
				pic2="./assets/img/Familia/2.png" 
				buttonPosition="text" 
				principalPic="./assets/img/Familia/Principal.png"
			/>
			<GridImage 
				title="UM CLUBE EXCLUSIVO PARA VOCÊ UTILIZAR QUANDO QUISER."
				paragraph="A estrutura do resort fica disponível para utilização diária mesmo se você̂̂ não estiver hospedado no Morro dos Anjos ou se sua unidade estiver alugada. Quem possui cotas do empreendimento pode utilizar piscinas, quadras, restaurantes e serviços como um clube. Para as crianças são as férias perfeitas, à disposição da família o ano inteiro. "
				pic1="./assets/img/Familia/2-1.png" 
				pic2="./assets/img/Familia/2-2.png" 
				buttonPosition="text" 
				principalPic="./assets/img/Familia/Principal2.png"
				button={false}
				inverse={true}
				mobileButton={false}
			/>
			<GridImage 
				title="IMAGINE TER SUA SEGUNDA CASA AQUI."
				paragraph="O Morro dos Anjos é o lugar perfeito para você̂ ter sua segunda casa e viver ótimos momentos em família. Aqui, você escolhe quantos cotas quer ter do seu imóvel, usando seu bem pelo tempo proporcional ao quanto pagou. E pode aproveitar toda a estrutura de lazer e serviços sem se preocupar com manutenção, imprevistos ou reformas. E mais: todos os imóveis têm escritura pública e matrícula, se tornando patrimônio familiar para as futuras gerações."
				pic1="./assets/img/Familia/3-1.png" 
				pic2="./assets/img/Familia/3-2.png" 
				buttonPosition="pic" 
				principalPic="./assets/img/Familia/Principal3.png"
				button={false}
				inverse={true}
			/>
			<GridImage 
				title="FÉRIAS PARA TODA A FAMÍLIA SEMPRE QUE VOCÊ QUISER."
				paragraph="Comprando um imóvel no Morro dos Anjos, você tem férias garantidas pra você e sua família pelo resto da vida e nas datas que quiser. 
				E que férias! Com a estrutura de serviços oferecida pelo resort, você aproveita seus dias ao máximo sem se preocupar com nada. 
				Já as opções de lazer são muitas, para você passar dias inesquecíveis se divertindo das mais diferentes maneiras. Isso inclui até uma praia, a primeira e única da região."
				pic1="./assets/img/Familia/4-1.png" 
				pic2="./assets/img/Familia/4-2.png" 
				buttonPosition="pic" 
				principalPic="./assets/img/Familia/Principal4.png"
				mobileButton={false}
			/>
        	<Footer
				footerComponent={
				<ContactFooter 
					formLabel={true} 
					title="TENHA SEU PRÓXIMO IMÓVEL NO MORRO DOS ANJOS."
					paragraph='Envie seus dados e receba o contato
					de um dos nossos consultores.'
				/>}
				imageBackground={"'./assets/img/footerl.png'"}/>
		</div>
	);
}