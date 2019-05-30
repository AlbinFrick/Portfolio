import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Wave from '../P5/WaveHome/WaveHome';
import Image from '../Image/Image';
import Info from '../Info/Info';
import './Home.css';

function Home() {
	return (
		<div className="Home">
			<P5Wrapper sketch={Wave} />
			<Image />
			<Info />
		</div>
	);
}

export default Home;
