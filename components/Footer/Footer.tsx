import { SERVER_PROPS_ID } from 'next/dist/shared/lib/constants';
import * as S from './styles';

interface footerProps{
    imageBackground: string;
    footerComp: React.ReactElement;
}

export const Footer = ({imageBackground, footerComp}:footerProps) => {
	return (
		
			<S.Container imageBackground={imageBackground}>
                 {footerComp}
                    <S.FooterContent>
                            <h1>footer content</h1>
                    </S.FooterContent>
			</S.Container>
		
	);
};