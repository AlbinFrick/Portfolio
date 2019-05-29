import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Info.css';
import './Info-min.css';

export class Info extends Component {
	renderIntroText = () => {
		if (window.innerWidth < 1000) {
			return (
				<>
					<p>
						I'm born and raised in the city of Lycksele in the north
						of Sweden. I'm a happy and positive guy who likes
						adventure, specially if there's some adrenaline is
						involved.
					</p>
					<br />
					<p>
						I also have a big interest for computers. For the last
						three years i've lived in Umeå where i study to for my
						masters of science in engineering of interaction and
						design at Umeå Universitet.
					</p>
				</>
			);
		} else {
			return (
				<p>
					I'm born and raised in the city of Lycksele in the north of
					Sweden. I'm a happy and positive guy who likes adventure,
					specially if there's some adrenaline is involved. I also
					have a big interest for computers. For the last three years
					i've lived in Umeå where i study to for my masters of
					science in engineering of interaction and design at Umeå
					Universitet.
				</p>
			);
		}
	};
	render() {
		return (
			<div className="info-container">
				<div className="info">
					<h1>Albin Frick</h1>
					{this.renderIntroText()}
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
							<li>Personal Goals</li>
						</NavLink>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Info;
