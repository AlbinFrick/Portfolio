import React from 'react';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projcets';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Route path="/" exact component={Home} />
			<Route path="/projects" component={Projects} />
		</BrowserRouter>
	);
}

export default App;
