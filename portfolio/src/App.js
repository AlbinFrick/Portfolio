import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Sketch from './Components/Sketch/Sketch';
import './App.css';

function App() {
	return (
		<div className="App">
			<P5Wrapper sketch={Sketch} />
			{/* <Image /> */}
			{/* <Info /> */}
		</div>
	);
}

export default App;
