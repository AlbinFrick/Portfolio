import React, { Component } from 'react';
import Navbar from './Nav/Nav';
import Section1 from './Sections/Section1';
import P5Wrapper from 'react-p5-wrapper';
import Wave from '../P5/WaveProjects/WaveProjects';
import './Projects.css';

export class Projcets extends Component {
	render() {
		return (
			<div className="projects">
				<Navbar />
				<Section1 />
				<P5Wrapper sketch={Wave} />
			</div>
		);
	}
}

export default Projcets;
