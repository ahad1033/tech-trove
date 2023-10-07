import React, { useState } from 'react';
import { BiLogoVisa, BiLogoMastercard } from 'react-icons/bi';
import { FaCcPaypal } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';

const TopFooter = () => {

    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLanguageChange = (newLanguage) => {
        setSelectedLanguage(newLanguage);
        toggleDropdown();
    };

    return (
        <div className='section-container mt-5 pb-3 border-b-2 flex justify-center sm:justify-between'>
            <div className='flex gap-3 items-center text-gray-500'>
                <BiLogoVisa className='text-6xl' />
                <BiLogoMastercard className='text-4xl' />
                <FaCcPaypal className='text-3xl' />
            </div>
            <div className="sm:inline-block hidden relative text-center">
                <button
                    onClick={toggleDropdown}
                    className="px-4 py-2 flex flex-row-reverse items-center gap-2 text-black"
                > <AiOutlineDown />
                    {selectedLanguage}
                </button>
                {dropdownOpen && (
                    <div className="absolute top-full left-4 mt-1 w-32 rounded-md">
                        {selectedLanguage === 'English' ? (
                            <button
                                onClick={() => handleLanguageChange('Bangla')}
                                className="block"
                            >
                                Bangla
                            </button>
                        ) : (
                            <button
                                onClick={() => handleLanguageChange('English')}
                                className="block"
                            >
                                English
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TopFooter;