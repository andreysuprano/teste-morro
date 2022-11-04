import * as S from './styles';
import Map from "../../assets/img/IMPLANTACAO.png";

export const ArqPlant = () => {
	return (
	
			<S.Container>
                <S.AbsoluteBackground/>
                <S.MapDiv>
                <S.Map src={Map} alt="" />
                </S.MapDiv>
                <S.InfoDiv>
                    <S.Title>SÃO MUITAS<br/>OPÇÕES PRA<br/>VOCÊ APROVEITAR</S.Title>
                    <S.Wrap>
                        <S.Left>
                            <ol>
                                <li>PÓRTICO DE ENTRADA</li>
                                <li>CENTRO DE CONVENÇÕES</li>
                                <li>RESTAURANTE PRINCIPAL</li>
                                <li>CINEMA / BOUCHE PLACE / JOGOS TEEN</li>
                                <li>MUNDO ENCANTADO INFANTIL</li>
                                <li>PRAÇA DE CONVENIÊNCIA</li>
                                <li>PLAYGROUND</li>
                                <li>PALCO PARA APRESENTAÇÕES</li>
                                <li>QUADRA POLIESPORTIVA COBERTA</li>
                                <li>CAMPO DE FUTEBOL</li>
                                <li>2 QUADRAS DE TÊNIS</li>
                                <li>4 QUADRAS DE VÔLEI DE AREIA / BEACH TENNIS</li>
                                <li>ADMINISTRAÇÃO / SERVIÇOS</li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ol>
                        </S.Left>
                        <S.Right>
                        <ol>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ol>
                        </S.Right>
                    </S.Wrap>
                </S.InfoDiv>
			</S.Container>
	
	);
};