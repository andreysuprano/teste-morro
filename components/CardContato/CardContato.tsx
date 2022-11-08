import { useState } from 'react';
import { sendSimpleFormSubmit } from '../../utils/sendFormSubmit';
import { Input } from '../Input/Input';
import * as S from './styles';

export const CardContato = () => {
	const [ nome, setNome ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ telefone, setTelefone ] = useState('');
	const [ cidade, setCidade ] = useState('');

	const handleSubmit = () => {
		sendSimpleFormSubmit({
			nome,
			email,
			telefone,
			cidade
		});
	};

	return (
		<S.Container>
			<S.TitleNew>QUER SABER MAIS SOBRE O MORRO DOS ANJOS?</S.TitleNew>
		
			<Input type="text" placeholder="Nome" value={(v) => setNome(v)} />
			<Input type="text" placeholder="E-mail" value={(v) => setEmail(v)} />
			<Input type="text" placeholder="Telefone" value={(v) => setTelefone(v)} />
			<Input type="text" placeholder="Cidade" value={(v) => setCidade(v)} />
			<S.Button onClick={() => handleSubmit()}>ENVIAR</S.Button>
		</S.Container>
	);
};
