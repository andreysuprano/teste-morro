import {Menu} from "../components/Menu/Menu";
import { Footer } from "../components/Footer/Footer";
import { HeaderGeneralComp } from "../components/HeaderGeneralComp/HeaderGeneralComp";
import { ContactFooter } from '../components/ContactFooter/ContactFooter';
import { AllSearch } from "../components/AllSearch/AllSearch";
import { InvestSection } from "../components/InvestSection/InvestSection";
import { LocationSection } from "../components/LocationSection/LocationSection";
import { GridImage } from "../components/GridImage/GridImage";
import { TurismSection } from "../components/TurismSection/TurismSection";

export default function Invest() {
	return (
		<div>
            <Menu/>
			<HeaderGeneralComp
				text={"REVOLUCIONE SUA FORMA DE INVESTIR."}
				imageBackground={"./assets/img/invest.png"}
			/>

			<AllSearch/>
			<InvestSection />
			<LocationSection />
			<GridImage 
				hilight="UMA GRANDE OPORTUNIDADE: "
				title="UM CLUBE EXCLUSIVO PARA VOCÊ UTILIZAR QUANDO QUISER."
				paragraph="Hoje, o público só encontra uma rede hoteleira composta praticamente por um só perfil, os chamados hotéis de passagem, o que torna o Morro dos Anjos um lugar sem similar nem concorrente."
				pic1="./assets/img/Servico.png" 
				buttonPosition="pic" 
				principalPic="./assets/img/Vista.png"
				button={true}
				inverse={false}
			/>
			<TurismSection/>
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