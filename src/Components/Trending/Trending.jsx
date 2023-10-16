import React from 'react';

const Trending = () => {
    return (
        <div>
            <div className='w-96'>
                <img src="https://i.ibb.co/f4pC4jQ/4-org-zoom-1.png" alt="" />
                <div className='flex justify-between bottom-0 text-white p-4' style={{backgroundColor: '#262626'}}>
                    <div>
                        <h1>Cool & Sexy Calvin Klein</h1>
                        <p>Dotted dress-Casual</p>
                    </div>
                    <div>
                        <button className='btn btn-outline text-white'>$89 Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;