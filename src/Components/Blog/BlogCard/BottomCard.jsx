import React from 'react';
import { BiComment } from 'react-icons/bi'

const BottomCard = () => {
    return (
        <div className='mt-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center gap-10'>
            <div className="w-96 bg-base-100 shadow-sm">
                <figure><img className='w-full' src="https://i.ibb.co/QMq09cY/photo.png" alt="card" /></figure>
                <div className="card-body">
                    <p className='text-orange-500'>Fashion</p>
                    <h2 className="card-title">Stylish young man out in town</h2>
                    <p className='text-justify'>In the heart of the bustling city, a stylish young man navigates the urban landscape with an air of contemporary confidence. His ensemble effortlessly captures the essence of city chic...</p>
                    <div className="flex text-gray-400 mt-1">
                        <p>3 hours ago</p>
                        <p className='flex items-center gap-2 justify-end'><BiComment />21</p>
                    </div>
                </div>
            </div>
            <div className="w-96 bg-base-100 shadow-sm">
                <figure><img className='w-full' src="https://i.ibb.co/0Mx2xXR/photo.png" alt="card" /></figure>
                <div className="card-body">
                    <p className='text-orange-500'>tech</p>
                    <h2 className="card-title">Aptkdoe Smartwatch Women Men </h2>
                    <p className='text-justify'>It seems like you've mentioned "Aptkdoe Smartwatch" in combination with "Women" and "Men." However, as of my last knowledge update in September 2021, I don't have specific...</p>
                    <div className="flex text-gray-400 mt-1">
                        <p>4 hours ago</p>
                        <p className='flex items-center gap-2 justify-end'><BiComment />56</p>
                    </div>
                </div>
            </div>
            <div className="w-96 bg-base-100 shadow-sm sm:hide">
                <figure><img className='w-full' src="https://i.ibb.co/NTkhLKF/photo.png" alt="card" /></figure>
                <div className="card-body">
                    <p className='text-orange-500'>tech</p>
                    <h2 className="card-title">Anker 325 power bank</h2>
                    <p className='text-justify'>Anker 325 power bank, 20000mAh external battery PowerIQ technology USB-C port, enormous energy density, compatible with iPhone, Samsung Galaxy, iPad and more...</p>
                    <div className="flex text-gray-400 mt-1">
                        <p>4 hours ago</p>
                        <p className='flex items-center gap-2 justify-end'><BiComment />10</p>
                    </div>
                </div>
            </div>
            <div className="w-96 bg-base-100 shadow-sm">
                <figure><img className='w-full' src="https://i.ibb.co/QMq09cY/photo.png" alt="card" /></figure>
                <div className="card-body">
                    <p className='text-orange-500'>Fashion</p>
                    <h2 className="card-title">Stylish young man out in town</h2>
                    <p className='text-justify'>In the heart of the bustling city, a stylish young man navigates the urban landscape with an air of contemporary confidence. His ensemble effortlessly captures the essence of city chic...</p>
                    <div className="flex text-gray-400 mt-1">
                        <p>3 hours ago</p>
                        <p className='flex items-center gap-2 justify-end'><BiComment />21</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomCard;