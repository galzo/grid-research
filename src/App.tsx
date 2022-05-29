import React, { useEffect, useState } from 'react';
import Spotify from 'react-spotify-embed';
import './App.css';
import { Grid } from './components/Grid/Grid';

export const App = () => {
	return (
		<div className="App">
			<Grid rows={100} columns={10} size={50} />
		</div>
	);
};
