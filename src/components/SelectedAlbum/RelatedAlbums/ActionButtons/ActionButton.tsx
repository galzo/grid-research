import { FC, useMemo } from 'react';
import { ButtonWrapper } from './ActionButtons.styles';
import { IActionButtonProps } from './ActionButtons.types';
import shuffle from '../../../../assets/shuffle.png';
import grapihcOverview from '../../../../assets/grapicOverview.png';

export const ActionButton: FC<IActionButtonProps> = ({ icon }) => {
	const Icon = useMemo(() => {
		if (icon === 'shuffle') {
			return shuffle;
		}

		return grapihcOverview;
	}, [icon]);

	return (
		<ButtonWrapper>
			<img src={Icon} alt="shuffle" />
		</ButtonWrapper>
	);
};
