import { FC, useCallback } from 'react';
import { useDelayedRender } from '../../../../hooks/useDelayedRender';
import { ActionButton } from './ActionButton';
import { ButtonsContainer } from './ActionButtons.styles';
import { IActionButtonsProps, ActionType } from './ActionButtons.types';

export const ActionButtons: FC<IActionButtonsProps> = ({ onClickShuffle }) => {
	const { shouldRender } = useDelayedRender(1100);

	const handleClick = useCallback(
		(action: ActionType) => {
			if (action === 'shuffle') {
				onClickShuffle();
				return;
			}

			alert('graphic overview here!');
		},
		[onClickShuffle],
	);

	if (!shouldRender) return null;

	return (
		<ButtonsContainer>
			<ActionButton action="shuffle" onClick={handleClick} />
			<ActionButton action="graphicOverview" onClick={handleClick} />
		</ButtonsContainer>
	);
};
