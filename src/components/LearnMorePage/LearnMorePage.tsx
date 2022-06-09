import React, { useState } from 'react';

export const LearnMorePage=()=>{
  const [showLearnMorePage, setLearnMorePage] = useState<boolean>(false);

  if (!showLearnMorePage) return null;
  return(
    <h2>leran more</h2>
  )
}