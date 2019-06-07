import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

export class Configuration extends Component {
	render() {
		return (
			<div className="config">
				<Navbar heading="My Configurations" />
			</div>
		);
	}
}

export default Configuration;
