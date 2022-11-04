import * as S from './styles';
import { Button } from '../CardContato/styles';

export const LocaliazcaoSection = () => {
	return (
		<div>
			<S.Container>
				<S.Wrapper>
					<S.SectionTitle>NOSSA LOCALIZAÇÃO</S.SectionTitle>
					<S.Localizacoes>
						<S.Localizacao>
							<S.Title>DISTÂNCIA ATÉ</S.Title>
							<S.City>LONDRINA</S.City>
							<S.Km>97km</S.Km>
						</S.Localizacao>
						<S.Divider />
						<S.Localizacao>
							<S.Title>DISTÂNCIA ATÉ</S.Title>
							<S.City>CURITIBA</S.City>
							<S.Km>420km</S.Km>
						</S.Localizacao>
						<S.Divider />
						<S.Localizacao>
							<S.Title>DISTÂNCIA ATÉ</S.Title>
							<S.City>SÃO PAULO</S.City>
							<S.Km>442km</S.Km>
						</S.Localizacao>
					</S.Localizacoes>
					<S.Button>QUERO FALAR COM UM CONSULTOR</S.Button>
				</S.Wrapper>
				<S.Mapa />
			</S.Container>
		</div>
	);
};
