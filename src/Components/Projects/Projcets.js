import React, { Component } from 'react';
import Navbar from './Nav/Nav';
import Drawer from './Nav/Drawer/Drawer';
import FirstSection from './FirstSection/FirstSection';
import P5Wrapper from 'react-p5-wrapper';
import Wave from '../P5/WaveProjects/WaveProjects';
import './Projects.css';

export class Projcets extends Component {
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
	render() {
		return (
			<div className="projects">
				<Navbar width={this.state.width} />
				<Drawer />
				<FirstSection />
				<P5Wrapper sketch={Wave} />
			</div>
		);
	}
}

export default Projcets;
