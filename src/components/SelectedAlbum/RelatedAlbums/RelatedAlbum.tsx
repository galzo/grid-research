import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AlbumData } from '../../../common/dataTypes';
import { fetchImage } from '../../../utils/data/albumImageFetcher';
import { useHighResImage } from '../../../hooks/useHighResImage';
import { useDelayedRender } from '../../../hooks/useDelayedRender';

interface IRelatedAlbumProps {
	album: AlbumData;
	albumIndex: number;
}

export const RelatedAlbumContainer = styled.div`
	width: 115px;
	height: 115px;
	border: 2px solid white;
	border-radius: 4px;
	background-color: gray;
	background-color: #282c34;
	background-size: contain;
	z-index: 5;
	margin-right: 40px;
	-webkit-box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
	box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
	cursor: pointer; /* Add a pointer on hover */
	animation: fadeIn 1s;
	-webkit-animation: fadeIn 1s;
	-moz-animation: fadeIn 1s;
	-o-animation: fadeIn 1s;
	-ms-animation: fadeIn 1s;

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-moz-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-webkit-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-o-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-ms-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

export const RelatedAlbumImage = styled.img`
	width: 100%;
	height: 100%;
	transition: all 1000ms ease-in-out;
`;

export const RelatedAlbum: React.FunctionComponent<IRelatedAlbumProps> = ({
	album,
	albumIndex,
}) => {
	const { shouldRender } = useDelayedRender(albumIndex * 200);
	const { albumImage } = useHighResImage(album);

	if (!shouldRender) return null;

	return (
		<RelatedAlbumContainer>
			<RelatedAlbumImage src={albumImage} />
		</RelatedAlbumContainer>
	);
};
