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
					
							<S.Button>
							<a style={{textDecoration: "none", color: "inherit"}} href="https://api.whatsapp.com/send?phone=554398446070&text=Ol%C3%A1%20vim%20do%20site%2C%20gostaria%20de%20falar%20com%20um%20consultor!" target="_blank" rel="noreferrer">
							QUERO FALAR COM UM CONSULTOR
							</a>
							</S.Button>
				
				</S.Wrapper>
				<S.Mapa />
			</S.Container>
		</div>
	);
};
