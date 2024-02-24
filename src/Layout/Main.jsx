import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar/NavBar";
import BackToTop from "../Components/BackToTop";

const Main = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <BackToTop />
    </>
  );
};

export default Main;
