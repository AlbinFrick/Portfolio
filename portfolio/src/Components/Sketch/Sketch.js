import './Sketch.css';
import './Sketch-min.css';

export default function sketch(p) {
	let points = [];
	let pointSize = 50;
	let x = p.windowWidth / 3;
	let xWindowOffset = x / 5;
	console.log(xWindowOffset);
	let xoff = 0;
	let yoff = 0;
	let inc = 0.02;
	let yspeed = 0.001;

	p.setup = function() {
		p.createCanvas(p.windowWidth, p.windowHeight);

		points.push({ x: x, y: -100 });
		points.push({ x: x, y: -100 });
		for (let i = 0; i < pointSize; i++) {
			points.push({ x: x, y: (p.windowHeight / pointSize) * i });
		}
		points.push({ x: x, y: p.windowHeight + 100 });
	};

	p.draw = function() {
		p.clear();
		p.noStroke();
		p.fill(p.color(238, 249, 255));
		p.beginShape();
		for (let i = 0; i < pointSize + 3; i++) {
			xoff += inc;
			p.curveVertex(points[i].x, points[i].y);
			points[i].x = p.map(
				p.noise(xoff, yoff),
				0,
				1,
				x - xWindowOffset,
				x + xWindowOffset
			);
		}
		p.curveVertex(p.windowWidth, p.windowHeight);
		p.curveVertex(p.windowWidth, -100);
		p.curveVertex(p.windowWidth, -100);

		p.endShape();
		yoff += yspeed;
		xoff = 0;
	};
}
