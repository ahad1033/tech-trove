import React from 'react';

const TopCard = () => {
    return (
        <div className='flex gap-4'>
            <div className='w-2/3 flex'>
                <div className='w-1/2 p-10' style={{ backgroundColor: "#E9E9EB" }}>
                    <h2 className='text-xl font-bold text-black mb-5'>Stylish woman in summer outfit isolated posing in fashion trend isolated</h2>
                    <p className='text-sm font-semibold text-black mb-5 '>In this captivating scene, a stylish woman stands confidently against a pristine backdrop, capturing the essence of summer's allure. Bathed in the gentle sunlight, she emanates an air of effortless chic. Her outfit is a harmonious blend of contemporary trends and timeless elegance, perfectly attuned to the vibrant season.</p>
                    <button className='button-primary'>Read More</button>
                </div>
                <div className='w-1/2'>
                    <img src="https://i.ibb.co/RgxYVPy/stylish-woman-summer-outfit-isolated-posing-fashion-trend-isolated-1-1.png" alt="" />
                </div>
            </div>
            <div className='w-1/3'>
                <img className='h-[370px]' src="https://i.ibb.co/fqr6s63/4448fd67219a276a985ebc0dd4e94d09.png" alt="" />
            </div>
        </div>
    );
};

export default TopCard;