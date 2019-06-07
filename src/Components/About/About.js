import React, { Component } from 'react';

import FirstSection from '../Projects/Arboreal/FirstSection/FirstSection';
import Navbar from '../Navbar/Navbar';
import Drawer from '../Navbar/Drawer/Drawer';

const photos = [
	{
		src: 'https://i.imgur.com/UnRI5Na.jpg',
		thumbnail: 'https://i.imgur.com/UnRI5Na.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 1136
	},
	{
		src: 'https://i.imgur.com/BdJuzIh.jpg',
		thumbnail: 'https://i.imgur.com/BdJuzIh.jpg',
		thumbnailWidth: 1200,
		thumbnailHeight: 1600
	},
	{
		src: 'https://i.imgur.com/FQm1cpc.jpg',
		thumbnail: 'https://i.imgur.com/FQm1cpc.jpg',
		thumbnailWidth: 1200,
		thumbnailHeight: 1600
	},
	{
		src: 'https://i.imgur.com/ZxXRknv.jpg',
		thumbnail: 'https://i.imgur.com/ZxXRknv.jpg',
		thumbnailWidth: 1200,
		thumbnailHeight: 1600
	},
	{
		src: 'https://i.imgur.com/YjGBcuF.jpg',
		thumbnail: 'https://i.imgur.com/YjGBcuF.jpg',
		thumbnailWidth: 1200,
		thumbnailHeight: 1600
	}
];

const text =
	"I love computers in any shape or form and for the last tree years I've been studying for" +
	' a master of engneering in interaction and design at the Univeristy of Umeå and I only ' +
	'have two years left! My family is a big part of my life and Lycksele is where I go when I need' +
	'to relax. More pictures and info will come soon!';
export class About extends Component {
	state = {
		drawerOpen: false,
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

	drawerToggleClickhandler = () => {
		this.setState(prevState => {
			return { drawerOpen: !prevState.drawerOpen };
		});
	};
	render() {
		return (
			<div className="about">
				<Navbar
					heading="About me"
					width={this.state.width}
					drawerClickHandler={this.drawerToggleClickhandler}
				/>
				<Drawer
					show={this.state.drawerOpen}
					close={this.drawerToggleClickhandler}
				/>
				<FirstSection photos={photos} text={text} page="ABOUT" />
			</div>
		);
	}
}

export default About;
