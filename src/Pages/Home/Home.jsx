import React from 'react';
import HomeBanner from '../../Components/Home/HomeBanner/HomeBanner';
import Footer from '../../Components/Shared/Footer/Footer';
import BottomSection from '../../Components/Home/BottomSection/BottomSection';
import FlashSale from '../../Components/Home/FlashSale/FlashSale';
import Trending from '../../Components/Trending/Trending';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <FlashSale />
            <Trending />
            <BottomSection />
            <Footer />
        </div>
    );
};

export default Home;