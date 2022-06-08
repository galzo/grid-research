import { FC, useCallback, useMemo } from 'react';
import { ButtonWrapper, FlatButtonWrapper } from './ActionButtons.styles';
import { IActionButtonProps } from './ActionButtons.types';
import shuffle from '../../../assets/shuffle.png';
import graphicOverview from '../../../assets/grapicOverview.png';
import close from '../../../assets/close.png';

export const ActionButton: FC<IActionButtonProps> = ({
	icon,
	onClick,
	isFlat,
}) => {
	const Icon = useMemo(() => {
		switch (icon) {
			case 'shuffle':
				return shuffle;
			case 'graphicOverview':
				return graphicOverview;
			case 'close':
			default:
				return close;
		}
	}, [icon]);

	if (isFlat) {
		return (
			<FlatButtonWrapper>
				<img src={Icon} alt={icon} onClick={onClick} />
			</FlatButtonWrapper>
		);
	}

	return (
		<ButtonWrapper>
			<img src={Icon} alt={icon} onClick={onClick} />
		</ButtonWrapper>
	);
};
