import React from 'react';

const Testimonials = () => {
	return (
		<div className="py-8 px-6 md:py-10 md:px-14 lg:px-20 xl:px-24 my-40">
			<div className="flex flex-col md:flex-row justify-center items-center mb-10 lg:mr-3">
				<h2 className="text-center text-xl md:text-2xl lg:text-3xl xl:text-5xl font-light mb-3 text-[#444444]">
					TESTIMONIALS
				</h2>
				<div className="hidden  h-24 px-5 w-1 lg:px-14 py-3 md:flex flex-col items-center">
					<div className="w-1 bg-gradient-to-b  from-[#F48850]  to-[#D25412] h-full"></div>
				</div>
				<p className="text-center lg:text-3xl lg:font-light text-[#444444]">
					What recruiters have to <br /> say about{' '}
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F48850] to-[#D25412] font-semibold">
						mFilterIt
					</span>
				</p>
			</div>

			<div className="flex flex-col gap-10 py-8 lg:flex-row ">
				<div className="flex flex-col gap-10 sm:flex-row items-center lg:flex-col lg:items-end flex-1">
					<div className="border p-10 lg:h-[300px] rounded-lg shadow-md hover:shadow-lg max-w-md">
						<div className="flex items-center gap-5 mb-4">
							<img
								src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0="
								alt=""
								loading="lazy"
								className=" w-14 h-14 rounded-full object-cover"
							/>
							<div className="font-semibold">
								<div>Hamad Malik</div>
								<div>CMO</div>
							</div>
						</div>
						<p>
							We started working with mFilterlt and almost instantly saw value is subscribing to the
							service as it helped us challenge and optimize traffic sources, weed out under
							performing partners and scale with confidence leading to marketing budget
							optimization.
						</p>
					</div>
					<div className="border p-10 lg:h-[300px] rounded-lg shadow-md hover:shadow-lg max-w-md">
						<div className="flex items-center gap-5 mb-4">
							<img
								src="https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis="
								alt=""
								loading="lazy"
								className=" w-14 h-14 rounded-full object-cover"
							/>
							<div className="font-semibold">
								<div>Haris Khan</div>
								<div>Head Acquisition</div>
							</div>
						</div>
						<p>
							Ad-fraud is a challenge with every ad network - Careem works closely with partners to
							control the fraud and improve the traffic quality using mFilterIt fraud detection
							tool. The tool categorically identifies the type of fraud and helps understand real
							value additional by ad-network.
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-10 sm:flex-row items-center lg:flex-col lg:items-start flex-1">
					<div className="border p-10 lg:h-[300px] rounded-lg shadow-md hover:shadow-lg max-w-md">
						<div className="flex items-center gap-5 mb-4">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2Aem2jijWG-obJwRhtKC_VJKaCZ-iSlXnA&usqp=CAU"
								alt=""
								loading="lazy"
								className=" w-14 h-14 rounded-full object-cover"
							/>
							<div className="font-semibold">
								<div>Ganesh Sonawane</div>
								<div>Sr. Digital Manager</div>
							</div>
						</div>
						<p>
							mFilterit have been a fantastic partner in not only helping us identify fraud sources
							but also optimize and identify where we can scale our investments. The team at
							mFilterlt have consistently delivered performance and have extended the support with
							respect to managing our partners.
						</p>
					</div>
					<div className="border p-10 lg:h-[300px] rounded-lg shadow-md hover:shadow-lg max-w-md">
						<div className="flex items-center gap-5 mb-4">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJFBpwf-UQqb-dNfOyqz1VWdnMQuBC1SxvydUTz3IFsZwGM2eBLd2qBo6Eg5H3udM5-NI&usqp=CAU"
								alt=""
								loading="lazy"
								className=" w-14 h-14 rounded-full object-cover"
							/>
							<div className="font-semibold">
								<div className='font-medium text-[16px]'>Parth Desai </div>
								<div className='text-[#1E1E1E]'>Sr. Manager</div>
							</div>
						</div>
						<p>
							With the support of mFilterlt, we were able to improve the efficiency of our
							performance marketing spends and optimize our call centre bandwidth basis the quality
							of the lead. The detailed transactional reporting provided by mFilterlt helped us
							deliver outstanding business results.
						</p>
					</div>
				</div>
			</div>

			<div className="flex w-full flex-wrap justify-center text-xs font-semibold text-white pb-8 pt-4">
				<div className="mt-8">
					<button className="rounded-[7.28px]  border-[3px] border-[#F48850] hover:bg-[#F48850]  w-[160px] h-[40px]  block mx-auto md:mx-0 btn-shadow ">
						<span className="block rounded-[7.28px] text-[#F48850] hover:text-white text-lg font-[400]">
							View More
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
