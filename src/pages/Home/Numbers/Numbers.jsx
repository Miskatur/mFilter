import React from 'react';
import numbers_banner from '../../../assets/numbers.svg';

const Numbers = () => {
	return (
		<div className='my-40'>
			<h1 className="text-center text-[#1E1E1E] text-[45px] font-light mb-[35px]">
				Numbers speak <br className="hidden lg:block" /> about us!
			</h1>

			<div className="mt-10 flex flex-col-reverse lg:flex-row justify-center gap-10 items-center">
				<div className="grid grid-cols-2 lg:grid-cols-3 gap-14">
					<div className="text-center space-y-3 leading-[112%]">
						<h1 className="text-2xl text-[#686868]  font-medium">1500+</h1>
						<div class="bg-[#F48850] w-[150px] h-[2px] mx-auto"></div>
						<h1 className="text-[20px] text-[#3F3F3F] leading-6">
							eCommerce <br className="hidden lg:block" /> Websites Tracked
						</h1>
					</div>
					<div className="text-center space-y-3 leading-[112%]">
						<h1 className="text-2xl text-[#686868]  font-medium">100 K+</h1>
						<div class="bg-[#F48850] w-[150px] h-[2px] mx-auto"></div>
						<h1 className="text-[20px] text-[#3F3F3F] leading-6">
							Infringement Instances Identified
						</h1>
					</div>
					<div className="text-center space-y-3 leading-[112%]">
						<h1 className="text-2xl text-[#686868]  font-medium">100 K+</h1>
						<div class="bg-[#F48850] w-[150px] h-[2px] mx-auto"></div>
						<h1 className="text-[20px] text-[#3F3F3F] leading-6">Brands Analyzed</h1>
					</div>
					<div className="text-center space-y-3 leading-[112%]">
						<h1 className="text-2xl text-[#686868]  font-medium">1 B+</h1>
						<div class="bg-[#F48850] w-[150px] h-[2px] mx-auto"></div>
						<h1 className="text-[20px] text-[#3F3F3F] leading-6">
							Video Frames <br className="hidden lg:block" /> Analyzed
						</h1>
					</div>
					<div className="text-center space-y-3 leading-[112%]">
						<h1 className="text-2xl text-[#686868]  font-medium">3.5 B+</h1>
						<div class="bg-[#F48850] w-[150px] h-[2px] mx-auto"></div>
						<h1 className="text-[20px] text-[#3F3F3F] leading-6">
							Unique Device <br className="hidden lg:block" /> Coverage
						</h1>
					</div>
					<div className="text-center space-y-3 leading-[112%]">
						<h1 className="text-2xl text-[#686868]  font-medium">$400 M+</h1>
						<div class="bg-[#F48850] w-[150px] h-[2px] mx-auto"></div>
						<h1 className="text-[20px] text-[#3F3F3F] leading-6">Saved for clients</h1>
					</div>
				</div>

				<div>
					<img src={numbers_banner} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Numbers;
