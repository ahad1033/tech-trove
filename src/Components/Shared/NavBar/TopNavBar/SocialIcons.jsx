import { AiFillInstagram } from 'react-icons/ai';
import { BiLogoTelegram, BiLogoFacebook } from 'react-icons/bi';

const SocialIcons = () => {
    return (
        <div className='hidden md:flex lg:flex gap-2 text-gray-400'>
            <AiFillInstagram className='text-2xl' />
            <BiLogoFacebook className='text-2xl' />
            <BiLogoTelegram className='text-2xl' />
        </div>
    );
};

export default SocialIcons;