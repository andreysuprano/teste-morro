import { CardContato } from '../CardContato/CardContato';
import * as S from './styles';

interface ContatctFooterProps {
	title: string;
	paragraph: string;
	formLabel: boolean;
}

export const ContactFooter = ({ title, formLabel, paragraph }: ContatctFooterProps) => {
	return (
		<S.Container>
			<S.TextWrapper>
				<S.Title>{title}</S.Title>
				{!formLabel ? <S.Paragraph>{paragraph}</S.Paragraph> : null}
			</S.TextWrapper>
			<S.FormWrapper>
				{formLabel ? (
					<S.FormLabel>Envie seus dados e receba o contato de um dos nossos consultores.</S.FormLabel>
				) : null}
				<CardContato />
			</S.FormWrapper>
		</S.Container>
	);
};
