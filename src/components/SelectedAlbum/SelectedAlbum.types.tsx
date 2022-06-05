import { AlbumData, AlbumId } from '../../common/dataTypes';
import { GridItemPosition } from '../../common/uiTypes';

export interface ISelectedAlbumProps {
	selectedAlbum?: AlbumData;
	albumPosition?: GridItemPosition;
	onDismiss: VoidFunction;
	allAlbums: Record<AlbumId, AlbumData>;
}
