import { AiFillInstagram } from 'react-icons/ai';
import { BiLogoTelegram, BiLogoFacebook } from 'react-icons/bi';

const SocialIcons = () => {
    const instagramLink = "https://www.instagram.com/";
    const facebookLink = "https://www.facebook.com/";
    const telegramLink = "https://web.telegram.org/k/";

    return (
        <div className='hidden md:flex lg:flex gap-2 text-gray-400'>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <AiFillInstagram className='text-2xl' />
            </a>
            <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                <BiLogoFacebook className='text-2xl' />
            </a>
            <a href={telegramLink} target="_blank" rel="noopener noreferrer">
                <BiLogoTelegram className='text-2xl' />
            </a>
        </div>
    );
};

export default SocialIcons;
