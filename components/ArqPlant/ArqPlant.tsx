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
                                <li>ANGE RESTAURANTE COZINHA ORIENTAL</li>
                                <li>LOJA DE CONVENIÊNCIA / EMPÓRIO</li>
                                <li>RECEPÇÃO / LOBBY</li>
                                <li>PORTE-COCHÈRE</li>
                                <li>PIZZARIA / HANBURGUERIA / MICROCERVEJARIA</li>
                            </ol>
                        </S.Left>
                        <S.Right>
                        <ol>
                                <li>PARQUE AQUÁTICO INDOOR</li>
                                <li>ACADEMIA</li>
                                <li>SAUNAS / SALAS DE MASSAGEM</li>
                                <li>BOULEVARD COM ESPELHOS D'ÀGUA</li>
                                <li>CAPELA</li>
                                <li>PRAIA</li>
                                <li>PISCINA DE BIRIBOL</li>
                                <li>HIDROMASSAGEM</li>
                                <li>PISCINA ADULTO</li>
                                <li>BAR MOLHADO</li>
                                <li>BAR DA PISCINA</li>
                                <li>TOBOGÁGUAS</li>
                                <li>PISCINA DE SURFE</li>
                                <li>TOBOGÃS</li>
                                <li>LAZY RIVER</li>
                                <li>AQUAPLAY INFANTIL</li>
                            </ol>
                        </S.Right>
                    </S.Wrap>
                </S.InfoDiv>
			</S.Container>
	
	);
};