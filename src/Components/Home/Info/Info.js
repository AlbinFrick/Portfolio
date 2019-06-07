import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-regular-svg-icons';
import './Info.css';
import './Info-min.css';

export class Info extends Component {
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
	renderArrow = () => {
		if (this.state.width < 1000) {
			return '^';
		} else {
			return '<';
		}
	};
	render() {
		return (
			<div className="info-container">
				<div className="info">
					<h1>Albin Frick</h1>
					<p>
						{this.renderArrow()} -- This is me(6 years ago, new
						picture coming soon) and I was born and raised in the
						city of Lycksele in the north of Sweden. I'm a happy and
						positive guy who likes adventure, specially if there's
						some adrenaline is involved.
					</p>
					<p>
						This site is unapologeticly all about me, my projects,
						interests, things I use every day. Down below are some
						links if you want read more about me and contact me.
					</p>
					{/* 	<p>
						I love computers in any shape or form. For the last tree
						years I've been studying for a master of engneering in
						interaction and design at the Univeristy of Umeå and I
						only have two years left!
					</p>
				 */}
					{/* 	<p>
						Jag heter Albin Frick och jag är född och uppvuxen i
						Lycksele. Jag är en glad och positiv kille som gillar
						äventyr, speciellt om lite adrenalin är involverat. Jag
						har även ett stort intresse för datorer. Jag bor nu på
						Mariehem i Umeå och studerar tredje året på
						Civilingenjörsprogrammet i interaktion och design vid
						Umeå Universitet.
					</p>
 */}
					<div className="links">
						<a
							href="https://www.linkedin.com/in/albin-frick-2713b9124/"
							target="_blank"
						>
							<FontAwesomeIcon icon={faLinkedin} /> Linkedin
						</a>
						<a href="mailto:albin_frick@hotmail.com" target="_top">
							<FontAwesomeIcon icon={faEnvelope} /> Email
						</a>
						<a href="https://github.com/AlbinFrick" target="_blank">
							<FontAwesomeIcon icon={faGithub} /> Github
						</a>
						<a href="/">
							<FontAwesomeIcon icon={faFile} /> Resumé
						</a>
					</div>
				</div>
				<nav>
					<ul>
						<NavLink to="/projects">
							<li>Projects</li>
						</NavLink>
						<NavLink to="/about">
							<li>More About Me</li>
						</NavLink>
						<NavLink to="/goals">
							<li>Configuration</li>
						</NavLink>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Info;
