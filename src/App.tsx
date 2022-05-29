import React, { useState } from 'react';
import './App.css';
import { Grid } from './components/Grid/Grid';

export const App = () => {
	const [size, setSize] = useState(50);

	return (
		<div className="App">
			<Grid rows={30} columns={10} size={size} />
		</div>
	);
};
