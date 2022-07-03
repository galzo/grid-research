import styled from 'styled-components';

export const AlbumDetailsContainer = styled.div`
	width: 850px;
	height: 100%;
	user-select: none;

	@media (max-width: 1799px) {
		width: 650px;
	}

	margin-bottom: 50px;
	z-index: 9999;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

export const ColorContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	align-items: flex-start;
`;
