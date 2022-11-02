import {Menu} from "../components/Menu/Menu";
import { Footer } from "../components/Footer/Footer";
import { ContactContainer } from "../components/ContactContainer/ContactContainer";

export default function Contact() {
	return (
		<div>
            <Menu/>
            <Footer footerComp={<ContactContainer />} imageBackground={"'./assets/img/PRAIA.png'"}/>
		</div>
	);
}