import './Sketch.css';

export default function sketch(p) {
	let points = [];
	let pointSize = 30;
	let x = 500;
	let xoff = 0;
	let yoff = 0;
	let inc = 0.06;
	let yspeed = 0.001;

	p.setup = function() {
		p.createCanvas(p.windowWidth, p.windowHeight);
		p.clear();
		p.noStroke();
		p.fill(200);
		points.push({ x: x, y: -100 });
		points.push({ x: x, y: -100 });
		for (let i = 0; i < pointSize; i++) {
			points.push({ x: x, y: ((p.windowHeight + 10) / pointSize) * i });
		}
		points.push({ x: x, y: p.windowHeight + 100 });
	};

	p.draw = function() {
		p.beginShape();

		for (let i = 0; i < pointSize + 3; i++) {
			xoff += inc;
			p.curveVertex(points[i].x, points[i].y);
			points[i].x = p.map(p.noise(xoff, yoff), 0, 1, x - 100, x + 100);
		}
		p.curveVertex(p.windowWidth, p.windowHeight);
		p.curveVertex(p.windowWidth, -100);
		p.curveVertex(p.windowWidth, -100);

		p.endShape();
		yoff += yspeed;
		xoff = 0;
	};
}
