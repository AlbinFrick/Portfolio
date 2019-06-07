import React from 'react';
import { NavLink } from 'react-router-dom';
import DrawerToggleButton from './Drawer/DrawerToggleButton';

import './Navbar.css';
function renderNavigation(props) {
	if (props.width < 1000) {
		return <DrawerToggleButton click={props.drawerClickHandler} />;
	} else {
		return (
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/projects">Projects</NavLink>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
				<li>
					<NavLink to="/config">Configuration</NavLink>
				</li>
			</ul>
		);
	}
}
const Navbar = props => {
	let heading;
	if (props.page == 'ABOUT') {
		heading = 'About me';
	}
	if (props.page == 'CONFIG') {
		heading = 'Configuration';
	}

	return (
		<nav className="default-navigation">
			<h1>{props.heading}</h1>
			<div className="spacer" />
			{renderNavigation(props)}
			<div className="line" />
		</nav>
	);
};

export default Navbar;
