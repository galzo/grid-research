import styled from 'styled-components';
import { FadeInDiv } from '../../Base/FadeInDiv';

export const MusicPlayerContainer = styled(FadeInDiv)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	z-index: 6;
	margin-top: 27px;
	@media only screen and (min-height: 2000px) {
		margin-top: 15px;
	}
`;

export const PlayButton = styled.img`
	cursor: pointer;
	margin-right: 14px;
	width: 18px;
	opacity: 0.8;
	user-select: none;
`;

export const SongName = styled.span`
	font-style: italic;
	font-weight: 400;
	font-size: 14px;
	color: #ffffff;
	max-width: 247px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	user-select: none;
	opacity: 0.95;
	margin-right: 12px;
	user-select: none;
`;

export const PlayerAnimation = styled.img`
	width: 270px;
	height: 70px;
	opacity: 0.8;
	user-select: none;
`;

export const LeftSideContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
