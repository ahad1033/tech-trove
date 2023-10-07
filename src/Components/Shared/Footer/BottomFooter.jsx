import React from 'react';
import FooterIcons from './FooterIcons';

const BottomFooter = () => {
    return (
        <div className='justify-between section-container py-10 hidden sm:flex'>
            <h3 className='font-bold'>165-179 Forster Road City of Monash, Melbourne, Australia</h3>
            <h3>©2023 Copyright in reserved for lumine shop</h3>
            <FooterIcons />
        </div>
    );
};

export default BottomFooter;