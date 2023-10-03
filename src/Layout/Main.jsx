import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar/NavBar";

const Main = () => {
    return (
        <div className="mx-auto">
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Main;