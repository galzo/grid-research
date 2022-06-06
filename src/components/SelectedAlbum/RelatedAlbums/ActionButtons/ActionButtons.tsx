import { useDelayedRender } from '../../../../hooks/useDelayedRender';
import { ActionButton } from './ActionButton';
import { ButtonsContainer } from './ActionButtons.styles';

export const ActionButtons = () => {
	const { shouldRender } = useDelayedRender(1100);
	if (!shouldRender) return null;

	return (
		<ButtonsContainer>
			<ActionButton icon="shuffle" />
			<ActionButton icon="grapicOverview" />
		</ButtonsContainer>
	);
};
