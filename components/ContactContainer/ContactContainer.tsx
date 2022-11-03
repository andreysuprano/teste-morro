import * as S from './styles';
import Logo from '../../assets/img/LogoAzulEBranca.png';
import { Input } from '../../components/Input/Input';
import { Button } from '../CardContato/styles';

export const ContactContainer = () => {
	return (
		
			<S.Container>
                <S.AbsoluteGradient/>
                <S.Logo src={Logo} alt="" />
                <S.WrapForm>
                    <S.PrincipalLabel>TENHA SEU PRÓXIMO IMÓVEL NO<br/>MORRO DOS ANJOS</S.PrincipalLabel>
                    <S.Sub>Preencha o formulário abaixo que a gente<br/>entra em contato e conta tudo pra você.</S.Sub>
                   <S.WrapInputs>
                    <Input type={'text'} placeholder={'Nome'} value={function (value: any) {
                    throw new Error('Function not implemented.');
                      } }/>
                       <Input type={'email'} placeholder={'E-mail'} value={function (value: any) {
                    throw new Error('Function not implemented.');
                     } }/>
                       <Input type={'phone'} placeholder={'Telefone'} value={function (value: any) {
                    throw new Error('Function not implemented.');
                      } }/>
                       <Input type={'text'} placeholder={'Cidade'} value={function (value: any) {
                    throw new Error('Function not implemented.');
                     } }/>
                   </S.WrapInputs>
                   <S.WrapChecks>
                      <S.CheckLabel>Como prefere ser contato:</S.CheckLabel>
                      <S.WrapInputsChoice>
                          <S.WrapEach>
                            <input type="checkbox" id="WhatsApp" name="WhatsApp"/>
                            <label>WhatsApp</label>
                          </S.WrapEach>
                          <S.WrapEach>
                            <input type="checkbox" id="Telefone" name="Telefone"/>
                            <label>Telefone</label>
                          </S.WrapEach>
                          <S.WrapEach>
                            <input type="checkbox" id="Email" name="Email"/>
                            <label>E-mail</label>
                          </S.WrapEach>
                      </S.WrapInputsChoice>
                      <S.LineBetween/>
                      <S.CheckLabel>Qual o melhor horário para entrar em  contato:</S.CheckLabel>
                      <S.WrapInputsChoice>
                      <S.WrapInputsChoice>
                          <S.WrapEach>
                            <input type="checkbox" id="Manha" name="Manha"/>
                            <label>Manhã</label>
                          </S.WrapEach>
                          <S.WrapEach>
                            <input type="checkbox" id="Tarde" name="Tarde"/>
                            <label>Tarde</label>
                          </S.WrapEach>
                          <S.WrapEach>
                            <input type="checkbox" id="Noite" name="Noite"/>
                            <label>Noite</label>
                          </S.WrapEach>
                      </S.WrapInputsChoice>
                        </S.WrapInputsChoice>
                   </S.WrapChecks>
                   <Button>QUERO RECEBER O CONTATO DE UM CONSULTOR</Button>
                </S.WrapForm>
			</S.Container>
		
	);
};