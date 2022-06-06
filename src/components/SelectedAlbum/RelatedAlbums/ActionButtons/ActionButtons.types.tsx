export type ActionType = 'shuffle' | 'graphicOverview';

export interface IActionButtonProps {
	action: ActionType;
	onClick: (action: ActionType) => void;
}

export interface IActionButtonsProps {
	onClickShuffle: () => void;
}
