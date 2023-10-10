import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';

const BlogFooter = () => {
    return (
        <footer  style={{ backgroundColor: '#262626' }}>
            <div className='section-container py-5 flex justify-between'>
                <div>
                    <div className='text-white flex gap-3 py-2'>
                        <p>Contact Us</p>
                        <p>Advertise</p>
                        <p>Work with us</p>
                        <p>Career</p>
                        <p>Partners</p>
                        <p>Subscriptions</p>
                    </div>
                    <div className='text-white flex gap-3 py-3'>
                        <p>Site Map</p>
                        <p>Home Deliverty</p>
                        <p>Customer Service</p>
                        <p>Terms of Servic</p>
                    </div>
                </div>
                <div>
                    <div className='text-white py-3'>
                        <h2>Follow Us On Social Networks</h2>
                    </div>
                    <div className='text-white flex gap-3 py-3'>
                        <FaFacebookF />
                        <AiOutlineTwitter />
                        <AiFillYoutube />
                        <BsInstagram />
                    </div>
                </div>
            </div>
            <div className="text-center text-white p-4 border-t-2 border-white">
                <aside>
                    <p>Copyright © 2023 - All right reserved by TechTrove Ltd</p>
                </aside>
            </div>
        </footer>
    );
};

export default BlogFooter;