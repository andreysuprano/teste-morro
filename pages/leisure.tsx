import {Menu} from "../components/Menu/Menu";
import { Footer } from "../components/Footer/Footer";
import { HeaderGeneralComp } from "../components/HeaderGeneralComp/HeaderGeneralComp";
import { ContactFooter } from '../components/ContactFooter/ContactFooter';
import { CarouselLeisure } from "../components/CarouselLeisure/CarouselLeisure";

export default function Leisure() {
	return (
		<div>
            <Menu/>
            <HeaderGeneralComp
				text={"UM NOVO JEITO DE VIVER A VIDA"}
				imageBackground={"./assets/img/leisure.png"}/>
			<CarouselLeisure/>
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