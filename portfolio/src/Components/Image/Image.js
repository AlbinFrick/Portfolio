import React, { Component } from 'react';
import Proffe from '../../Resources/proffe.jpeg';
import './Image.css';

export class Image extends Component {
	render() {
		return (
			<div className="image">
				<img src={Proffe} />
			</div>
		);
	}
}

export default Image;
