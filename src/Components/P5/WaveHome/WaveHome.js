import './WaveHome.css';

export default function sketch(p) {
	let points = [];
	let pointSize = 50;
	let x = p.windowWidth / 3;
	let y = p.windowHeight / 2;
	let xWindowOffset = x / 5;
	let yWindowOffset = y / 5;
	console.log(yWindowOffset);
	let xoff = 0;
	let yoff = 0;
	let inc = 0.02;
	let yspeed = 0.001;

	p.windowResized = function() {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
		x = p.windowWidth / 3;
		y = p.windowHeight / 2;
	};

	p.setup = function() {
		let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
		canvas.class('homeCanvas');
		//for mobile
		if (p.windowWidth < 1000) {
			inc = 0.05;
			pointSize = 30;
			yWindowOffset = y / 10;
			points.push({ x: -100, y: y });
			points.push({ x: -100, y: y });
			for (let i = 0; i < pointSize; i++) {
				points.push({ x: (p.windowWidth / pointSize) * i, y: y });
			}
			points.push({ x: p.windowWidth + 100, y: y });
		}
		//for desktop
		else {
			points.push({ x: x, y: -100 });
			points.push({ x: x, y: -100 });
			for (let i = 0; i < pointSize; i++) {
				points.push({ x: x, y: (p.windowHeight / pointSize) * i });
			}
			points.push({ x: x, y: p.windowHeight + 100 });
		}
	};

	p.draw = function() {
		p.clear();
		p.noStroke();
		p.fill(p.color(241, 193, 171));
		if (p.windowWidth < 1000) {
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
			p.curveVertex(p.windowWidth, y + p.windowHeight / 5);
			p.curveVertex(-100, y + p.windowHeight / 5);
			p.curveVertex(-100, y + p.windowHeight / 5);

			p.endShape();
			xoff += yspeed;
			yoff = 0;
		} else {
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
			p.curveVertex(x + 200, p.windowHeight);
			p.curveVertex(x + 200, -100);
			p.curveVertex(x + 200, -100);

			p.endShape();
			yoff += yspeed;
			xoff = 0;
		}
	};
}
