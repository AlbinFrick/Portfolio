import React from 'react';

import './CloseButton.css';

const CloseButton = props => (
	<button className="closeButton" onClick={props.close}>
		<div className="closeButtonLine" />
		<div className="closeButtonLine" />
	</button>
);

export default CloseButton;
