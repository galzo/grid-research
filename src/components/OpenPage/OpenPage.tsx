import React, { FC, useState } from 'react';
import {
	OverlayBackground,
	OverlayWrapper,
} from '../SelectedAlbum/SelectedAlbum.styles';
import {
	ButtonLearnMore,
	Gifs,
	ButtonWrapper,
	Subtitle,
	OpenPageContainer,
	GifImage,
	BoldTitle,
	GifContainer,
	BoldSubtitle,
	FindGifImage,
} from './OpenPage.styles';
import identify from '../../assets/Identify.gif';
import visualize from '../../assets/Visualize.gif';
import find from '../../assets/find.gif';

interface IIntroductionPageProps {
	isOpened: boolean;
	onClose: VoidFunction;
}

export const IntroductionPage: FC<IIntroductionPageProps> = ({
	isOpened,
	onClose,
}) => {
	const handleOpenWebflow = () => {
		window.open('https://syncover.webflow.io/', '_blank');
	};

	if (!isOpened) {
		return null;
	}

	return (
		<OverlayWrapper>
			<OpenPageContainer>
				<BoldTitle>
					<b>Syncover</b> a new way to explore the designs of music
					album covers
				</BoldTitle>
				<Gifs>
					<GifContainer>
						<GifImage src={identify} alt="identify" />
						<Subtitle>
							<b>Identify</b> the visual traits of the covers
						</Subtitle>
					</GifContainer>
					<GifContainer>
						<GifImage src={visualize} alt="visualize" />
						<Subtitle>
							<b>Visualize</b> the traits by a graphic vector
						</Subtitle>
					</GifContainer>
					<GifContainer>
						<FindGifImage src={find} alt="find" />
						<Subtitle>
							<b>Find</b> similar cover designs based on their
							traits
						</Subtitle>
					</GifContainer>
				</Gifs>
				<ButtonWrapper onClick={onClose}>START EXPLORING</ButtonWrapper>
				<ButtonLearnMore onClick={handleOpenWebflow}>
					LEARN MORE{' '}
				</ButtonLearnMore>
			</OpenPageContainer>
			<OverlayBackground />
		</OverlayWrapper>
	);
};
