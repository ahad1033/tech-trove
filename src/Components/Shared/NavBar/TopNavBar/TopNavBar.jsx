import Logo from './logo';
import TopNavOptions from './TopNavOptions';
// import SearchOption from './SearchOption';
import SocialIcons from './SocialIcons';

const TopNavBar = () => {

    return (
        <div className="navbar flex flex-row-reverse md:flex-col lg:flex-row justify-between bg-white text-black section-container py-3 md:py-3 lg:py-7 gap-0 lg:gap-10">
            <div className="w-full flex flex-row items-center justify-between">
                <Logo />
                {/* <SearchOption /> */}
            </div>
            <div className="flex mt-0 md:mt-4 lg:mt-0 justify-end gap-4 w-full items-center">
                <TopNavOptions />
                <SocialIcons />
            </div>
        </div>
    );
};

export default TopNavBar;