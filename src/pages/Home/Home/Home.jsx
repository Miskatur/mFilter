import React from 'react';
import Testimonials from '../Testimonials/Testimonials';
import Banner from '../Banner/Banner';
import Numbers from '../Numbers/Numbers';
import Services from '../Services/Services';
import Trusted from '../Trusted/Trusted';

const Home = () => {
	return (
		<div className="w-[90%] mx-auto">
			<Banner />
			<Services />
			<Numbers />
			<Trusted />
			<Testimonials />
		</div>
	);
};

export default Home;
