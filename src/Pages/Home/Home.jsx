import React from 'react';
import HomeBanner from '../../Components/Home/HomeBanner/HomeBanner';
import Footer from '../../Components/Shared/Footer/Footer';
import BottomSection from '../../Components/Home/BottomSection/BottomSection';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <BottomSection />
            <Footer />
        </div>
    );
};

export default Home;