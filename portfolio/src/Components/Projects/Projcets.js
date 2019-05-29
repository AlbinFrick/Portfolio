import React, { Component } from 'react';
import Navbar from './Nav/Nav';
import Intro from './ProjectTexts/Intro';
import Gallery from 'react-grid-gallery';
import './Projects.css';

const photos = [
	{
		src:
			'https://cdn1.imggmi.com/uploads/2019/5/25/3a2ea426250d13883b3f36b0070a30bb-full.png',
		thumbnail:
			'https://cdn1.imggmi.com/uploads/2019/5/25/3a2ea426250d13883b3f36b0070a30bb-full.png',
		thumbnailWidth: 399,
		thumbnailHeight: 724
	},
	{
		src:
			'https://cdn1.imggmi.com/uploads/2019/5/29/d6edcbba6839789f603d9c40f4847c77-full.jpg',
		thumbnail:
			'https://cdn1.imggmi.com/uploads/2019/5/29/d6edcbba6839789f603d9c40f4847c77-full.jpg',
		thumbnailWidth: 768,
		thumbnailHeight: 1024
	}
];

export class Projcets extends Component {
	render() {
		return (
			<div className="projects">
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
