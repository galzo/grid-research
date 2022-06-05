import { AlbumData } from '../../common/dataTypes';
import { GridItemPosition } from '../../common/uiTypes';

export interface ISelectedAlbumProps {
	selectedAlbum?: AlbumData;
	albumPosition?: GridItemPosition;
	onDismiss: VoidFunction;
}
