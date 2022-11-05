import * as S from './styles';
import Image from 'next/image';

import { Button } from '../BeneficiosSection/styles';

import Area from '../../assets/img/icone_area.png';
import Cozinha from '../../assets/img/icone_conzinha.png';
import Micro from '../../assets/img/icone_microondas.png';
import TV from '../../assets/img/icone_TV.png';
import Frigo from '../../assets/img/icone_frigobar.png';
import Ar from '../../assets/img/icone_ar.png';
import Varanda from '../../assets/img/icone_varanda.png';
import Wifi from '../../assets/img/icone_wifi.png';
import Dorms from '../../assets/img/icone_dorms.png';



export const IconsAccommod = () => {
	
	return (
	<S.Container>
    <S.WrapAll>
        <S.WrapItems>
            <Image src={Area} alt="" />
                <S.WrapTexts>
                    <h5>Àrea Privativa:<br/>60 ou 90 m²</h5>
                    <p>Os chalés de 60m² poderão acomodar até 6 pessoasç e as casas vila de 90m² até 10 pessoas.</p>
                </S.WrapTexts>
        </S.WrapItems>
        <S.WrapItems>
            <Image src={Wifi} alt="" />
                <S.WrapTexts>
                    <h5>Àrea Privativa:<br/>60 ou 90 m²</h5>
                    <p>Os chalés de 60m² poderão acomodar até 6 pessoasç e as casas vila de 90m² até 10 pessoas.</p>
                </S.WrapTexts>
        </S.WrapItems>
        <S.WrapItems>
            <Image src={Cozinha} alt="" />
                <S.WrapTexts>
                    <h5>Àrea Privativa:<br/>60 ou 90 m²</h5>
                    <p>Os chalés de 60m² poderão acomodar até 6 pessoasç e as casas vila de 90m² até 10 pessoas.</p>
                </S.WrapTexts>
        </S.WrapItems>
        <S.WrapItems>
            <Image src={Dorms} alt="" />
                <S.WrapTexts>
                    <h5>Àrea Privativa:<br/>60 ou 90 m²</h5>
                    <p>Os chalés de 60m² poderão acomodar até 6 pessoasç e as casas vila de 90m² até 10 pessoas.</p>
                </S.WrapTexts>
        </S.WrapItems>
        <S.WrapItems>
            <Image src={TV} alt="" />
                <S.WrapTexts>
                    <h5>Àrea Privativa:<br/>60 ou 90 m²</h5>
                    <p>Os chalés de 60m² poderão acomodar até 6 pessoasç e as casas vila de 90m² até 10 pessoas.</p>
                </S.WrapTexts>
        </S.WrapItems>
        <S.WrapItems>
            <Image src={Frigo} alt="" />
                <S.WrapTexts>
                    <h5>Àrea Privativa:<br/>60 ou 90 m²</h5>
                    <p>Os chalés de 60m² poderão acomodar até 6 pessoasç e as casas vila de 90m² até 10 pessoas.</p>
                </S.WrapTexts>
        </S.WrapItems>
        <S.WrapItems>
            <Image src={Varanda} alt="" />
                <S.WrapTexts>
                    <h5>Àrea Privativa:<br/>60 ou 90 m²</h5>
                    <p>Os chalés de 60m² poderão acomodar até 6 pessoasç e as casas vila de 90m² até 10 pessoas.</p>
                </S.WrapTexts>
        </S.WrapItems>
        <S.WrapItems>
            <Image src={Ar} alt="" />
                <S.WrapTexts>
                    <h5>Àrea Privativa:<br/>60 ou 90 m²</h5>
                    <p>Os chalés de 60m² poderão acomodar até 6 pessoasç e as casas vila de 90m² até 10 pessoas.</p>
                </S.WrapTexts>
        </S.WrapItems>
        <S.WrapItems>
            <Image src={Micro} alt="" />
                <S.WrapTexts>
                    <h5>Àrea Privativa:<br/>60 ou 90 m²</h5>
                    <p>Os chalés de 60m² poderão acomodar até 6 pessoasç e as casas vila de 90m² até 10 pessoas.</p>
                </S.WrapTexts>
        </S.WrapItems>
    </S.WrapAll>
    <br/><br/>
    <Button>QUERO FALAR COM UM CONSULTOR</Button>
    </S.Container>
	);
};