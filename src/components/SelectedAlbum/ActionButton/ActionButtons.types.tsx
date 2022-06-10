export type ActionButtonIcon = 'shuffle' | 'graphicOverview'| 'graphicOverviewFull' | 'close';

export interface IActionButtonProps {
	icon: ActionButtonIcon;
	isSelected: boolean;
	onClick: () => void;
	isFlat?: boolean;
}
