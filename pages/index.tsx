import { DescricaoSection } from '../components/DescricaoSection/HeaderHome';
import { HeaderHome } from '../components/HeaderHome/HeaderHome';
import { PerfilSection } from '../components/PerfilSection/PerfilSection';
import { Menu } from '../components/Menu/Menu';
import { BeneficiosSection } from '../components/BeneficiosSection/BeneficiosSection';
import { PicturesSection } from '../components/PicturesSection/PicturesSection';
import { Footer } from '../components/Footer/Footer';
import { ContactFooter } from '../components/ContactFooter/ContactFooter';
import { LocaliazcaoSection } from '../components/LocaliazcaoSection/LocaliazcaoSection';

export default function Home() {
	return (
		<div>
			<Menu />
			<HeaderHome />
			<DescricaoSection />
			<PicturesSection />
			<PerfilSection />
			<BeneficiosSection />
			{/* <LocaliazcaoSection />
			<Footer footerComponent={
				<ContactFooter 
					formLabel={false} 
					title="TENHA SEU PRÓXIMO IMÓVEL NO MORRO DOS ANJOS."
					paragraph='Envie seus dados e receba o contato
					de um dos nossos consultores.'
				/>}
				imageBackground="./assets/img/FooterHome.png" 
			/> */}
		</div>
	);
}
