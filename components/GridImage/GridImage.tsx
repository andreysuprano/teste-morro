import { isNull } from 'util';
import * as S from './styles';

interface GridImageProps {
	principalPic: string;
	pic1: string;
	pic2?: string;
	pic3?: string;
	inverse?: boolean;
	button?: boolean;
	buttonPosition: string;
	title: string;
	hilight?: string | null;
	paragraph: string;
	list?: string[] | null;
	mobileButton?: boolean;
}

export const GridImage = ({
	buttonPosition,
	pic1,
	pic2,
	principalPic,
	button = true,
	inverse = false,
	pic3,
	title,
	paragraph,
	list = null,
	hilight = null,
	mobileButton = true
}: GridImageProps) => {
	const ButtonLocation = (button === true && buttonPosition === 'pic') || button === false ? true : false;

	return (
		<div>
			<S.Container inverse={inverse}>
				<S.TextWrap>
					{hilight && <S.Hilight inverse={inverse}>{hilight}</S.Hilight>}
					<S.Title inverse={inverse}>{title}</S.Title>
					<S.Paragraph inverse={inverse}>{paragraph}</S.Paragraph>
					{!ButtonLocation && <S.Button position={ButtonLocation}>FALE JÁ COM UM CONSULTOR</S.Button>}
					<br />
					{list &&
						list.map((item) => {
							return <S.ListItem inverse={inverse}>{item}</S.ListItem>;
						})}
				</S.TextWrap>
				<S.GridContainer>
					<S.PrincipalImage src={principalPic} alt="" />
					<S.ThumbContainer inverse={inverse}>
						<S.Image src={pic1} alt="" />
						{pic2 ? <S.Image src={pic2} alt="" /> : null}
						{ButtonLocation && button ? (
							<S.Button position={ButtonLocation}>FALE JÁ COM UM CONSULTOR</S.Button>
						) : null}
						{pic3 ? <S.Image src={pic3} alt="" /> : null}
					</S.ThumbContainer>
				</S.GridContainer>
			</S.Container>
			{mobileButton && (
				<S.ButtonMobileWrapper>
					<S.ButtonMobile position={ButtonLocation}>FALE JÁ COM UM CONSULTOR</S.ButtonMobile>
				</S.ButtonMobileWrapper>
			)}
		</div>
	);
};
