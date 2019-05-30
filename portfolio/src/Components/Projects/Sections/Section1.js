import React, { Component } from 'react';
import Intro from '../ProjectTexts/Intro';
import Gallery from 'react-grid-gallery';
import './Section1.css';

const photos = [
	{
		src: 'https://i.imgur.com/ju4aHwr.png',
		thumbnail: 'https://i.imgur.com/ju4aHwr.png',
		thumbnailWidth: 399,
		thumbnailHeight: 724
	},
	{
		src: 'https://i.imgur.com/WTlCeUY.jpg',
		thumbnail: 'https://i.imgur.com/WTlCeUY.jpg',
		thumbnailWidth: 4032,
		thumbnailHeight: 3024
	},
	{
		src: 'https://i.imgur.com/GEuV1k7.jpg',
		thumbnail: 'https://i.imgur.com/GEuV1k7.jpg',
		thumbnailWidth: 4032,
		thumbnailHeight: 3024
	},
	{
		src: 'https://i.imgur.com/wHM6xMo.jpg',
		thumbnail: 'https://i.imgur.com/wHM6xMo.jpg',
		thumbnailWidth: 2268,
		thumbnailHeight: 4032
	},
	{
		src: 'https://i.imgur.com/0W8GmHB.jpg',
		thumbnail: 'https://i.imgur.com/0W8GmHB.jpg',
		thumbnailWidth: 3024,
		thumbnailHeight: 4032
	},
	{
		src: 'https://i.imgur.com/tiddBPR.jpg',
		thumbnail: 'https://i.imgur.com/tiddBPR.jpg',
		thumbnailWidth: 1024,
		thumbnailHeight: 768
	}
];

export class Section1 extends Component {
	render() {
		return (
			<div className="projects-first-section">
				<Intro />
				<Gallery images={photos} />
			</div>
		);
	}
}

export default Section1;
