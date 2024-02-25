import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Card = () => {
  const [localCart, setLocalCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    return storedCart || { items: [] };
  });

  // console.log(localCart);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || {
        items: [],
      };
      setLocalCart(storedCart);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="flex items-center gap-2">
      <div>
        <Link to="/cart">
          <p className="flex flex-row gap-2 items-center text-white">
            <span>
              <IoCartOutline />
            </span>
            Cart
          </p>
        </Link>
      </div>
      {/* <div className="flex justify-center items-center">
        <p className="bg-primary rounded-full w-[28px] pt-1 h-[28px] text-center">
          {localCart?.items?.length || 0}
        </p>
      </div> */}
    </div>
  );
};

export default Card;
