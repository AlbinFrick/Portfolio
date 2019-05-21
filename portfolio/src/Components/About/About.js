import React, { Component } from 'react';
import './About.css';

export class About extends Component {
	render() {
		return (
			<div className="about">
				<div className="info">
					<h1>Albin Frick</h1>
					<p>
						Jag heter Albin Frick och jag är född och uppvuxen i
						Lycksele. Jag är en glad och positiv kille som gillar
						äventyr, speciellt om lite adrenalin är involverat. Jag
						har även ett stort intresse för datorer. Jag bor nu på
						Mariehem i Umeå och studerar tredje året på
						Civilingenjörsprogrammet i interaktion och design vid
						Umeå Universitet.
					</p>
				</div>
				<div className="menu" />
			</div>
		);
	}
}

export default About;
