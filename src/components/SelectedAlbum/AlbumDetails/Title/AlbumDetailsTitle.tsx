import { FC, useMemo } from 'react';
import { Subtitle, Title, TitleContainer } from './AlbumDetailsTitle.styles';
import { resolveAlbumSubtitle } from '../../../../utils/ui/albumDetailsHandler';
import { Album } from '../../../../common/dataTypes';

interface IAlbumDetailsTitleProps {
	album: Album;
}

export const AlbumDetailsTitle: FC<IAlbumDetailsTitleProps> = ({ album }) => {
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
