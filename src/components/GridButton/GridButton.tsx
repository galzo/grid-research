import React from 'react';
import styled from 'styled-components';
import { GridActionButton } from './GridActionButtons';


const GridButtonContainer = styled.div`
	top: 18px;
  right: 40px;
	margin: auto;
  z-index:5; 
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;


export const GridButton=()=>{
  return(
    <GridButtonContainer>
      <GridActionButton icon={'shuffle'} text={'Random album'} onClick={() => "void" }/>
      <GridActionButton icon={'learnMore'} text={'Learn more'} onClick={() => "void" }/>
    </GridButtonContainer>
  )
}