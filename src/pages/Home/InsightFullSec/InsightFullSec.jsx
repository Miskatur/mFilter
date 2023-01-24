import React from 'react';
import { Autoplay, Grid, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Trusted/trusted.css';


import technology from '../../../assets/technology.png'
import reseller from '../../../assets/reseller.png'
import creativ from '../../../assets/creative.png'
import warning from '../../../assets/warning.png'

const InsightFullSec = () => {
    return (
        <div className='mt-40'>
            <h1 className="text-center text-[#1E1E1E] text-[45px] font-light mb-[35px]">
                Insightful Reads - <span className='text-[#F48850]'>mFilterIt</span>
            </h1>
            <div>
			<div className="my-10 relative">
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
						<div className="p-5 rounded-2xl mb-4 lg:mb-10">
							<img src={technology} alt="" className="" />
						</div>
					</SwiperSlide>
					<SwiperSlide className="">
						<div className="p-5 rounded-2xl mb-4 lg:mb-10">
							<img src={creativ} alt="" className="" />
						</div>
					</SwiperSlide>
					<SwiperSlide className="">
						<div className="p-5 rounded-2xl mb-4 lg:mb-10">
							<img src={reseller} alt="" className="" />
						</div>
					</SwiperSlide>
					<SwiperSlide className="">
						<div className="p-5 rounded-2xl mb-4 lg:mb-10">
							<img src={warning} alt="" className="" />
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>

        </div>
    );
};

export default InsightFullSec;