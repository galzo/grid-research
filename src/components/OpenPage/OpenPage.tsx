import React, { useState } from 'react';
import { OverlayBackground, OverlayWrapper } from '../SelectedAlbum/SelectedAlbum.styles';
import {ButtonWrapper, Subtitle, OpenPageContainer, Title, GifContainer, GifImage, BoldTitle, BoldSubtitle, FindGifImage } from './OpenPage.styles';
import identify from '../../assets/Identify.gif';
import visualize from '../../assets/Visualize.gif';
import find from '../../assets/find.gif';

export const OpenPage=()=>{
  const [showOpenPage, setShowOpenPage] = useState<boolean>(true);

  if (!showOpenPage) return null;
  
  return(
    <OverlayWrapper>
   		<OpenPageContainer>
        <Title>Syncover</Title>
        <BoldTitle>explore the designs of music album covers</BoldTitle>
        <GifContainer>
            <GifImage src={identify} alt="identify" />
            <BoldSubtitle>Identify</BoldSubtitle>
            <Subtitle>the visual traits of the covers</Subtitle>
        </GifContainer>
        <GifContainer>
            <GifImage src={visualize} alt="visualize" />
            <BoldSubtitle>Visualize</BoldSubtitle>
            <Subtitle>the traits by a graphic vector</Subtitle>
        </GifContainer>
        <GifContainer>
            <FindGifImage src={find} alt="find" />
            <BoldSubtitle>Find</BoldSubtitle>
            <Subtitle>similar cover designs based on their traits</Subtitle>
        </GifContainer>
        <ButtonWrapper onClick={()=>{setShowOpenPage(false)}}>START</ButtonWrapper>
		  </OpenPageContainer> 
    <OverlayBackground/>  
    </OverlayWrapper>
  );
};