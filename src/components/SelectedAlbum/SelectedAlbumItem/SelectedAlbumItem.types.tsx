import { AlbumData } from '../../../common/dataTypes';
import { GridItemPosition } from '../../../common/uiTypes';

export interface ISelectedAlbumItemProps {
	album: AlbumData;
	position: GridItemPosition;
	onDismiss: VoidFunction;
}
