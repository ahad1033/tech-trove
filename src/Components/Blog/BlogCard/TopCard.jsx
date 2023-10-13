import React from 'react';

const TopCard = () => {
    return (
        <div className='lg:flex md:hidden sm:hidden gap-4 justify-center'>
            <div className='flex'>
                <div className="w-96" style={{ backgroundColor: "#E9E9EB" }}>
                    <div className="card-body">
                        <h2 className="card-title text-black font-bold">Stylish woman in summer outfit isolated posing in fashion trend isolated</h2>
                        <p >In this captivating scene, a stylish woman stands confidently against a pristine backdrop, capturing the essence of summer's allure. Bathed in the gentle sunlight, she emanates an air of effortless chic. Her outfit is a harmonious blend of contemporary trends and timeless elegance, perfectly attuned to the vibrant season.</p>
                        <div className="card-actions">
                            <button className="button-primary">Read More</button>
                        </div>
                    </div>
                </div>
                <div className='w-96'>
                    <figure><img className='w-full h-full' src="https://i.ibb.co/RgxYVPy/stylish-woman-summer-outfit-isolated-posing-fashion-trend-isolated-1-1.png" alt="" /></figure>
                </div>
                <div className='w-96 ms-4'>
                    <figure><img className='h-full w-full' src="https://i.ibb.co/fqr6s63/4448fd67219a276a985ebc0dd4e94d09.png" alt="" /></figure>
                </div>
            </div>
        </div>
    );
};

export default TopCard;