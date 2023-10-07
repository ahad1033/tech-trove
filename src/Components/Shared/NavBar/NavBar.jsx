import React from 'react';
import TopNavBar from './TopNavBar/TopNavBar';
import BottomNavBar from './BottomNavBar/BottomNavBar';
import CategoryNav from './CategoryNav/CategoryNav';

const NavBar = () => {
    return (
        <nav>
            <TopNavBar />
            <BottomNavBar />
            <CategoryNav />
        </nav>
    );
};

export default NavBar;