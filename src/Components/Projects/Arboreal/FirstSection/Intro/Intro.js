import React, { Component } from 'react';
import './Intro.css';
import './Intro-min.css';

export class Intro extends Component {
	renderIntro = () => {
		if (this.props.width < 1000) {
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
		return <div className="projects-intro-text">{this.renderIntro()}</div>;
	}
}

export default Intro;
