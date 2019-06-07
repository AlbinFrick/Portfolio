import React, { Component } from 'react';

import './Section.css';
import './Section-min.css';

let sectionClasses = 'section-container';
export class Section extends Component {
	getSectionClasses = () => {
		return this.props.reverse
			? 'section-container reverse'
			: 'section-container';
	};
	render() {
		return (
			<div className={this.getSectionClasses()}>
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
