import React from 'react';

import './DrawerToggleButton.css';

const drawerToggleButton = props => (
	<button className="toggleButton" onClick={props.click}>
		<div className="menuButtonLine" />
		<div className="menuButtonLine" />
		<div className="menuButtonLine" />
	</button>
);

export default drawerToggleButton;
