import { Input } from '../Input/Input';
import * as S from './styles';

export const CardContato = () => {
	return (
		<S.Container>
			<S.Title>QUER SABER MAIS SOBRE O MORRO DOS ANJOS?</S.Title>
			<Input type="text" placeholder="Nome" value={(v) => console.log(v)} />
			<Input type="text" placeholder="E-mail" value={(v) => console.log(v)} />
			<Input type="text" placeholder="Telefone" value={(v) => console.log(v)} />
			<Input type="text" placeholder="Cidade" value={(v) => console.log(v)} />
			<S.Button>ENVIAR</S.Button>
		</S.Container>
	);
};
