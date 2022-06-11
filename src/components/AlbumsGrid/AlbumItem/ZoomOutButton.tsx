import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import { FadeInDiv } from '../../Base/FadeInDiv';

interface IZoomOutButtonProps {
	onClick: VoidFunction;
	shouldRender: boolean;
}

export const ButtonWrapper = styled.div`
	height: 10px;
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
	transition: all 0.2s;

	&:hover {
		background: rgba(230, 230, 235);
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

	return <ButtonWrapper onClick={handleClick}>{'click me'}</ButtonWrapper>;
};
