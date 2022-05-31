import { AlbumDetails } from '../../../common/dataTypes';

export interface IGridItemProps {
	album: AlbumDetails;
	onHover: (album: AlbumDetails) => void;
	isFocused: boolean;
	isNeighbour: boolean;
	image: string;
}
