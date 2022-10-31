import { DescricaoSection } from '../components/DescricaoSection/HeaderHome';
import { HeaderHome } from '../components/HeaderHome/HeaderHome';
import { PerfilSection } from '../components/PerfilSection/PerfilSection';
import { Menu } from '../components/Menu/Menu';


export default function Home() {
	return (
		<div>
			<Menu/>
			<HeaderHome />
			<DescricaoSection />
			<PerfilSection />
		</div>
	);
}
