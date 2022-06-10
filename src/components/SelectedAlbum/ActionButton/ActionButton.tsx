import { FC, useCallback, useMemo } from 'react';
import { ButtonWrapper, FlatButtonWrapper } from './ActionButtons.styles';
import { IActionButtonProps } from './ActionButtons.types';
import shuffle from '../../../assets/shuffle.png';
import graphicOverview from '../../../assets/graphicOverview.png';
import graphicOverviewFull from '../../../assets/graphicOverviewFull.png'
import close from '../../../assets/close.png';

export const ActionButton: FC<IActionButtonProps> = ({
	icon,
	isSelected,
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
				return close;
				case 'graphicOverviewFull':
					default:
						return graphicOverviewFull;
		}
	}, [icon]);

	if (isFlat) {
		return (
			<FlatButtonWrapper onClick={onClick}>
				<img src={Icon} alt={icon}  />
			</FlatButtonWrapper>
		);
	}

	return (
		<ButtonWrapper isSelected={isSelected} onClick={onClick}>
			<img src={Icon} alt={icon}  />
		</ButtonWrapper>
	);
};
