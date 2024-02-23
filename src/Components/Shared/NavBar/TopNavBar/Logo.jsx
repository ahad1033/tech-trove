import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <h1 className="text-3xl">
          Tech<span className="font-bold">Trove</span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
