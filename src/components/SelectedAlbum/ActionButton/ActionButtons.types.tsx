export type ActionButtonIcon = 'shuffle' | 'graphicOverview' | 'close';

export interface IActionButtonProps {
	icon: ActionButtonIcon;
	onClick: () => void;
	isFlat?: boolean;
}
