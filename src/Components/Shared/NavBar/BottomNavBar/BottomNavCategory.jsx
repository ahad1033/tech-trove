import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';

const BottomNavCategory = () => {
    return (
        <div className='text-white'>
            <h1 className='font-bold font-5xl flex gap-2 items-center'><span><BiCategory /></span>Categories</h1>
            <div className='flex gap-2 ml-10'>
                <p className='flex text-sm flex-row place-items-center'>USD <span><AiOutlineDown className="ml-1 h-3" /></span></p>
                <p className='flex text-sm flex-row place-items-center'>English <span><AiOutlineDown className="ml-1 h-3" /></span></p>
            </div>
        </div>
    );
};

export default BottomNavCategory;