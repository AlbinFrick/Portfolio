import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import Intro from './Intro/Intro';
import './FirstSection.css';
import './FirstSection-min.css';

export class FirstSection extends Component {
	state = {
		width: 0
	};
	updateDimensions = () => {
		this.setState({
			width: document.body.clientWidth,
			height: window.innerHeight
		});
	};

	componentWillMount() {
		this.updateDimensions();
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}

	setRowHeight = () => {
		if (this.state.width < 1000) {
			return 110;
		} else {
			return 250;
		}
	};

	render() {
		return (
			<div className="projects-first-section">
				<Intro width={this.state.width} />
				{/* Ändra rowHeight beroende på skärmbrädd för att skala bilderna rätt */}
				<Gallery
					images={this.props.photos}
					rowHeight={this.setRowHeight()}
				/>
			</div>
		);
	}
}

export default FirstSection;
