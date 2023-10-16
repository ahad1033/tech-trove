import React from 'react';
import HomeBanner from '../../Components/Home/HomeBanner/HomeBanner';
import Footer from '../../Components/Shared/Footer/Footer';
import BottomSection from '../../Components/Home/BottomSection/BottomSection';
import FlashSale from '../../Components/Home/FlashSale/FlashSale';
import Trending from '../../Components/Trending/Trending';
import BottomBanner from '../../Components/Home/BottomBanner/BottomBanner';
import TopHundred from '../../Components/Home/TopHundred/TopHundred';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <FlashSale />
            <Trending />
            <TopHundred />
            <BottomBanner />
            <BottomSection />
            <Footer />
        </div>
    );
};

export default Home;