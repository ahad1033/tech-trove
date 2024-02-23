

const CategoryNav = () => {
    return (
        <div className='section-container bg-white mt-7 py-2'>
             <ul className='hidden md:flex lg:flex justify-between text-black font-normal lg:font-semibold text-xs lg:text-sm'>
                <a href=""><li>Woman</li></a>
                <a href=""><li>Male</li></a>
                <a href=""><li>Mother-Child</li></a>
                <a href=""><li>Home & Furniture</li></a>
                <a href=""><li>Super Market</li></a>
                <a href=""><li>Cosmetics</li></a>
                <a href=""><li>Shoes & Bags</li></a>
                <a href=""><li>Electronic</li></a>
                <a href=""><li>Sport & Outdoor</li></a>
                <a href=""><li>Best Seller</li></a>
             </ul>
        </div>
    );
};

export default CategoryNav;