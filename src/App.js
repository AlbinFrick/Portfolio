import React from 'react';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projcets';
import About from './Components/About/About';
import Configuration from './Components/Configuration/Configuration';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<HashRouter>
			<Route path="/" exact component={Home} />
			<Route path="/projects" component={Projects} />
			<Route path="/about" component={About} />
			<Route path="/config" component={Configuration} />
		</HashRouter>
	);
}

export default App;
