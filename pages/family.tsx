import {Menu} from "../components/Menu/Menu";
import { Footer } from "../components/Footer/Footer";
import { HeaderGeneralComp } from "../components/HeaderGeneralComp/HeaderGeneralComp";
import { ContactFooter } from '../components/ContactFooter/ContactFooter';

export default function Family() {
	return (
		<div>
            <Menu/>
			<HeaderGeneralComp
				text={"CONFORTO E DIVERSÃO EM FAMÍLIA O ANO INTEIRO."}
				imageBackground={"./assets/img/family.png"}/>
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