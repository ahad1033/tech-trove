import React from 'react';

const BottomBanner = () => {
    return (
        <div className='section-container my-20 w-full'>
            <div className='flex gap-5'>
                <div className='flex flex-row rounded-lg w-1/2'>
                    <div className="text-white px-7 py-5 lg:py-16 w-1/2 rounded-s-lg" style={{ backgroundColor: "#BF2E3B" }}>
                        <h2 className="text-4xl font-bold">Never-Ending Summer</h2>
                        <p className='text-xl mt-4'>Throwback Shirts & all-day dressed</p>
                        <p className='underline mt-8 '>Explore all category</p>
                    </div>
                    <div className="w-1/2">
                        <figure><img className='rounded-e-lg h-full w-full' src="https://i.ibb.co/k6h3cNs/Rectangle-1078.png" alt="" /></figure>
                    </div>
                </div>
                <div className='flex flex-row rounded-lg'>
                    <div className=" text-white px-7 py-16 rounded-s-lg w-1/2" style={{ backgroundColor: "#1D5159" }}>
                        <h2 className="text-4xl font-bold">Never-Ending Summer</h2>
                        <p className='text-xl'>Throwback Shirts & all-day dressed</p>
                        <p className='underline'>Explore all category</p>
                    </div>
                    <div className="w-1/2">
                        <figure><img className='rounded-e-lg h-full w-full' src="https://i.ibb.co/pytDMDH/Rectangle-1078.png" alt="" /></figure>
                    </div>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='flex flex-row rounded-lg w-1/2'>
                    <div className="text-white px-7 py-5 lg:py-16 w-1/2 rounded-s-lg" style={{ backgroundColor: "#D11FB5" }}>
                        <h2 className="text-4xl font-bold">The Pinky Barbie Edition</h2>
                        <p className='text-xl mt-4'>Lets play dress up</p>
                        <p className='underline mt-8 '>Explore all category</p>
                    </div>
                    <div className="w-1/2">
                        <figure><img className='rounded-e-lg h-full w-full' src="https://i.ibb.co/98zB4Sf/Rectangle-1078.png" alt="" /></figure>
                    </div>
                </div>
                <div className='flex flex-row rounded-lg'>
                    <div className="text-white px-7 py-16 rounded-s-lg w-1/2" style={{ backgroundColor: "#0186C4" }}>
                        <h2 className="text-4xl font-bold">Best Sellers Everyone Love</h2>
                        <p className='text-xl'>poolside glam include</p>
                        <p className='underline'>Explore all category</p>
                    </div>
                    <div className="w-1/2">
                        <figure><img className='rounded-e-lg h-full w-full' src="https://i.ibb.co/F62pqJN/Rectangle-1078.png" alt="" /></figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomBanner;