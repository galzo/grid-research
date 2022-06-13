import React, { FC } from 'react';
import styled from 'styled-components';
import { GridActionButton } from './GridActionButtons';

const GridButtonContainer = styled.div`
	top: 18px;
	right: 40px;
	margin: auto;
	z-index: 5;
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;
interface IGridButtonProps {
	onOpenIntroPage: VoidFunction;
	onShuffleAlbum: VoidFunction;
}

export const GridButton: FC<IGridButtonProps> = ({
	onOpenIntroPage,
	onShuffleAlbum,
}) => {
	return (
		<GridButtonContainer>
			<GridActionButton
				icon={'shuffle'}
				text={'Random album'}
				onClick={onShuffleAlbum}
			/>
			<GridActionButton
				icon={'info'}
				text={'About the project'}
				onClick={onOpenIntroPage}
			/>
		</GridButtonContainer>
	);
};
