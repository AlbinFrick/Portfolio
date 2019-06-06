import React from 'react';
import { NavLink } from 'react-router-dom';
import Hbutton from '../../Home-Button/Home-Button';
import DrawerToggleButton from './Drawer/DrawerToggleButton';
import './Nav.css';
import './Nav-min.css';
function renderNavigation(props) {
	if (props.width < 1000) {
		return <DrawerToggleButton />;
	} else {
		return (
			<>
				<NavLink to="/projects/typer" className="project-link">
					Typer
				</NavLink>
				<NavLink to="/projects/" className="project-link">
					Arboreal
				</NavLink>
				<Hbutton />
			</>
		);
	}
}
export default function Nav(props) {
	return (
		<nav className="projects-nav">
			<h1>Consulting for Arboreal</h1>
			<div className="spacer" />
			{renderNavigation(props)}
		</nav>
	);
}
