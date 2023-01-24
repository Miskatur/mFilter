import React from 'react';
import service1 from '../../../assets/service_1.svg';
import service2 from '../../../assets/service_2.svg';
import service3 from '../../../assets/service_3.svg';
import service4 from '../../../assets/service_4.svg';

const Services = () => {
	return (
		<div className="my-40">
			<h1 className="text-center text-[#1E1E1E] text-[45px] font-light mb-[35px]">Our Services</h1>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
				<div className="border-2 rounded-3xl flex flex-col lg:flex-row text-center lg:text-left justify-center items-center gap-2 p-10 py-14">
					<div>
						<img src={service1} alt="" className="w-[300px] h-[200px]" />
					</div>
					<div>
						<h1 className="text-[20px] font-normal leading-[30px] mb-2">
							eCommerce Competitive Analytics
						</h1>
						<p className="text-[#1E1E1E] leading-[17px] font-light text-sm mb-2">
							Map your brand to the eCommerce landscape to enhance market share with real-time
							market intelligence.
						</p>
						<p className="text-[#D25412]">Read More..</p>
					</div>
				</div>
				<div className="border-2 rounded-3xl flex flex-col lg:flex-row text-center lg:text-left justify-center items-center gap-2 px-10 py-14">
					<div>
						<img src={service2} alt="" className="w-[300px] h-[200px]" />
					</div>
					<div>
						<h1 className="text-[20px] font-normal leading-[30px] mb-2">
							Brand Hygiene Protection
						</h1>
						<p className="text-[#1E1E1E] leading-[17px] font-light text-sm mb-2">
							Get the full visibility and control of your marketing campaigns with advanced
							algorithms that safeguard brands from safety and infringement issues.
						</p>
						<p className="text-[#D25412]">Read More..</p>
					</div>
				</div>
				<div className="border-2 rounded-3xl flex flex-col lg:flex-row text-center lg:text-left justify-center items-center gap-2 px-10 py-14">
					<div>
						<img src={service3} alt="" className="w-[400px] h-[200px]" />
					</div>
					<div>
						<h1 className="text-[20px] font-normal leading-[30px] mb-2">
							Mobile Identity Solution
						</h1>
						<p className="text-[#1E1E1E] leading-[17px] font-light text-sm mb-2">
							Seamless identity verification to eliminate risk and fraud at a single go with minimal
							user inpuat and reducing friction in identity validation
						</p>
						<p className="text-[#D25412]">Read More..</p>
					</div>
				</div>
				<div className="border-2 rounded-3xl flex flex-col lg:flex-row text-center lg:text-left justify-center items-center gap-2 px-10 py-14">
					<div>
						<img src={service4} alt="" className="w-[400px] h-[200px]" />
					</div>
					<div>
						<h1 className="text-[20px] font-normal leading-[30px] mb-2">Ad Traffic Validation</h1>
						<p className="text-[#1E1E1E] leading-[17px] font-light text-sm mb-2">
							mFilterIt’s ad fraud detection solution provides deterministic ad-fraud detection &
							prevention for both App & Web campaigns and help advertisers save money with better
							ROI.
						</p>
						<p className="text-[#D25412]">Read More..</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
