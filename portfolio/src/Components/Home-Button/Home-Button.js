import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home-Button.css';

export default function Hbutton() {
	return (
		<NavLink className="home-button" to="/">
			Home
		</NavLink>
	);
}
