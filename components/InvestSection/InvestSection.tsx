import { Button } from '../CardContato/styles';
import * as S from './styles';

export const InvestSection = () => {
	return (
		<S.Container>
			<S.GridWrapper>
				<S.GridImage src="./assets/img/Party.png" alt="" />
				<S.TextWrapper>
					<S.Title>INVISTA EM UM DOS SEGMENTOS QUE MAIS CRESCE EM TODO O MUNDO.</S.Title>
					<S.Pragraph>
						O turismo religioso atrai grande público aos destinos da fé, aquecendo a economia e gerando
						empregos e desenvolvimento a regiões descoladas das grandes capitais.
					</S.Pragraph>
					<S.DataWrapper>
						<S.Data>
							<S.DataTitle>
								<S.DataTitleHilight>
									No Mundo:<br />
								</S.DataTitleHilight>
								movimenta
							</S.DataTitle>
							<S.DataValue>330 milhões</S.DataValue>
							<S.DataMinWeight>de pessoas</S.DataMinWeight>
						</S.Data>
						<S.Data>
							<S.DataTitle>
								<S.DataTitleHilight>
									No Brasil:<br />
								</S.DataTitleHilight>
								movimenta
							</S.DataTitle>
							<S.DataValue>R$ 15 bilhões</S.DataValue>
							<S.DataMinWeight>por ano</S.DataMinWeight>
						</S.Data>
					</S.DataWrapper>
					<Button>
					<a style={{textDecoration: "none", color: "inherit"}} href="https://api.whatsapp.com/send?phone=554398446070&text=Ol%C3%A1%20vim%20do%20site%2C%20gostaria%20de%20falar%20com%20um%20consultor!" target="_blank" rel="noreferrer">
							FALE JÁ COM UM CONSULTOR
							</a>
					</Button>
				</S.TextWrapper>
			</S.GridWrapper>
		</S.Container>
	);
};
