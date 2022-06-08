import { FC, useCallback, useMemo } from 'react';
import { ButtonWrapper } from './ActionButtons.styles';
import { IActionButtonProps } from './ActionButtons.types';
import shuffle from '../../../assets/shuffle.png';
import graphicOverview from '../../../assets/grapicOverview.png';

export const ActionButton: FC<IActionButtonProps> = ({ icon, onClick }) => {
	const Icon = useMemo(() => {
		if (icon === 'shuffle') {
			return shuffle;
		}

		return graphicOverview;
	}, [icon]);

	return (
		<ButtonWrapper>
			<img src={Icon} alt="shuffle" onClick={onClick} />
		</ButtonWrapper>
	);
};
