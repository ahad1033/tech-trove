import React from 'react';

const BottomBanner = () => {
    return (
        <div className='section-container my-20'>
            <div className='flex gap-5'>
                <div className='flex flex-row rounded-lg w-1/2'>
                    <div className="flex  flex-col text-white px-5 lg:px-10 py-7 lg:py-16 w-1/2 rounded-s-lg justify-around" style={{ backgroundColor: "#BF2E3B" }}>
                        <h2 className="text-2xl lg:text-4xl font-bold">Never-Ending Summer</h2>
                        <p className='text-lg lg:text-xl'>Throwback Shirts & all-day dressed</p>
                        <p className='underline'>Explore all category</p>
                    </div>
                    <div className="w-1/2">
                        <figure><img className='rounded-e-lg h-full w-full' src="https://i.ibb.co/k6h3cNs/Rectangle-1078.png" alt="" /></figure>
                    </div>
                </div>
                <div className='flex flex-row rounded-lg w-1/2'>
                    <div className="flex  flex-col text-white px-5 lg:px-10 py-7 lg:py-16 w-1/2 rounded-s-lg justify-around" style={{ backgroundColor: "#1D5159" }}>
                        <h2 className="text-2xl lg:text-4xl font-bold">Never-Ending Summer</h2>
                        <p className='text-lg lg:text-xl'>Throwback Shirts & all-day dressed</p>
                        <p className='underline'>Explore all category</p>
                    </div>
                    <div className="w-1/2">
                        <figure><img className='rounded-e-lg h-full w-full' src="https://i.ibb.co/pytDMDH/Rectangle-1078.png" alt="" /></figure>
                    </div>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='flex flex-row rounded-lg w-1/2'>
                    <div className="flex flex-col text-white px-5 lg:px-10 py-7 lg:py-16 w-1/2 rounded-s-lg justify-around" style={{ backgroundColor: "#D11FB5" }}>
                        <h2 className="text-2xl lg:text-4xl font-bold">The Pinky Barbie Edition</h2>
                        <p className='text-lg lg:text-xl'>Lets play dress up</p>
                        <p className='underline'>Explore all category</p>
                    </div>
                    <div className="w-1/2">
                        <figure><img className='rounded-e-lg h-full w-full' src="https://i.ibb.co/98zB4Sf/Rectangle-1078.png" alt="" /></figure>
                    </div>
                </div>
                <div className='flex flex-row rounded-lg w-1/2'>
                    <div className="flex flex-col text-white px-5 lg:px-10 py-7 lg:py-16 w-1/2 rounded-s-lg justify-around" style={{ backgroundColor: "#0186C4" }}>
                        <h2 className="text-2xl lg:text-4xl font-bold">Best Sellers Everyone Love</h2>
                        <p className='text-lg lg:text-xl'>poolside glam include</p>
                        <p className='underline'>Explore all category</p>
                    </div>
                    <div className="w-1/2">
                        <figure><img className='rounded-e-lg w-full' src="https://i.ibb.co/F62pqJN/Rectangle-1078.png" alt="" /></figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomBanner;