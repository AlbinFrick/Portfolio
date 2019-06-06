import React, { Component } from 'react';
import Navbar from './Nav/Nav';
import Drawer from './Nav/Drawer/Drawer';
import FirstSection from './Arboreal/FirstSection/FirstSection';
import SecondSection from './Arboreal/Section/Section';
import P5Wrapper from 'react-p5-wrapper';
import Wave from '../P5/WaveProjects/WaveProjects';
import './Projects.css';
const ArborealTexts = [
	"This project was part of the course Product development in media with the 'Design-Build-Test'-method. As the title suggest, the course is about learning to develop a product with the 'Design-Build-Test'-method. A requirement is that the project should help a company. Therefore we contacted a company, but it wasn't Arboreal in the beginging. We first spoke with the digtal agency Daresay. They then set up the collaberation between us and Arboreal. Then we were of!"
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
				<FirstSection />
				<SecondSection
					text={ArborealTexts[0]}
					imageUrl="https://i.imgur.com/d4UCihx.jpg"
				/>
				<P5Wrapper sketch={Wave} />
			</div>
		);
	}
}

export default Projcets;
