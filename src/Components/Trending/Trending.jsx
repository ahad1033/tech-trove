import React from 'react';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';

const Trending = () => {
    return (
        <div className='section-container'>
            <SectionTitle title={`Trending Must Have`} />
            <div className='flex justify-center gap-20'>
                <div className='w-96'>
                    <img src="https://i.ibb.co/f4pC4jQ/4-org-zoom-1.png" alt="" />
                    <div className='flex justify-between bottom-0 text-white p-4' style={{ backgroundColor: '#262626' }}>
                        <div>
                            <h1>Cool & Sexy Calvin Klein</h1>
                            <p>Dotted dress-Casual</p>
                        </div>
                        <div>
                            <button className='btn btn-outline text-white'>$89 Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className='w-96'>
                    <img src="https://i.ibb.co/6RQhftg/4-org-zoom-1.png" alt="" />
                    <div className='flex justify-between bottom-0 text-white p-4' style={{ backgroundColor: '#262626' }}>
                        <div>
                            <h1>Cool & Sexy Calvin Klein</h1>
                            <p>Dotted dress-Casual</p>
                        </div>
                        <div>
                            <button className='btn btn-outline text-white'>$105 Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className='w-96'>
                    <img src="https://i.ibb.co/Pt6Qwx2/4-org-zoom-1.png" alt="" />
                    <div className='flex justify-between bottom-0 text-white p-4' style={{ backgroundColor: '#262626' }}>
                        <div>
                            <h1>beige coat Zara</h1>
                            <p>Cream-Brown-Formal</p>
                        </div>
                        <div>
                            <button className='btn btn-outline text-white'>$70 Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;