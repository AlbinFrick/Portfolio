import React from 'react';
import { NavLink } from 'react-router-dom';
import Hbutton from '../../Home-Button/Home-Button';
import './Nav.css';
import './Nav-min.css';

export default function Nav() {
	return (
		<nav className="projects-nav">
			<Hbutton />
			<NavLink className="project-link">Typer</NavLink>
			<NavLink className="project-link">Arboreal</NavLink>
			<h1>Consulting for Arboreal</h1>
		</nav>
	);
}
