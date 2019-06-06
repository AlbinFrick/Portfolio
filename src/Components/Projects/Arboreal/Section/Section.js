import React, { Component } from 'react';

import './Section.css';

export class Section extends Component {
	render() {
		return (
			<div className="section-container">
				<div className="section-text">
					<p>{this.props.text}</p>
				</div>
				<div className="section-image">
					<img src={this.props.imageUrl} />
				</div>
			</div>
		);
	}
}

export default Section;
