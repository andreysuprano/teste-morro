import { useState } from 'react';
import * as S from './styles';
import Link from 'next/link';

import Logo from '../../assets/img/LOGOBRANCA.png';

import Insta from '../../assets/img/icone_instagram.png';
import Youtube from '../../assets/img/icone_youtube.png';
import Twi from '../../assets/img/icone_twitter.png';
import Face from '../../assets/img/icone_facebook.png';
import Whats from '../../assets/img/icone whatsapp.png';
import CloseButton from '../../assets/svg/CloseButton.svg';

export const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);

	return (
		<S.Container isOpen={isOpen}>
     {!isOpen &&
        <>
          <S.LineUp/>
            <S.WrapFirst onClick={() => setIsOpen(prev => !prev)}>
                <S.MenuLabel>MENU</S.MenuLabel>
                <S.WrapLines>
                    <S.LineMenu/>
                    <S.LineMenu/>
                    <S.LineMenu/>
                </S.WrapLines>
            </S.WrapFirst>
        </>}

     {isOpen &&
        <>
            <S.WrapFirst onClick={() => setIsOpen(prev => !prev)}>
            <S.MenuLabel>MENU</S.MenuLabel>
            <S.WrapLines>
                <S.Icon src={CloseButton} alt="" style={{width:20}}/>
                </S.WrapLines>
            </S.WrapFirst>
            <S.Logo src={Logo} alt="" />
            <S.WrapMenuLinks>
              <S.PrincipalNav><Link href="/" style={{textDecoration: "none", color:"inherit"}}>• HOME</Link></S.PrincipalNav>
              <S.PrincipalNavNone>• SOBRE O MORRO DOS ANJOS</S.PrincipalNavNone>
                <S.SublNav><Link href="/leisure" style={{textDecoration: "none", color:"inherit"}}>• ESTRUTURA E LAZER</Link></S.SublNav>
                <S.SublNav><Link href="/accommodations" style={{textDecoration: "none", color:"inherit"}}>• ACOMODACOES</Link></S.SublNav>
              <S.PrincipalNavNone>• ENCONTRE O SEU PERFIL</S.PrincipalNavNone>
                <S.SublNav><Link href="/family" style={{textDecoration: "none", color:"inherit"}}>• CURTIR COM A FAMILIA</Link></S.SublNav>
                <S.SublNav><Link href="/invest" style={{textDecoration: "none", color:"inherit"}}>• INVESTIR</Link></S.SublNav>
                <S.SublNav><Link href="/faith" style={{textDecoration: "none", color:"inherit"}}>• PRATICAR A FE</Link></S.SublNav>
              <S.PrincipalNav><Link href="/contact" style={{textDecoration: "none", color:"inherit"}}>• CONTATO</Link></S.PrincipalNav>
            </S.WrapMenuLinks>
            <S.WrapMidiaIcons>
              <a href="https://api.whatsapp.com/send?phone=554398446070&text=Ol%C3%A1%20vim%20do%20site%2C%20gostaria%20de%20falar%20com%20um%20consultor!" target="_blank" rel="noreferrer"><S.Icon src={Whats} alt="" /></a>	
              <a href="https://www.facebook.com/profile.php?id=100068916745116" target="_blank" rel="noreferrer"><S.Icon src={Face} alt="" /></a>	
							<a href="https://www.instagram.com/morro_dos_anjos_resortofc/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer"><S.Icon src={Insta} alt="" /></a>
							<a href="https://twitter.com/" target="_blank" rel="noreferrer"><S.Icon src={Twi} alt="" /></a>
							<a href="https://www.youtube.com/c/MorrodosAnjosResortOficial" target="_blank" rel="noreferrer"><S.Icon src={Youtube} alt="" /></a>
            </S.WrapMidiaIcons>
        </>
        }
		</S.Container>
	);
};