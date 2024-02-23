import BottomNavCategory from './BottomNavCategory';
import Coupon from './Coupon';
import SignInComponent from './SignInComponent';

const BottomNavBar = () => {
    return (
        <div className='bg-[var(--bg-secondary)] navbar justify-between section-container hidden md:flex lg:flex'>
            <BottomNavCategory />
            <Coupon />
            <SignInComponent />
        </div>
    );
};

export default BottomNavBar;