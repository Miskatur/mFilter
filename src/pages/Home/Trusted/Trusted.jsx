import React from 'react';
import { Autoplay, Grid, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import './trusted.css';

import amazon from '../../../assets/amazon.svg';
import flipcart from '../../../assets/flipcart.svg';
import hdfc_bank from '../../../assets/hdfc_bank.svg';
import icicBank from '../../../assets/icici_bank.svg';
import macdonald from '../../../assets/macdonal.svg';
import pidilite from '../../../assets/pidilite.svg';
import uniliver from '../../../assets/uniliver.svg';

const Trusted = () => {
	return (
		<div>
			<div className="my-40 relative">
				<Swiper
					slidesPerView={6}
					spaceBetween={30}
					slidesPerGroup={2}
					loop={true}
					loopFillGroupWithBlank={true}
					navigation={true}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					modules={[Autoplay, Navigation, Grid]}
					className="mySwiper lg:h-full">
					<SwiperSlide className="">
						<div className="p-5 border-2 border-[#DDDDDD] rounded-2xl mb-4 ">
							<img src={flipcart} alt="" className="w-[235px] h-[100px]" />
						</div>
					</SwiperSlide>
					<SwiperSlide className="">
						<div className="p-5 border-2 border-[#DDDDDD] rounded-2xl mb-4 ">
							<img src={icicBank} alt="" className="w-[235px] h-[100px]" />
						</div>
					</SwiperSlide>
					<SwiperSlide className="">
						<div className="p-5 border-2 border-[#DDDDDD] rounded-2xl mb-4 ">
							<img src={amazon} alt="" className="w-[235px] h-[100px]" />
						</div>
					</SwiperSlide>
					<SwiperSlide className="">
						<div className="p-5 border-2 border-[#DDDDDD] rounded-2xl mb-4 ">
							<img src={macdonald} alt="" className="w-[235px] h-[100px]" />
						</div>
					</SwiperSlide>
					<SwiperSlide className="">
						<div className="p-5 border-2 border-[#DDDDDD] rounded-2xl mb-4 ">
							<img src={pidilite} alt="" className="w-[235px] h-[100px]" />
						</div>
					</SwiperSlide>
					<SwiperSlide className="">
						<div className="p-5 border-2 border-[#DDDDDD] rounded-2xl mb-4 ">
							<img src={uniliver} alt="" className="w-[235px] h-[100px]" />
						</div>
					</SwiperSlide>
					<SwiperSlide className="">
						<div className="p-5 border-2 border-[#DDDDDD] rounded-2xl mb-4 ">
							<img src={hdfc_bank} alt="" className="w-[235px] h-[100px]" />
						</div>
					</SwiperSlide>
					<SwiperSlide className="">
						<div className="p-5 border-2 border-[#DDDDDD] rounded-2xl mb-4 ">
							<img src={pidilite} alt="" className="w-[235px] h-[100px]" />
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};
 
export default Trusted;
