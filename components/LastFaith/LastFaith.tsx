import * as S from './styles';
import Image from 'next/image';

import imgEx1 from "../../assets/img/CASA VILA.png";
import imgEx2 from "../../assets/img/CHALE.png";

import { Button } from '../CardContato/styles';
import Link from 'next/link';


export const LastFaith = () => {
	return (
			<S.Container>
                <S.Left>
                    <h1>ACOMODAÇÕES<br/>PARA ATÉ<br/>10 PESSOAS</h1>
                    <p>Alto padrão e estrutura completa de lazer e serviços garantem à sua família uma experiência de fé com o máximo em conforto.</p>
                    <S.Absolute01>
                        <Image className='imgclass1' src={imgEx1} alt=""/>
                        <h4>Casa Vila</h4>
                        <h5>90 m² privativos<br/>Até 10 pessoas</h5>
                    </S.Absolute01>
                    <S.Absolute02>
                        <Image className='imgclass2' src={imgEx2} alt=""/>
                        <h4>Chalé</h4>
                        <h5>60 m² privativos<br/>Até 6 pessoas</h5>
                    </S.Absolute02>
                </S.Left>
                <S.Right>
                    <Link href="/accommodations" style={{textDecoration: "none", color:"inherit"}}>
                        <Button className='btnThings'>CONHEÇA NOSSAS ACOMODAÇÕES</Button>
                    </Link>
                </S.Right>
			</S.Container>
	);
};