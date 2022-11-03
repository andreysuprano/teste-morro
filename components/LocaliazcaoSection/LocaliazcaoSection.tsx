import * as S from './styles';
import { Title } from '../DescricaoSection/styles';
import { Button } from '../CardContato/styles';

export const LocaliazcaoSection = () => {
	return (
		<div>
			<S.Container>
				<S.Wrapper>
					<Title style={{ color: '#fff', fontSize: 42 }}>NOSSA LOCALIZAÇÃO</Title>

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
					<Button style={{ position: 'absolute', top: 785 }}>QUERO FALAR COM UM CONSULTOR</Button>
				</S.Wrapper>
				<S.Mapa />
			</S.Container>
		</div>
	);
};
