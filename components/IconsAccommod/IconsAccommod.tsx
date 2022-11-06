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
                    <h5>Internet / wi-Fi<br/>de alta velocidade</h5>
                    <p>Todos os chalés contam com wi-fi de alta velocidade.</p>
                </S.WrapTexts>
        </S.WrapItems>
        <S.WrapItems>
            <Image src={Cozinha} alt="" />
                <S.WrapTexts>
                    <h5>Cozinha com<br/>enxoval completo</h5>
                    <p>Cozinha completa com todos os utensílios necessários.</p>
                </S.WrapTexts>
        </S.WrapItems>
        <S.WrapItems>
            <Image src={Dorms} alt="" />
                <S.WrapTexts>
                    <h5>01 ou 02<br/>dormitórios</h5>
                    <p>Os chalés de 60 m² contam com 1 dormitório; e as casas vila de 90 m² com 2 dormitórios, sendo 1 suíte.</p>
                </S.WrapTexts>
        </S.WrapItems>
        <S.WrapItems>
            <Image src={TV} alt="" />
                <S.WrapTexts>
                    <h5>Televisão</h5>
                    <p>Todas as acomodações do Morro dos Anjos possuem TV com diversos canais ao seu dispor.</p>
                </S.WrapTexts>
        </S.WrapItems>
        <S.WrapItems>
            <Image src={Frigo} alt="" />
                <S.WrapTexts>
                    <h5>Frigobar</h5>
                    <p>Todas as acomodações do Morro dos Anjos possuem um frigobar ao seu dispor.</p>
                </S.WrapTexts>
        </S.WrapItems>
        <S.WrapItems>
            <Image src={Varanda} alt="" />
                <S.WrapTexts>
                <h5>Sala com varanda</h5>
                    <p>Os chalés de 60m² poderão acomodar até 6 pessoasç e as casas vila de 90m² até 10 pessoas.</p>
                </S.WrapTexts>
        </S.WrapItems>
        <S.WrapItems>
            <Image src={Ar} alt="" />
                <S.WrapTexts>
                    <h5>Ar-condicionado</h5>
                    <p>Conte com ar-condicionado para deixar o clima como desejar.</p>
                </S.WrapTexts>
        </S.WrapItems>
        <S.WrapItems>
            <Image src={Micro} alt="" />
                <S.WrapTexts>
                    <h5>Micro-ondas</h5>
                    <p>Praticidade e velocidade para o seu dia-a-dia durante sua estadia.</p>
                </S.WrapTexts>
        </S.WrapItems>
    </S.WrapAll>
    <br/><br/>
    <Button>
    <a style={{textDecoration: "none", color: "inherit"}} href="https://api.whatsapp.com/send?phone=554398446070&text=Ol%C3%A1%20vim%20do%20site%2C%20gostaria%20de%20falar%20com%20um%20consultor!" target="_blank" rel="noreferrer">
							QUERO FALAR COM UM CONSULTOR
							</a>
    </Button>
    </S.Container>
	);
};