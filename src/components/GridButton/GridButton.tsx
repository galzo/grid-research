import React, { FC } from 'react';
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
interface IGridButtonProps {
  openPageHandler: () => void;
}

export const GridButton: FC<IGridButtonProps> =({openPageHandler})=>{
  return(
    <GridButtonContainer>
      <GridActionButton icon={'shuffle'} text={'Random album'} onClick={()=>"void" }/>
      <GridActionButton icon={'home'} text={'home'} onClick={openPageHandler} />
    </GridButtonContainer>
  )
}