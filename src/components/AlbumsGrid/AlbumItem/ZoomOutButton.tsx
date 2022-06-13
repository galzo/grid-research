import React, { FC, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import neighborsButton from '../../../assets/NeighborsButton.png';

interface IZoomOutButtonProps {
	onClick: VoidFunction;
	shouldRender: boolean;
}

const ButtonWrapper = styled.img`
	height: 13px;
	width: 42px;
	position: absolute;
	box-sizing: border-box;
	background: white;
	z-index: 8;
	user-select: none;
	color: black;
	font-size: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	left: -1px;
	right: -1px;
	top: 42px;
	-webkit-box-shadow: 0 3px 14px -2px rgba(0, 0, 0, 0.5);
	box-shadow: 0 3px 14px -2px rgba(0, 0, 0, 0.5);
	transition: all 0.19s;

	&:hover {
		background: rgba(230, 230, 235, 0.1);
		cursor: pointer;
	}
`;

export const ZoomOutButton: FC<IZoomOutButtonProps> = ({
	onClick,
	shouldRender,
}) => {

	const handleClick = useCallback(
		(event: any) => {
			event.preventDefault();
			event.stopPropagation();
			onClick();
		},
		[onClick],
	);

	if (!shouldRender) {
		return null;
	}

	return (	
	<ButtonWrapper src={neighborsButton} onClick={handleClick}>
	</ButtonWrapper>
	);
};
