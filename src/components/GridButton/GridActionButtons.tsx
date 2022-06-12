import { FC, useMemo } from 'react';
import shuffle from '../../assets/shuffleBlack.png';
import home from '../../assets/home.png';
import { ButtonWrapper, IconWrapper } from './GridActionButton.styles';


export type GridActionButtonIcon = 'shuffle' | 'home';

export interface IGridActionButtonProps {
	icon: GridActionButtonIcon;
  text: string;
	onClick: () => void;
}


export const GridActionButton: FC<IGridActionButtonProps> = ({
	icon,
  text,
	onClick,
}) => {
	const Icon = useMemo(() => {
		switch (icon) {
			case 'shuffle':
				return shuffle;
			case 'home':
				return home;
			default:
				return shuffle;
		}
	}, [icon]);

	return (
		<ButtonWrapper>
      <span>{text}</span>
			<IconWrapper>
        <img src={Icon} alt={icon} onClick={onClick} />
      </IconWrapper>
		</ButtonWrapper>
	);
};
