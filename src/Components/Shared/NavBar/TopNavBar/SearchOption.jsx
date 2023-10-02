import React from 'react';

const SearchOption = () => {
    return (
        <div>
            <input type="text" placeholder="Search Products " className="input w-full max-w-xs" />
            <details className="dropdown mb-32">
                <summary className="m-1 btn">All Categories</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    {/* <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li> */}
                </ul>
            </details>
        </div>
    );
};

export default SearchOption;