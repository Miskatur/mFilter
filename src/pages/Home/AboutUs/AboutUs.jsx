import React from 'react';
import AiMi from '../../../assets/AIMIicon.jpeg'
import techIcon from '../../../assets/futureTechIcon.png'
import time from '../../../assets/timeIcon.png'
import integration from '../../../assets/integrationIcon.png'

const AboutUs = () => {
    return (
        <div className='md:m-40'>
            <h1 className="text-center text-[#1E1E1E] text-[45px] font-light mb-[35px]">Who we are</h1>

            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 justify-center gap-10 items-center">

                <div>
                    <p>We are the essential tool in a digital marketer’s handbag.
                        We are on a mission to create trust, uphold integrity,
                        drive growth & value across the digital ecosystem.
                        We empower our customers with a holistic
                        view of their respective journeys’ in the digital
                        ecosystem by providing them with accurate real-time data
                        that helps them understand their returns on their digital investments.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <button className="rounded-[7.28px]  border-[3px] border-[#F48850]  w-[160px] h-[40px]  block mx-auto md:mx-0 btn-shadow ">
                            <span className="block rounded-[7.28px] text-[#F48850] text-lg font-[400]">
                                About Us
                            </span>
                        </button>
                    </div>
                </div>

                <div className='grid grid-cols-2'>
                    <div className='text-center mb-10'>
                        <img src={AiMi} className='m-auto pb-3' alt="" />
                        <p>
                            Power of AI/ML
                        </p>
                    </div>
                    <div className='text-center mb-10'>
                        <img src={techIcon} className='m-auto pb-3' alt="" />
                        <p>
                            Future Ready Tech
                        </p>
                    </div>
                    <div className='text-center mb-10'>
                        <img src={time} className='m-auto pb-3' alt="" />
                        <p>
                            Real-Time Tracking
                        </p>
                    </div>
                    <div className='text-center mb-10'>
                        <img src={integration} className='m-auto pb-3' alt="" />
                        <p>
                            Seamless Integration
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;