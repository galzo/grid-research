import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import { FadeInDiv } from '../../Base/FadeInDiv';

interface IZoomOutButtonProps {
	onClick: VoidFunction;
	shouldRender: boolean;
}

export const ButtonWrapper = styled(FadeInDiv)`
	height: 10px;
	width: 15px;
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

	&:hover {
		background: rgba(255, 255, 255, 0.65);
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
