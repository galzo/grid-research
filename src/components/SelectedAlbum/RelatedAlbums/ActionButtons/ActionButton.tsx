import { FC, useCallback, useMemo } from 'react';
import { ButtonWrapper } from './ActionButtons.styles';
import { IActionButtonProps } from './ActionButtons.types';
import shuffle from '../../../../assets/shuffle.png';
import grapihcOverview from '../../../../assets/grapicOverview.png';

export const ActionButton: FC<IActionButtonProps> = ({ action, onClick }) => {
	const Icon = useMemo(() => {
		if (action === 'shuffle') {
			return shuffle;
		}

		return grapihcOverview;
	}, [action]);

	const handleClick = useCallback(() => {
		onClick(action);
	}, [action, onClick]);

	return (
		<ButtonWrapper>
			<img src={Icon} alt="shuffle" onClick={handleClick} />
		</ButtonWrapper>
	);
};
