import styled from 'styled-components';
import { FadeInDiv } from '../../Base/FadeInDiv';

export const MusicPlayerContainer = styled(FadeInDiv)`
	width: 565px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	z-index: 6;
`;

export const PlayButton = styled.img`
	cursor: pointer;
	margin-right: 14px;
	width: 18px;
`;

export const SongName = styled.span`
	font-family: 'Gotham';
	font-weight: 400;
	font-size: 14px;
	color: #ffffff;
	max-width: 247px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	user-select: none;
`;

export const PlayerAnimation = styled.img`
	width: 270px;
	height: 70px;
`;

export const LeftSideContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
