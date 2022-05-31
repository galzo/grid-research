import { AlbumDetails, AlbumId } from '../../common/dataTypes';

export interface IAlbumsGridProps {
	data: Record<AlbumId, AlbumDetails>;
	tileSize?: number;
}
