import * as S from './styles';
import Logo from '../../assets/img/LogoAzulEBranca.png';
import { Input } from '../../components/Input/Input';
import { Button } from '../CardContato/styles';
import { useState } from 'react';
import { sendFormSubmit } from '../../utils/sendFormSubmit';

export const ContactContainer = () => {
	const [ nome, setNome ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ telefone, setTelefone ] = useState('');
	const [ cidade, setCidade ] = useState('');
	const [ whatsContato, setWhatsContato ] = useState<boolean>(false);
	const [ telefoneContato, setTelefoneContato ] = useState<boolean>(false);
	const [ emailContato, setEmailContato ] = useState<boolean>(false);
	const [ manha, setManha ] = useState<boolean>(false);
	const [ tarde, setTarde ] = useState<boolean>(false);
	const [ noite, setNoite ] = useState<boolean>(false);

	const handleSubmit = () => {
		sendFormSubmit({
			nome,
			email,
			telefone,
			cidade,
			horarioContato: {
				manha,
				tarde,
				noite
			},
			optionContato: {
				emailContato,
				telefoneContato,
				whatsContato
			}
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
			<S.AbsoluteGradient />
			<S.Logo src={Logo} alt="" />
			<S.WrapForm>
				<S.PrincipalLabel>
					TENHA SEU PRÓXIMO IMÓVEL NO<br />MORRO DOS ANJOS
				</S.PrincipalLabel>
				<S.Sub>
					Preencha o formulário abaixo que a gente<br />entra em contato e conta tudo pra você.
				</S.Sub>
				<S.WrapInputs>
					<input type={'text'} placeholder={'Nome'} onChange={(e) => setNome(e.target.value)} />
					<input type={'email'} placeholder={'E-mail'} onChange={(e) => setEmail(e.target.value)} />
					<input
						type={'text'}
						placeholder={'Telefone'}
						onChange={(e) => handleTelefone(e.target.value)}
						value={telefone}
						maxLength={15}
					/>
					<input type={'text'} placeholder={'Cidade'} onChange={(e) => setCidade(e.target.value)} />
				</S.WrapInputs>
				<S.WrapChecks>
					<S.CheckLabel>Como prefere ser contatado?</S.CheckLabel>
					<S.WrapInputsChoice>
						<S.WrapEach>
							<input
								type="checkbox"
								checked={whatsContato}
								onChange={(e) => {
									setWhatsContato((prev) => !prev);
								}}
							/>
							<label>WhatsApp</label>
						</S.WrapEach>
						<S.WrapEach>
							<input
								type="checkbox"
								checked={telefoneContato}
								onChange={(e) => {
									setTelefoneContato((prev) => !prev);
								}}
							/>
							<label>Telefone</label>
						</S.WrapEach>
						<S.WrapEach>
							<input
								type="checkbox"
								checked={emailContato}
								onChange={(e) => {
									setEmailContato((prev) => !prev);
								}}
							/>
							<label>E-mail</label>
						</S.WrapEach>
					</S.WrapInputsChoice>
					<S.LineBetween />
					<S.CheckLabel>Qual o melhor horário para entrar em contato:</S.CheckLabel>
					<S.WrapInputsChoice>
						<S.WrapInputsChoice>
							<S.WrapEach>
								<input
									type="checkbox"
									checked={manha}
									onChange={(e) => {
										setManha((prev) => !prev);
									}}
								/>
								<label>Manhã</label>
							</S.WrapEach>
							<S.WrapEach>
								<input
									type="checkbox"
									checked={tarde}
									onChange={(e) => {
										setTarde((prev) => !prev);
									}}
								/>
								<label>Tarde</label>
							</S.WrapEach>
							<S.WrapEach>
								<input
									type="checkbox"
									checked={noite}
									onChange={(e) => {
										setNoite((prev) => !prev);
									}}
								/>
								<label>Noite</label>
							</S.WrapEach>
						</S.WrapInputsChoice>
					</S.WrapInputsChoice>
				</S.WrapChecks>
				<Button onClick={() => handleSubmit()}>QUERO RECEBER O CONTATO DE UM CONSULTOR</Button>
			</S.WrapForm>
		</S.Container>
	);
};
function v_fun(value: any) {
	throw new Error('Function not implemented.');
}
