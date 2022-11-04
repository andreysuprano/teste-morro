import {Menu} from "../components/Menu/Menu";
import { Footer } from "../components/Footer/Footer";
import { HeaderGeneralComp } from "../components/HeaderGeneralComp/HeaderGeneralComp";
import { ContactFooter } from '../components/ContactFooter/ContactFooter';

export default function Faith() {
	return (
		<div>
            <Menu/>
			<HeaderGeneralComp
				text={"VENHA SENTIR TODA A FORÇA DA SUA FÉ."}
				imageBackground={"./assets/img/faith.png"}/>
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