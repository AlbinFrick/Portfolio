import React from 'react';
import { NavLink } from 'react-router-dom';
import Hbutton from '../../Home-Button/Home-Button';
import DrawerToggleButton from './Drawer/DrawerToggleButton';
import './Nav.css';
import './Nav-min.css';
function renderNavigation() {
	if (window.innerWidth < 1000) {
		return <DrawerToggleButton />;
	} else {
		return (
			<>
				<NavLink className="project-link">Arboreal</NavLink>
				<NavLink className="project-link">Typer</NavLink>
				<Hbutton />
			</>
		);
	}
}
export default function Nav() {
	return (
		<nav className="projects-nav">
			<h1>Consulting for Arboreal</h1>
			<div className="spacer" />
			{renderNavigation()}
		</nav>
	);
}
