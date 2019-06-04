import React from 'react';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projcets';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<HashRouter>
			<Route path="/" exact component={Home} />
			<Route path="/projects" component={Projects} />
		</HashRouter>
	);
}

export default App;
