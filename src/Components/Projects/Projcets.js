import React, { Component } from 'react';
import Navbar from './Nav/Nav';
import Drawer from './Nav/Drawer/Drawer';
import FirstSection from './Arboreal/FirstSection/FirstSection';
import Section from './Arboreal/Section/Section';
import P5Wrapper from 'react-p5-wrapper';
import Wave from '../P5/WaveProjects/WaveProjects';
import Gradient from '../Gradient/Gradient';
import './Projects.css';
const ArborealTexts = [
	"This project was part of the course Product development in media with the 'Design-Build-Test'-method. As the title suggest, the course is about learning to develop a product with the 'Design-Build-Test'-method. A requirement is that the project should help a company. Therefore we contacted a company, but it wasn't Arboreal in the beginging. We first spoke with the digtal agency Daresay. They then set up the collaberation between us and Arboreal. Then we were of!",
	'We worked very tight in the group and had alot of discussions. This was very usefull because neither of us new anythnig about measuring forest. To get an idea of what this product would look like each member of the project made a sketch of how to the navigation would work in the application.'
];
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
export class Projcets extends Component {
	state = {
		drawerOpen: false
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
			<div className="projects">
				<Navbar
					width={this.state.width}
					drawerClickHandler={this.drawerToggleClickhandler}
				/>
				<Drawer
					show={this.state.drawerOpen}
					close={this.drawerToggleClickhandler}
				/>
				<FirstSection photos={photos} />
				<Section
					text={ArborealTexts[0]}
					imageUrl="https://i.imgur.com/d4UCihx.jpg"
				/>
				<Section
					reverse={true}
					text={ArborealTexts[1]}
					imageUrl="https://i.imgur.com/ih6qq9C.jpg?1"
				/>
				<Gradient where="PROJECTS" />
				<P5Wrapper sketch={Wave} />
			</div>
		);
	}
}

export default Projcets;
