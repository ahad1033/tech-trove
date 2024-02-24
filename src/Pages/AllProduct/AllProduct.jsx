import { useDispatch, useSelector } from "react-redux";
import ProductsBanner from "../../Components/Products/ProductsBanner/ProductsBanner";
import { useEffect } from "react";
import { getAsyncAllProduct } from "../../Redux/features/Products/ProductsSlice";
import { IoCartOutline } from "react-icons/io5";
import Footer from "../../Components/Shared/Footer/Footer";
import BottomSection from "../../Components/Home/BottomSection/BottomSection";

const AllProduct = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncAllProduct());
  }, [dispatch]);

  const products = useSelector((state) => state.Products.products);

  return (
    <>
      <ProductsBanner />
      <h1 className="text-center text-4xl mt-11 font-bold text-primary">
        Collect Now
      </h1>
      <div className="section-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto my-10">
        {products?.map((p) => (
          <>
            <div className="card xxl:w-96 bg-white shadow-lg lg:shadow-xl">
              <figure className="px-2 pt-3">
                <img src={p?.image} alt={p?.title} className="h-[250px]" />
              </figure>
              <div className="card-body">
                <p className="text-primary text-sm font-semibold">
                  {p?.category}
                </p>
                <h2 className="card-title lg:text-sm text-secondary">
                  {p?.title}
                </h2>
                <div className="card-actions justify-between mt-3">
                  <p>${p?.price}</p>
                  <button className="btn button-primary-sm">
                    <IoCartOutline /> Add
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      {/* megsafe section */}
      <div
        className="flex justify-around mt-16 lg:mt-32 p-3 md:p-5 lg:p-0"
        style={{ backgroundColor: "#F7DDD0" }}
      >
        <div className="flex flex-col justify-center">
          <h2 className="text-md md:text-xl lg:text-2xl font-semibold mb-2 lg:mb-5">
            MAGSAFE
          </h2>
          <p className="text-xs md:text-lg lg:text-xl">
            Snap on a magnetic case, wallet, or both. And get faster wireless
            charging.
          </p>
        </div>
        <figure>
          <img src="https://i.ibb.co/cyNpFYx/Iphone.png" alt="" />
        </figure>
      </div>
      <BottomSection />
      <Footer />
    </>
  );
};

export default AllProduct;
