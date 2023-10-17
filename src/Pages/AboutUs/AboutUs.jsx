import React from 'react';
import TopAbout from '../../Components/AboutUs/TopAbout/TopAbout';
import MiddleAbout from '../../Components/AboutUs/MiddleAbout/MiddleAbout';
import ContactUs from '../../Components/AboutUs/ContactUs/ContactUs';
import BottomSection from '../../Components/Home/BottomSection/BottomSection';
import Footer from '../../Components/Shared/Footer/Footer';

const AboutUs = () => {
    return (
        <div>
           <TopAbout />
           <MiddleAbout />
           <ContactUs />
           <BottomSection />
           <Footer />
        </div>
    );
};

export default AboutUs;