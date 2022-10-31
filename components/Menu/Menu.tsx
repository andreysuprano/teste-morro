import { useState } from 'react';
import * as S from './styles';

import Logo from '../../assets/img/LOGOBRANCA.png';

import Insta from '../../assets/img/icone_instagram.png';
import Youtube from '../../assets/img/icone_youtube.png';
import Twi from '../../assets/img/icone_twitter.png';
import Face from '../../assets/img/icone_facebook.png';
import Whats from '../../assets/img/icone whatsapp.png';

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
                    <h1 style={{color: "white"}}>X</h1>
                </S.WrapLines>
            </S.WrapFirst>
            <S.Logo src={Logo} alt="" />
            <S.WrapMenuLinks>
            <ul>
                <li>HOME</li>
                <li>SOBRE O MORRO DOS ANJOS
                     <ul>
                        <li style={{marginLeft:'2vw', opacity:'0.5'}}>ESTRUTURA E LAZER</li>
                        <li style={{marginLeft:'2vw', opacity:'0.5'}}>ACOMODACOES</li>
                     </ul>
                </li>
                <li>ENCONTRE O SEU PERFIL
                     <ul>
                        <li style={{marginLeft:'2vw', opacity:'0.5'}}>CURTIR COM A FAMILIA</li>
                        <li style={{marginLeft:'2vw', opacity:'0.5'}}>INVESTIR</li>
                        <li style={{marginLeft:'2vw', opacity:'0.5'}}>PRATICAR A FE</li>
                     </ul>
                </li>
                <li>CONTATO</li>
            </ul>
            </S.WrapMenuLinks>
            <S.WrapMidiaIcons>
                <S.Icon src={Whats} alt="" />
                <S.Icon src={Face} alt="" />
                <S.Icon src={Insta} alt="" />
                <S.Icon src={Twi} alt="" />
                <S.Icon src={Youtube} alt="" />
            </S.WrapMidiaIcons>
        </>
        }
		</S.Container>
	);
};