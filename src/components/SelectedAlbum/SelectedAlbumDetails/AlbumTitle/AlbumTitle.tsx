import { FC, useMemo } from 'react';
import { Subtitle, Title, TitleContainer } from './AlbumTitle.styles';
import { resolveAlbumSubtitle } from '../../../../utils/ui/albumDetailsHandler';
import { Album } from '../../../../common/dataTypes';

interface IAlbumTitleProps {
	album: Album;
}

export const AlbumTitle: FC<IAlbumTitleProps> = ({ album }) => {
	const subtitleContent = useMemo(() => {
		return resolveAlbumSubtitle(album);
	}, [album]);

	return (
		<TitleContainer>
			<Title>{album.albumName}</Title>
			<Subtitle>{subtitleContent}</Subtitle>
		</TitleContainer>
	);
};
