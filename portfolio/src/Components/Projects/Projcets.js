import React, { Component } from 'react';
import Navbar from './Nav/Nav';
import Intro from './ProjectTexts/Intro';
import Gallery from 'react-grid-gallery';
import Arboreal from '../../Resources/HomePageArboreal.png';
import './Projects.css';

const photos = [
	{
		src:
			'https://cdn1.imggmi.com/uploads/2019/5/25/3a2ea426250d13883b3f36b0070a30bb-full.png',
		thumbnail:
			'https://cdn1.imggmi.com/uploads/2019/5/25/3a2ea426250d13883b3f36b0070a30bb-full.png',
		thumbnailWidth: 399,
		thumbnailHeight: 724
	}
];

export class Projcets extends Component {
	render() {
		return (
			<div className="projcets">
				<Navbar />
				<div className="projects-first-section">
					<Intro />
					<Gallery images={photos} />
				</div>
			</div>
		);
	}
}

export default Projcets;
