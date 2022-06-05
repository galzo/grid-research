import { Album, AlbumData } from '../../../common/dataTypes';
import { GridItemPosition } from '../../../common/uiTypes';

export interface IAlbumItemProps {
	albumIndex: number;
	album: AlbumData;
	onHover: (album: AlbumData) => void;
	onClick: (album: AlbumData, position: GridItemPosition) => void;
	isFocused: boolean;
	isRelated: boolean;
	itemSize: number;
}
