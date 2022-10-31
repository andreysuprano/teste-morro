import { DescricaoSection } from '../components/DescricaoSection/HeaderHome';
import { HeaderHome } from '../components/HeaderHome/HeaderHome';
import { PerfilSection } from '../components/PerfilSection/PerfilSection';
import { Menu } from '../components/Menu/Menu';
import { PicturesSection } from '../components/PicturesSection/PicturesSection';

export default function Home() {
	return (
		<div>
			<Menu/>
			<HeaderHome />
			<DescricaoSection />
			<PicturesSection />
			<PerfilSection />
		</div>
	);
}
