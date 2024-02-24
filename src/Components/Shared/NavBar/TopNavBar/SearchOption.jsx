import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { AiOutlineDown } from "react-icons/ai";

const SearchOption = () => {
  return (
    <div className="hidden md:flex lg:flex items-center justify-center border border-1 rounded-xl gap-2">
      <input
        type="text"
        placeholder="Search Products"
        className="input-xs input-ghost pl-2 border-none bg-white"
      />
      <details className="dropdown hidden lg:block">
        <summary className="mx-1 text-xs btn text-white normal-case whitespace-nowrap">
          <h4 className="flex flex-row items-center gap-2">
            <Link to="/products">All Categories</Link>
          </h4>
        </summary>
      </details>
      <FaSearch className="text-3xl px-2 mx-2 border-s-2" />
    </div>
  );
};

export default SearchOption;
