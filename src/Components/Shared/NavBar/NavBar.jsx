import React from 'react';
import TopNavBar from './TopNavBar/TopNavBar';
import BottomNavBar from './BottomNavBar/BottomNavBar';
import CategoryNav from './CategoryNav/CategoryNav';

const NavBar = () => {
    return (
        <div>
            <TopNavBar />
            <BottomNavBar />
            <CategoryNav />
        </div>
    );
};

export default NavBar;