import { TbShoppingBagPlus } from "react-icons/tb";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="flex">
      <div className="relative w-full lg:w-1/3 h-[70vh]">
        <img
          src="https://i.ibb.co/hXjcCxW/banner-Left.jpg"
          alt="Banner"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute bottom-5 lg:bottom-5 right-5">
          <div className="flex flex-col items-center justify-center bg-white gap-2 py-8 px-8">
            <h1 className="text-xl font-bold text-black text-center">
              Summer Essentials
            </h1>
            <h3 className="text-xl" style={{ color: "#FF2E00" }}>
              20% off
            </h3>
          </div>
          <div className="bottom-0 bg-black py-1">
            <p className="text-white w-full text-center">19 Jul-30 Jul</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-1/2 lg:w-2/3">
        <div className="h-full object-cover flex flex-col items-center justify-center sm:gap-2 md:gap-4 lg:gap-7 text-white text-3xl sm:px-3 md:px-20 lg:px-0 bg-primary">
          <h1 className="text-xs md:text-4xl lg:text-4xl uppercase text-center">
            Discover the Latest Trends in Fashion
          </h1>
          <h2 className="hidden lg:flex text-xs md:text-base lg:text-base text-center">
            Poolside glam included From $4.99
          </h2>
          <div className="mx-auto">
            <Link to="/products">
              <button className="button-primary-wide">
                <TbShoppingBagPlus />
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
