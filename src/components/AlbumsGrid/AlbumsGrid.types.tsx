import { AlbumId, AlbumData } from '../../common/dataTypes';

export interface IAlbumsGridProps {
	albums: Record<AlbumId, AlbumData>;
	tileSize?: number;
}
