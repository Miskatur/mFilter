import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
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
				{/* <Swiper navigation={true}  modules={[Navigation]} className="mySwiper">
					<SwiperSlide>Slide 1</SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide>
					<SwiperSlide>Slide 5</SwiperSlide>
					<SwiperSlide>Slide 6</SwiperSlide>
					<SwiperSlide>Slide 7</SwiperSlide>
					<SwiperSlide>Slide 8</SwiperSlide>
					<SwiperSlide>Slide 9</SwiperSlide>
				</Swiper> */}

				<Swiper
					slidesPerView={5}
					spaceBetween={50}
					slidesPerGroup={2}
					loop={true}
					// navigation={true}
					// loopFillGroupWithBlank={true}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					modules={[Autoplay, Navigation]}
					className="mySwiper lg:h-full">
					<div className="flex justify-around items-center gap-40">
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
					</div>
				</Swiper>
				<Swiper
					slidesPerView={5}
					spaceBetween={50}
					slidesPerGroup={2}
					loop={true}
					navigation={true}
					// loopFillGroupWithBlank={true}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					modules={[Autoplay, Navigation]}
					className="mySwiper lg:h-full">
					<div className="flex justify-around items-center gap-40">
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
					</div>
				</Swiper>
			</div>
		</div>
	);
};

export default Trusted;

{
	/* <Swiper
					breakpoints={{
						200: {
							slidesPerView: 1,
						},
						340: {
							slidesPerView: 2,
						},
						640: {
							slidesPerView: 3,
						},

						768: {
							slidesPerView: 4,
						},
						1000: {
							slidesPerView: 5,
						},
					}}
					slidesPerView={5}
					spaceBetween={50}
					slidesPerGroup={2}
					loop={true}
					navigation={true}
					// loopFillGroupWithBlank={true}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					modules={[Autoplay,Navigation]}
					className="mySwiper lg:h-full">
					<div className="flex justify-around items-center gap-40">
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
					</div>
				</Swiper> */
}
