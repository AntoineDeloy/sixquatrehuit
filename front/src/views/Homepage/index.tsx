import React from "react";
import sixquatrehuit_logo from '../../assets/sixquatrehuit_logo.svg';
import './homepage.scss';

const Homepage = () => {
	return(
		<div className='homepage'>
			<img className='homepage__logo' src={sixquatrehuit_logo} alt='sixquatrehuit_logo'/>
		</div>
	);
};

export default Homepage;
