import {Menu} from "../components/Menu/Menu";
import { Footer } from "../components/Footer/Footer";
import { HeaderGeneralComp } from "../components/HeaderGeneralComp/HeaderGeneralComp";

export default function Accommodations() {
	return (
		<div>
            <Menu/>
            <HeaderGeneralComp/>
            <Footer footerComponent={<h1>accommodations footer</h1>} imageBackground={"'./assets/img/PRAIA.png'"}/>
		</div>
	);
}