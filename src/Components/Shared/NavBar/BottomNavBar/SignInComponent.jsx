import { RiUserLine } from "react-icons/ri";
// import { MdFavoriteBorder } from "react-icons/md";
import Card from "../Card";
import { Link } from "react-router-dom";

const SignInComponent = () => {
  return (
    <div className="gap-10 text-white m-0 p-0">
      
      <Link to="/signin">
        <p className="gap-2 flex flex-row items-center">
          <span>
            <RiUserLine />
          </span>
          Sign In
        </p>
      </Link>
      {/* <p className="gap-2 flex flex-row items-center">
        <span>
          <MdFavoriteBorder />
        </span>
        Favourite
      </p> */}
      <Card />
    </div>
  );
};

export default SignInComponent;
