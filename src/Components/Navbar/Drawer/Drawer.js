import React from 'react';
import { NavLink } from 'react-router-dom';
import CloseButton from './CloseButton';

import './Drawer.css';

const Drawer = props => {
	let drawerClasses = 'drawer';
	if (props.show) {
		drawerClasses = 'drawer open';
	}
	return (
		<nav className={drawerClasses}>
			<CloseButton close={props.close} />
			<ul>
				<li>
					<NavLink to="/projects/">Arboreal</NavLink>
				</li>
				<li>
					<NavLink to="/projects/typer">Typer</NavLink>
				</li>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/about">About Me</NavLink>
				</li>
				<li>
					<NavLink to="/config">Configuration</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Drawer;
