import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";

const BottomNavCategory = () => {
  return (
    <div className="text-white m-0 p-0">
      <Link to="/products">
        <h1 className="font-bold font-5xl flex gap-2 items-center">
          <span>
            <BiCategory />
          </span>
          Categories
        </h1>
      </Link>
      <div className="flex gap-2 ml-10">
        {/* <p className='flex text-sm flex-row place-items-center'>USD <span><AiOutlineDown className="ml-1 h-3" /></span></p>
                <p className='flex text-sm flex-row place-items-center'>English <span><AiOutlineDown className="ml-1 h-3" /></span></p> */}
      </div>
    </div>
  );
};

export default BottomNavCategory;
