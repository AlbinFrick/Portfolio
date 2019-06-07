import React from 'react';

import './Gradient.css';
import './Gradient-min.css';

const Gradient = props => {
	if (props.where == 'HOME') {
		return <div className="home-gradient" />;
	} else {
		return <div className="projects-gradient" />;
	}
};

export default Gradient;
