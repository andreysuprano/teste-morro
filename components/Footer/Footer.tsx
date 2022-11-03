import * as S from './styles';
import Logo from '../../assets/img/LOGOBRANCA.png';
import CasaLogo from '../../assets/img/logo ca2a.png';
import Insta from '../../assets/img/icone_instagram.png';
import Youtube from '../../assets/img/icone_youtube.png';
import Twi from '../../assets/img/icone_twitter.png';
import Face from '../../assets/img/icone_facebook.png';
import Whats from '../../assets/img/icone whatsapp.png';
import Phone from '../../assets/img/icone_fone.png';


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
					<S.Logo src={Logo} alt="" />
					<S.WrapFooterBwtween>
						<S.WrapMidiaIcons>
							
							<S.Icon src={Face} alt="" />
							<S.Icon src={Insta} alt="" />
							<S.Icon src={Twi} alt="" />
							<S.Icon src={Youtube} alt="" />
						</S.WrapMidiaIcons>
						<S.WrapOptions>
							<S.Option>ESTRUTURA E LAZER</S.Option>
							<S.LineOver/>
							<S.Option>ACOMODAÇÕES</S.Option>
							<S.LineOver/>
							<S.Option>CURTIR A FAMÍLIA</S.Option>
							<S.LineOver/>
							<S.Option>PROLONGUE SUA FÉ</S.Option>
							<S.LineOver/>
							<S.Option>INVESTIR</S.Option>
							<S.LineOver/>
							<S.Option>FAQ</S.Option>
							<S.LineOver/>
							<S.Option>CONTATO</S.Option>
						</S.WrapOptions>
						<S.WrapContactPhones>
						<S.Icon src={Phone} alt="" />
						<p>(43) 9844-6070</p>
						<S.LineOverPhones/>
						<S.Icon src={Whats} alt="" />
						<p>(43) 9844-6070</p>
						</S.WrapContactPhones>
						<S.Local>Rodovia BR-369 km 57 - Bandeirantes/PR - Morro dos Anjos - 2022 * Todos os direitos reservados</S.Local>
					</S.WrapFooterBwtween>
					<S.Logo src={CasaLogo} alt="" />
				</S.Footer>
			</S.Wrapper>
		</S.Container>
	);
};
