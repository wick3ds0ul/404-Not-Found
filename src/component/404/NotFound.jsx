import React from 'react';
import scareCrow from '../../images/Scarecrow.png';
const NotFound = () => {
	return (
		<div>
			<h1>404 Not Found</h1>
			<img src={scareCrow} alt='Scarecrow' />
			<h1>I have bad news for you</h1>
			<p>
				The page you are looking for might be removed or is temporarily
				unavailable
			</p>
			<button>Back to homepage</button>
			<p>created by wick3ds0ul - devChallenges.io</p>
		</div>
	);
};

export default NotFound;
