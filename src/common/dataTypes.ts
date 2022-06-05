export type AlbumId = string;

export interface AlbumImage {
	id: AlbumId;
	image: string;
}

export interface RawAlbumData {
	['album_name']: string;
	['animal']: string;
	['artist_name']: string;
	['big_thumbnail']: string;
	['colors']: number[][];
	['drawing']: number;
	['face_ratio']: number;
	['faces']: number[][];
	['fashion']: number;
	['fine_arts']: number;
	['genre']: string;
	['geometric']: number;
	['musical']: number;
	['nature']: number;
	['persons_ratio']: number;
	['pesrons']: number[][];
	['photography']: number;
	['release_year']: number;
	['small_thumbnail']: string;
	['text_blocks']: number[][];
	['text_ratio']: number;
	['track_name']: string;
	['urban']: string;
	['youtube_link']: string;
}

export interface Album {
	id: AlbumId;
	albumName: string;
	trackName: string;
	artistName: string;
	releaseYear: number;
	genre: string;
	thumbnails: {
		small: string;
		large: string;
	};
}

export interface AlbumData extends Album {
	image?: string;
	relatedAlbums: AlbumId[];
}
