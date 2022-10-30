import { DescricaoSection } from '../components/DescricaoSection/HeaderHome';
import { HeaderHome } from '../components/HeaderHome/HeaderHome';
import { PerfilSection } from '../components/PerfilSection/PerfilSection';

export default function Home() {
	return (
		<div>
			<HeaderHome />
			<DescricaoSection />
			<PerfilSection />
		</div>
	);
}
