import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';

const SearchOption = () => {
    return (
        <div className='lg:flex md:flex sm:hidden items-center justify-center border border-1 rounded-xl gap-2'>
            <input type="text" placeholder="Search Products" className="input-xs input-ghost pl-2 border-none" />
            <details className="dropdown">
                <summary className="mx-1 text-xs btn normal-case whitespace-nowrap">
                    <h4 className='flex flex-row items-center gap-2'>All Categories<span className="ml-1"><AiOutlineDown /></span></h4>
                </summary>
                <ul className="mt-2 p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </details>
            <FaSearch className='text-3xl px-2 mx-2 border-s-2' />
        </div>
    );
};

export default SearchOption;
