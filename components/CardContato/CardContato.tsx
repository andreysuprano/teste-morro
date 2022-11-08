import { useState } from 'react';
import { sendSimpleFormSubmit } from '../../utils/sendFormSubmit';
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
	function formatTelefone(value: string) {
		const telefone = value.replace(/\D/g, '');
		return telefone.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g, '($1)$2 $3-$4');
	}

	function handleTelefone(telefone: string) {
		setTelefone(formatTelefone(telefone));
	}
	return (
		<S.Container>
			<span>QUER SABER MAIS SOBRE O MORRO DOS ANJOS?</span>
			<input type="text" placeholder="Nome" onChange={(v) => setNome(v.target.value)} />
			<input type="email" placeholder="E-mail" onChange={(v) => setEmail(v.target.value)} />
			<input
				type="text"
				placeholder="Telefone"
				onChange={(v) => handleTelefone(v.target.value)}
				value={telefone}
				maxLength={15}
			/>
			<input type="text" placeholder="Cidade" onChange={(v) => setCidade(v.target.value)} />
			<S.Button onClick={() => handleSubmit()}>ENVIAR</S.Button>
		</S.Container>
	);
};
