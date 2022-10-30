import * as S from './styles';

interface CardPerfilProps {
	title: string;
	href: string;
	imageUrl: string;
}

export const CardPerfil = ({ title, href, imageUrl }: CardPerfilProps) => {
	return (
		<a href={href} style={{ textDecoration: 'none' }}>
			<S.Container imageUrl={imageUrl}>
				<S.Content>
					<S.Title>{title}</S.Title>
				</S.Content>
			</S.Container>
		</a>
	);
};
