import { AlbumData } from '../../common/dataTypes';
import { GridItemPosition } from '../../common/uiTypes';

export interface ISelectedAlbumOverlayProps {
	selectedAlbum?: AlbumData;
	albumPosition?: GridItemPosition;
}
