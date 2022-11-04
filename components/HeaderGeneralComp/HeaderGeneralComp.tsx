import * as S from './styles';
import Logo from '../../assets/img/LOGOBRANCA.png';

interface generalHeaderProps {
	text: string;
	imageBackground: string;
}

export const HeaderGeneralComp = ({text,imageBackground}:generalHeaderProps) => {
	return (
		<S.Container imageBackground={imageBackground}>
				<S.Logo src={Logo} alt="" />
				<S.Text>{text}</S.Text>
		</S.Container>
	);
};
