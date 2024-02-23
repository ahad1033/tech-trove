import TopNavBar from "./TopNavBar/TopNavBar";
import BottomNavBar from "./BottomNavBar/BottomNavBar";
import CategoryNav from "./CategoryNav/CategoryNav";

const NavBar = () => {
  return (
    <>
      <TopNavBar />
      <BottomNavBar />
      <div className="hidden md:block lg:block">
        <CategoryNav />
      </div>
    </>
  );
};

export default NavBar;
