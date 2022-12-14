import * as S from './styles';
import Logo from '../../assets/img/LOGOBRANCA.png';
import CasaLogo from '../../assets/img/logo ca2a.png';
import Insta from '../../assets/img/icone_instagram.png';
import Youtube from '../../assets/img/icone_youtube.png';
import Twi from '../../assets/img/icone_twitter.png';
import Face from '../../assets/img/icone_facebook.png';
import Whats from '../../assets/img/icone whatsapp.png';
import Phone from '../../assets/img/icone_fone.png';
import Link from 'next/link';

interface footerProps {
	imageBackground: string;
	footerComponent: React.ReactElement;
}

export const Footer = ({ imageBackground, footerComponent }: footerProps) => {
	return (
		<S.Container imageBackground={imageBackground}>
			<S.Wrapper>
				{footerComponent}
				<S.Footer>
					<S.LogoMobile src={Logo} alt="" />
					<S.LogoMobile src={CasaLogo} alt="" />
					<S.LogoDesktop src={Logo} alt="" />
					<S.WrapFooterBwtween>
						<S.WrapMidiaIcons>
							<a href="https://www.facebook.com/morrodosanjosresortoficial/" target="_blank" rel="noreferrer"><S.Icon src={Face} alt="" /></a>	
							<a href="https://www.instagram.com/morrodosanjosresortoficial/" target="_blank" rel="noreferrer"><S.Icon src={Insta} alt="" /></a>
							{/* <a href="https://twitter.com/" target="_blank" rel="noreferrer"><S.Icon src={Twi} alt="" /></a> */}
							{/* <a href="https://www.youtube.com/c/MorrodosAnjosResortOficial" target="_blank" rel="noreferrer"><S.Icon src={Youtube} alt="" /></a> */}
						</S.WrapMidiaIcons>
						<S.WrapOptions>
							<S.Option><Link href="/leisure" style={{textDecoration: "none", color:"inherit"}}>ESTRUTURA E LAZER</Link></S.Option>
							<S.LineOver />
							<S.Option><Link href="/accommodations" style={{textDecoration: "none", color:"inherit"}}>ACOMODAÇÕES</Link></S.Option>
							<S.LineOver />
							<S.Option><Link href="/family" style={{textDecoration: "none", color:"inherit"}}>CURTIR A FAMÍLIA</Link></S.Option>
							<S.LineOver />
							<S.Option><Link href="/faith" style={{textDecoration: "none", color:"inherit"}}>PROLONGUE SUA FÉ</Link></S.Option>
							<S.LineOver />
							<S.Option><Link href="/invest" style={{textDecoration: "none", color:"inherit"}}>INVESTIR</Link></S.Option>
							{/* <S.LineOver /> */}
							{/* <S.Option><Link href="" style={{textDecoration: "none", color:"inherit"}}>FAQ</Link></S.Option> */}
							<S.LineOver />
							<S.Option><Link href="/contact" style={{textDecoration: "none", color:"inherit"}}>CONTATO</Link></S.Option>
						</S.WrapOptions>
						<S.WrapMidiaIconsMobile>
							<a href="https://www.facebook.com/morrodosanjosresortoficial//" target="_blank" rel="noreferrer"><S.Icon src={Face} alt="" /></a>	
							<a href="https://www.instagram.com/morrodosanjosresortoficial/" target="_blank" rel="noreferrer"><S.Icon src={Insta} alt="" /></a>
							{/* <a href="https://twitter.com/" target="_blank" rel="noreferrer"><S.Icon src={Twi} alt="" /></a> */}
							{/* <a href="https://www.youtube.com/c/MorrodosAnjosResortOficial" target="_blank" rel="noreferrer"><S.Icon src={Youtube} alt="" /></a> */}
						</S.WrapMidiaIconsMobile>
						<S.WrapContactPhones>
							<S.Icon className='hoverNot' src={Phone} alt="" />
							<p>(43) 9 9844-6070</p>
							<S.LineOverPhones />
							<a href="https://api.whatsapp.com/send?phone=554398446070&text=Ol%C3%A1%20vim%20do%20site%2C%20gostaria%20de%20falar%20com%20um%20consultor!" target="_blank" rel="noreferrer">
							<S.Icon src={Whats} alt=""/>
							</a>	
							<p>(43) 9 9844-6070</p>
						</S.WrapContactPhones>
						<S.Local>
							Rodovia BR-369 km 57 - Bandeirantes/PR - Morro dos Anjos - 2022 * Todos os direitos
							reservados
						</S.Local>
					</S.WrapFooterBwtween>
					<S.LogoDesktop style={{marginRight: "5vw"}} src={CasaLogo} alt="" />
				</S.Footer>
			</S.Wrapper>
		</S.Container>
	);
};
