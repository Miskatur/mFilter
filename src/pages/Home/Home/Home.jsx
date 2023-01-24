import React from 'react';
import Testimonials from '../Testimonials/Testimonials';
import Banner from '../Banner/Banner';
import Numbers from '../Numbers/Numbers';
import Services from '../Services/Services';
import Trusted from '../Trusted/Trusted';
import AboutUs from '../AboutUs/AboutUs';
import InsightFullSec from '../InsightFullSec/InsightFullSec';
import Footer from '../Footer/Footer';

const Home = () => {
	return (
		<div className="w-[90%] mx-auto">
			<Banner />
			<Services />
			<Numbers />
			<Trusted />
			<Testimonials />
			<AboutUs/>
			<InsightFullSec/>
		</div>
	);
};

export default Home;
