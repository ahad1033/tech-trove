import React from 'react';
import HomeBanner from '../../Components/Home/HomeBanner/HomeBanner';
import Footer from '../../Components/Shared/Footer/Footer';
import BottomSection from '../../Components/Home/BottomSection/BottomSection';
import FlashSale from '../../Components/Home/FlashSale/FlashSale';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <FlashSale />
            <BottomSection />
            <Footer />
        </div>
    );
};

export default Home;