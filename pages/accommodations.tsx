import {Menu} from "../components/Menu/Menu";
import { Footer } from "../components/Footer/Footer";
import { HeaderGeneralComp } from "../components/HeaderGeneralComp/HeaderGeneralComp";
import { ContactFooter } from '../components/ContactFooter/ContactFooter';

export default function Accommodations() {
	return (
		<div>
            <Menu/>
            <HeaderGeneralComp
				text={"TODO O CONFORTO QUE SUA CASA PODE TER."}
				imageBackground={"./assets/img/acoomodo.png"}/>
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