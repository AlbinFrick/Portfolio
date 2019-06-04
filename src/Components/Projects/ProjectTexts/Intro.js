import React from 'react';
import './Intro-min.css';
import './Intro.css';

function Intro(props) {
	function renderText() {
		console.log(props);
		if (props.windowWidth < 1000) {
			return (
				<p>
					This project was about creating a prototyp for Arboreal.
					Arboreal is a startup company that with the help of
					AR-technology let's users measure trees.
					<br />
					The product will be availible to both companies and for the
					usual layman. We were five people working on this project
					and the goal was to creat an interactive prototype that
					Arboreal could use as a guide for the building of the real
					application.
				</p>
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
	}
	return <div className="projects-intro-text">{renderText()}</div>;
}

export default Intro;
