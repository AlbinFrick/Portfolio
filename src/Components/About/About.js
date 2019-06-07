import React, { Component } from 'react';

import FirstSection from '../Projects/Arboreal/FirstSection/FirstSection';

const photos = [
	{
		src: 'https://i.imgur.com/ju4aHwr.png',
		thumbnail: 'https://i.imgur.com/ju4aHwr.png',
		thumbnailWidth: 399,
		thumbnailHeight: 724
	},
	{
		src: 'https://i.imgur.com/WTlCeUY.jpg',
		thumbnail: 'https://i.imgur.com/WTlCeUY.jpg',
		thumbnailWidth: 4032,
		thumbnailHeight: 3024
	},
	{
		src: 'https://i.imgur.com/GEuV1k7.jpg',
		thumbnail: 'https://i.imgur.com/GEuV1k7.jpg',
		thumbnailWidth: 4032,
		thumbnailHeight: 3024
	},
	{
		src: 'https://i.imgur.com/wHM6xMo.jpg',
		thumbnail: 'https://i.imgur.com/wHM6xMo.jpg',
		thumbnailWidth: 2268,
		thumbnailHeight: 4032
	},
	{
		src: 'https://i.imgur.com/0W8GmHB.jpg',
		thumbnail: 'https://i.imgur.com/0W8GmHB.jpg',
		thumbnailWidth: 3024,
		thumbnailHeight: 4032
	},
	{
		src: 'https://i.imgur.com/tiddBPR.jpg',
		thumbnail: 'https://i.imgur.com/tiddBPR.jpg',
		thumbnailWidth: 1024,
		thumbnailHeight: 768
	}
];

export class About extends Component {
	render() {
		return (
			<div>
				<FirstSection photos={photos} />
			</div>
		);
	}
}

export default About;
