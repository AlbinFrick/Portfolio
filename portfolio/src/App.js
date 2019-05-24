import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Home from './Components/Home/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Route path="/" exact component={Home} />
		</BrowserRouter>
	);
}

export default App;
