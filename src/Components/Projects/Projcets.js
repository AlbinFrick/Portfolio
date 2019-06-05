import React, { Component } from 'react';
import Navbar from './Nav/Nav';
import FirstSection from './FirstSection/FirstSection';
import P5Wrapper from 'react-p5-wrapper';
import Wave from '../P5/WaveProjects/WaveProjects';
import './Projects.css';

export class Projcets extends Component {
	render() {
		return (
			<div className="projects">
				<Navbar />
				<FirstSection />
				<P5Wrapper sketch={Wave} />
			</div>
		);
	}
}

export default Projcets;
