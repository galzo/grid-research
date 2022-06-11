import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import { FadeInDiv } from '../../Base/FadeInDiv';

interface IZoomOutButtonProps {
	onClick: VoidFunction;
	shouldRender: boolean;
}

export const ButtonWrapper = styled(FadeInDiv)`
	transition: all 0.2s;
	height: 10px;
	position: absolute;
	box-sizing: border-box;
	background: white;
	z-index: 8;
	user-select: none;
	color: black;
	font-size: 4px;
	font-family: 'Gotham-medium';
	display: flex;
	padding-top:2px;
	justify-content: center;
	align-items: center;
	-webkit-box-shadow: 0px 3px 14px 0 rgba(0, 0, 0, 1);
	box-shadow: 0px 3px 14px 0 rgba(0, 0, 0, 1);
	left: -1px;
	right: -1px;
	top: 32px;

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

	return <ButtonWrapper onClick={handleClick}>{'See Neighbors'}</ButtonWrapper>;
};
