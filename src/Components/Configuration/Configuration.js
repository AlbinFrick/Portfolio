import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

export class Configuration extends Component {
	render() {
		return (
			<div className="config">
				<Navbar page="CONFIG" />
			</div>
		);
	}
}

export default Configuration;
