import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
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
	updateDimensions = () => {
		//console.log(window.innerHeight);
		console.log(window.innerWidth);
		this.setState({ width: window.innerWidth, height: window.innerHeight });
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

	renderIntro = () => {
		console.log(this.state.width);
		if (this.state.width < 1000) {
			return (
				<>
					<p>
						This project was about creating a prototyp for Arboreal.
						Arboreal is a startup company that with the help of
						AR-technology let's users measure trees.
					</p>
					<p>
						The product will be availible to both companies and for
						the usual layman. We were five people working on this
						project and the goal was to creat an interactive
						prototype that Arboreal could use as a guide for the
						building of the real application.
					</p>
				</>
			);
		} else {
			return (
				<p>
					This project was about creating a prototyp for Arboreal.
					Arboreal is a startup company that with the help of
					AR-technology let's users measure trees. The product will be
					availible to both companies and for the usual layman. We
					were five people working on this project and the goal was to
					creat an interactive prototype that Arboreal could use as a
					guide for the building of the real application.
				</p>
			);
		}
	};

	render() {
		return (
			<div className="projects-first-section">
				<div className="projects-intro-text">{this.renderIntro()}</div>
				{/* Ändra rowHeight beroende på skärmbrädd för att skala bilderna rätt */}
				<Gallery images={photos} rowHeight={this.setRowHeight()} />
			</div>
		);
	}
}

export default FirstSection;
