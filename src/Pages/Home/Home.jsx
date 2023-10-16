import React from 'react';
import HomeBanner from '../../Components/Home/HomeBanner/HomeBanner';
import Footer from '../../Components/Shared/Footer/Footer';
import BottomSection from '../../Components/Home/BottomSection/BottomSection';
import FlashSale from '../../Components/Home/FlashSale/FlashSale';
import Trending from '../../Components/Trending/Trending';
import BottomBanner from '../../Components/Home/BottomBanner/BottomBanner';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <FlashSale />
            <Trending />
            <BottomBanner />
            <BottomSection />
            <Footer />
        </div>
    );
};

export default Home;