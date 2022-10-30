import SVG from '../assets/svg/icone.svg';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<h1>Teste</h1>
			<Image src={SVG} alt="" />
		</div>
	);
}
