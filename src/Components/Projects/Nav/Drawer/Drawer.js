import React from 'react';
import { NavLink } from 'react-router-dom';
import CloseButton from './CloseButton';

import './Drawer.css';

const Drawer = props => {
	return (
		<nav className="drawer">
			<CloseButton />
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
			</ul>
		</nav>
	);
};

export default Drawer;
