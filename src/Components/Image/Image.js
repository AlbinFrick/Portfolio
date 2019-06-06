import React, { Component } from 'react';
import Proffe from '../../Resources/proffe.jpeg';
import './Image.css';
import './Image-min.css';

export class Image extends Component {
	render() {
		return (
			<div className="image">
				<img alt="Profile" src={Proffe} />
			</div>
		);
	}
}

export default Image;
