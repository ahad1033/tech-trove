import React from 'react';
import TopNavBar from '../../Components/Shared/NavBar/TopNavBar/TopNavBar';
import BottomNavBar from '../../Components/Shared/NavBar/BottomNavBar/BottomNavBar';
import BottomSection from '../../Components/Home/BottomSection/BottomSection';
import Footer from '../../Components/Shared/Footer/Footer';

const SignIn = () => {
    return (
        <div>
             <TopNavBar />
            <BottomNavBar />
            <h3 className='text-center text-6xl mt-24'>sign in will be here</h3>
            <BottomSection />
            <Footer />
        </div>
    );
};

export default SignIn;