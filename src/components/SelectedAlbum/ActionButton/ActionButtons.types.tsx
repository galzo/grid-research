export type ActionButtonIcon = 'shuffle' | 'graphicOverview';

export interface IActionButtonProps {
	icon: ActionButtonIcon;
	onClick: () => void;
}
