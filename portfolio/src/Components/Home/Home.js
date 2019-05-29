import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Sketch from '../Sketch/Sketch';
import Image from '../Image/Image';
import Info from '../Info/Info';
import './Home.css';

function Home() {
	return (
		<div className="Home">
			<P5Wrapper sketch={Sketch} />
			<Image />
			<Info />
		</div>
	);
}

export default Home;
