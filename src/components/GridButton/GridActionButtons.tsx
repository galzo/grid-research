import { FC, useMemo } from 'react';
import shuffle from '../../assets/shuffleBlack.png';
import info from '../../assets/info.png';
import { ButtonWrapper, IconWrapper } from './GridActionButton.styles';


export type GridActionButtonIcon = 'shuffle' | 'info';

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
			case 'info':
				return info;
			default:
				return shuffle;
		}
	}, [icon]);

	return (
		<ButtonWrapper onClick={onClick}>
      <span>{text}</span>
			<IconWrapper>
        <img src={Icon} alt={icon}/>
      </IconWrapper>
		</ButtonWrapper>
	);
};
