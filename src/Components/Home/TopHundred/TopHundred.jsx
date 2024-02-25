import { Link } from "react-router-dom";
import TopProduct from "./TopProduct";
import { useSelector } from "react-redux";
import Loader from "../../Loader";

const TopHundred = () => {
  const products = useSelector((state) => state.Products.products);
  const status = useSelector((state) => state.Products.status);

  return (
    <div className="section-container">
      <div className="flex justify-between items-center my-12">
        <h3 className="text-2xl mb-2">Top Sold Today</h3>
        <Link to="/products">
          <button className="btn btn-active text-black btn-link">
            view all
          </button>
        </Link>
      </div>
      <div
        className={` ${
          status === "loading"
            ? "w-full mx-auto items-center"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-3"
        }`}
      >
        {status === "loading" ? (
          <Loader />
        ) : (
          products
            ?.slice(0, 12)
            .map((p) => <TopProduct product={p} key={p.id} />)
        )}
      </div>
    </div>
  );
};

export default TopHundred;
