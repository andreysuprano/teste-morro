import { Button } from '../CardContato/styles';
import * as S from './styles';

export const LocationSection = () => {
	return (
		<S.Container>
			<S.GridWrapper>
				<S.TextWrapper>
					<S.Title>LOCALIZAÇÃO ESTRATÉGICA: MAIS UM MOTIVO PARA INVESTIR AQUI.</S.Title>
					<S.Pragraph>
						O Morro dos Anjos está localizado em Bandeirantes, norte pioneiro do Paraná e próximo ao
						sudoeste do Estado de São Paulo.
					</S.Pragraph>
					<S.DataWrapper>
						<S.DataTitleHilight>
							+ de 40<br /> milhões
						</S.DataTitleHilight>
						<S.DataMinWeight>
							de habitantes em<br /> um raio de 450 km
						</S.DataMinWeight>
					</S.DataWrapper>
				</S.TextWrapper>
				<S.ImageWrapper>
					<S.GridImage src="./assets/img/MapaSul.png" alt="" />
					<S.DataWrapper>
						<S.DataTitleHilightMobile>+ de 40 milhões</S.DataTitleHilightMobile>
						<S.DataMinWeightMobile>de habitantes em um raio de 450 km</S.DataMinWeightMobile>
					</S.DataWrapper>
				</S.ImageWrapper>
			</S.GridWrapper>
		</S.Container>
	);
};
