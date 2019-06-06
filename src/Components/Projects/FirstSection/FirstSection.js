import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import Intro from './Intro/Intro';
import './FirstSection.css';
import './FirstSection-min.css';

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
				<Gallery images={photos} rowHeight={this.setRowHeight()} />
			</div>
		);
	}
}

export default FirstSection;
