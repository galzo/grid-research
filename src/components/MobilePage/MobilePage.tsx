import { FC } from 'react';
import { OverlayWrapper, BoldTitle, ButtonWrapper, MobilePageContainer } from './MobilePage.styles';

export const MobilePage: FC = () => {
	const handleOpenWebflow = () => {
		window.open('https://syncover.webflow.io/', '_blank');
	};

	return (
		<OverlayWrapper>
			<MobilePageContainer>
				<BoldTitle>
					<b>Syncover</b> is not supported on mobile
					<br/> open on desktop to explore
				</BoldTitle>
				<ButtonWrapper onClick={handleOpenWebflow}>
					LEARN MORE{' '}
				</ButtonWrapper>
			</MobilePageContainer>
		</OverlayWrapper>
	);
};
