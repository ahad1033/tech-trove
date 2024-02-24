import { useDispatch, useSelector } from "react-redux";
import ProductsBanner from "../../Components/Products/ProductsBanner/ProductsBanner";
import { useEffect, useState } from "react";
import { getAsyncAllProduct } from "../../Redux/features/Products/ProductsSlice";
import { IoCartOutline } from "react-icons/io5";
import Footer from "../../Components/Shared/Footer/Footer";
import BottomSection from "../../Components/Home/BottomSection/BottomSection";
import { FaSearch } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { addToCart } from "../../Redux/features/Cart/CartSlice";
import Swal from "sweetalert2";

const AllProduct = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAsyncAllProduct());
  }, [dispatch]);

  const products = useSelector((state) => state.Products.products);

  useEffect(() => {
    // Filter products based on search input
    const filtered = products.filter(
      (product) =>
        product?.title?.toLowerCase().includes(searchInput.toLowerCase()) ||
        product?.category?.toLowerCase().includes(searchInput.toLowerCase())
    );

    setFilteredProducts(filtered);
  }, [searchInput, products]);

  useEffect(() => {
    const updatedCart = JSON.stringify(cart);
    localStorage.setItem("cart", updatedCart);
  }, [cart]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));

    Swal.fire({
      icon: "success",
      position: "top-right",
      title: "Item added to cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <ProductsBanner />
      <div className="flex justify-between items-center section-container mt-4">
        <h3 className="text-2xl mb-2">Collect Yours</h3>
        <div className="flex items-center h-14 w-2/5 justify-between px-3 border border-1 rounded-xl gap-2">
          <input
            type="text"
            placeholder="Search Products"
            className="pl-2 border-none border-white bg-white focus:outline-none"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <FaSearch className="text-4xl ps-3 mx-3  border-s-2" />
        </div>
      </div>

      <div className="section-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto my-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <>
              <div
                key={p.id}
                className="card xxl:w-96 bg-white shadow-lg lg:shadow-xl"
              >
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
                    <button
                      onClick={() => handleAddToCart(p)}
                      className="btn button-primary-sm"
                    >
                      <IoCartOutline /> Add
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))
        ) : (
          <p className="w-full flex items-center text-red-500 text-sm mt-4">
            <GoInfo className="me-2 text-lg text-red-5" />
            <span className="text-red"> No product founds</span>
          </p>
        )}
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
