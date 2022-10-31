import { DescricaoSection } from '../components/DescricaoSection/HeaderHome';
import { HeaderHome } from '../components/HeaderHome/HeaderHome';
import { PerfilSection } from '../components/PerfilSection/PerfilSection';
import { Menu } from '../components/Menu/Menu';
import { BeneficiosSection } from '../components/BeneficiosSection/BeneficiosSection';
import { LocaliazcaoSection } from '../components/LocaliazcaoSection/LocaliazcaoSection';

export default function Home() {
	return (
		<div>
			<Menu />
			<HeaderHome />
			<DescricaoSection />
			<PerfilSection />
			<BeneficiosSection />
			<LocaliazcaoSection />
		</div>
	);
}
