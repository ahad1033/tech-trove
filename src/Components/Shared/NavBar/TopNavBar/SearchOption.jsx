import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';

const SearchOption = () => {
    return (
        <div className='flex items-center justify-center border border-1 rounded-xl px-1 gap-2'>
            <input type="text" placeholder="Search Products" className="input" />
            <details className="dropdown">
                <summary className="mx-1 text-xs btn normal-case whitespace-nowrap flex items-center">
                    All Categories <AiOutlineDown className="ml-1" />
                </summary>
                <ul className="mt-2 p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </details>
            <FaSearch className='text-3xl pl-2 mx-2 border-s-1' />
        </div>
    );
};

export default SearchOption;
