import {Menu} from "../components/Menu/Menu";
import { Footer } from "../components/Footer/Footer";
import { HeaderGeneralComp } from "../components/HeaderGeneralComp/HeaderGeneralComp";
import { ContactFooter } from '../components/ContactFooter/ContactFooter';
import { GridImage } from "../components/GridImage/GridImage";
import {IconsAccommod} from "../components/IconsAccommod/IconsAccommod";
import { AccomodPlants } from "../components/AccomodPlants/AccomodPlants";

export default function Accommodations() {
	return (
		<div>
            <Menu/>
            <HeaderGeneralComp
				text={"TODO O CONFORTO QUE SUA CASA PODE TER."}
				imageBackground={"./assets/img/acoomodo.png"}
			/>

			<GridImage 
				hilight="CHALÉS OU CASAS VILA:"
				title="ACOMODAÇÕES DE ALTO PADRÃO À SUA ESCOLHA."
				paragraph="No Morro dos Anjos, você tem duas opções para curtir dias especiais em família. São unidades feitas especialmente para receber você e sua família oferecendo o máximo em conforto e lazer."
				pic1="./assets/img/Acomodations/1-1.png" 
				pic2="./assets/img/Acomodations/1-2.png" 
				buttonPosition="text" 
				principalPic="./assets/img/Acomodations/Principal.png"
			/>
			<AccomodPlants/>
			<IconsAccommod/>
			<Footer
				footerComponent={
				<ContactFooter 
					formLabel={true} 
					title="TENHA SEU PRÓXIMO IMÓVEL NO MORRO DOS ANJOS."
					paragraph='Envie seus dados e receba o contato
					de um dos nossos consultores.'
				/>}
				imageBackground={"'./assets/img/footerl.png'"}
			/>
		</div>
	);
}