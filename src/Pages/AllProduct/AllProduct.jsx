import { useDispatch, useSelector } from "react-redux";
import ProductsBanner from "../../Components/Products/ProductsBanner/ProductsBanner";
import { useEffect } from "react";
import { getAsyncAllProduct } from "../../Redux/features/Products/ProductsSlice";
import { IoCartOutline } from "react-icons/io5";
import Footer from "../../Components/Shared/Footer/Footer";

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
      <Footer />
    </>
  );
};

export default AllProduct;
