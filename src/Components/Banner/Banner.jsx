import React from 'react';
import bannerImg from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-black">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImg} className="w-75 rounded-lg p-5" />
                <div>
                    <h1 className="text-6xl font-bold text-white">Play Your <p className='mt-3 font-extrabold text-red-500'>Music</p></h1>
                    <p className="py-6 font-semibold text-white">Hear your music, not the noise.</p>
                    <button className="btn bg-red-500 border-0 text-white font-semibold">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;