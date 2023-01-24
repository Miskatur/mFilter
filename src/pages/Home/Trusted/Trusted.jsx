import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './trusted.css';

import flipcart from '../../../assets/flipcart.svg';
import icicBank from '../../../assets/icici_bank.svg';
import amazon from '../../../assets/amazon.svg';
import macdonald from '../../../assets/macdonal.svg';
import pidilite from '../../../assets/pidilite.svg';
import uniliver from '../../../assets/uniliver.svg';
import hdfc_bank from '../../../assets/hdfc_bank.svg';

const Trusted = () => {
	return (
		<div>
			<div className="my-40">
				

				<Swiper
					slidesPerView={3}
					spaceBetween={50}
					slidesPerGroup={2}
					
					loop={true}
					navigation={true}
					// loopFillGroupWithBlank={true}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					modules={[Autoplay, Navigation,Grid]}
					className="mySwiper lg:h-full">
					<div className="">
						<SwiperSlide className="">
							<div className="p-5 border shadow-xl rounded-2xl mb-10">
								<img src={flipcart} alt="" className="w-[235px] h-[100px]" />
							</div>
						</SwiperSlide>
						<SwiperSlide className="">
							<div className="p-5 border shadow-xl rounded-2xl mb-10">
								<img src={icicBank} alt="" className="w-[235px] h-[100px]" />
							</div>
						</SwiperSlide>
						<SwiperSlide className="">
							<div className="p-5 border shadow-xl rounded-2xl mb-10">
								<img src={amazon} alt="" className="w-[235px] h-[100px]" />
							</div>
						</SwiperSlide>
						<SwiperSlide className="">
							<div className="p-5 border shadow-xl rounded-2xl mb-10">
								<img src={macdonald} alt="" className="w-[235px] h-[100px]" />
							</div>
						</SwiperSlide>
						<SwiperSlide className="">
							<div className="p-5 border shadow-xl rounded-2xl mb-10">
								<img src={pidilite} alt="" className="w-[235px] h-[100px]" />
							</div>
						</SwiperSlide>
						<SwiperSlide className="">
							<div className="p-5 border shadow-xl rounded-2xl mb-10">
								<img src={uniliver} alt="" className="w-[235px] h-[100px]" />
							</div>
						</SwiperSlide>
						<SwiperSlide className="">
							<div className="p-5 border shadow-xl rounded-2xl mb-10">
								<img src={hdfc_bank} alt="" className="w-[235px] h-[100px]" />
							</div>
						</SwiperSlide>
						<SwiperSlide className="">
							<div className="p-5 border shadow-xl rounded-2xl mb-10">
								<img src={pidilite} alt="" className="w-[235px] h-[100px]" />
							</div>
						</SwiperSlide>
					</div>
				</Swiper>
			</div>
		</div>
	);
};

export default Trusted;
