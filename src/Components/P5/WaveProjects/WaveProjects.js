import './WaveProjects.css';

export default function sketch(p) {
	let points = [];
	let pointSize = 50;
	let y = p.windowHeight - p.windowHeight / 4;
	let yWindowOffset = y / 5;
	let xoff = 0;
	let yoff = 0;
	let inc = 0.02;
	let yspeed = 0.001;

	p.windowResized = function() {
		p.resizeCanvas(p.windowWidth - 18, y + 200);
		y = p.windowHeight - p.windowHeight / 4;
	};

	p.setup = function() {
		let canvas = p.createCanvas(p.windowWidth - 17, y + 200);
		canvas.class('projectCanvas');
		points.push({ x: -100, y: y });
		points.push({ x: -100, y: y });
		for (let i = 0; i < pointSize; i++) {
			points.push({ x: (p.windowWidth / pointSize) * i, y: y });
		}
		points.push({ x: p.windowWidth + 100, y: y });
	};

	p.draw = function() {
		p.clear();
		p.noStroke();
		p.fill(p.color(241, 193, 171));
		p.beginShape();
		for (let i = 0; i < pointSize + 3; i++) {
			yoff += inc;
			p.curveVertex(points[i].x, points[i].y);
			points[i].y = p.map(
				p.noise(xoff, yoff),
				0,
				1,
				y - yWindowOffset,
				y + yWindowOffset
			);
		}
		p.curveVertex(p.windowWidth, y + 200);
		p.curveVertex(-100, y + 200);
		p.curveVertex(-100, y + 200);

		p.endShape();
		xoff += yspeed;
		yoff = 0;
	};
}
