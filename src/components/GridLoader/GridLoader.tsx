import { FC } from 'react';
import loader from '../../assets/loader.gif';
import { GridLoaderWrapper, LoaderImage } from './GridLoader.styles';

export const GridLoader: FC = () => {
	return (
		<GridLoaderWrapper>
			<LoaderImage src={loader} alt="loader" />
		</GridLoaderWrapper>
	);
};
