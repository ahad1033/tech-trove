import { useState } from "react";
import Footer from "../../Components/Shared/Footer/Footer";
import { GoInfo } from "react-icons/go";

const Cart = () => {
  const [localCart, setLocalCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    return storedCart || { items: [] };
  });

  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleIncreaseCount = (id) => {
    setLocalCart((prevCart) => {
      const updatedItems = prevCart.items.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      );
      const updatedCart = { ...prevCart, items: updatedItems };
      updateLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const handleDecreaseCount = (id) => {
    setLocalCart((prevCart) => {
      const updatedItems = prevCart.items.map((item) =>
        item.id === id ? { ...item, count: Math.max(item.count - 1, 0) } : item
      );
      const updatedCart = { ...prevCart, items: updatedItems };
      updateLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  // Calculate grand total
  const grandTotal = localCart.items
    .reduce((total, item) => total + item.count * item.price, 0)
    .toFixed(2);

  return (
    <div className="section-container w-full mx-auto">
      <div className="min-h-[75vh] md:min-h-[69vh] lg:min-h-[54vh] xl:min-h-[65vh] flex-grow-1 ">
        {localCart?.items?.length > 0 ? (
          localCart?.items?.map((i) => (
            <div
              key={i.id}
              className="card flex flex-row justify-between items-center w-full h-48 shadow-md mb-4 px-10"
            >
              <div className="w-1/5 items-start">
                <figure className="px-10 pt-10">
                  <img src={i?.image} alt={i?.title} className="h-20" />
                </figure>
              </div>
              <div className="card-body items-start">
                <p className="text-xm text-primary">{i?.category}</p>
                <h2 className="card-title">{i?.title}</h2>
                <p>Unit price: ${i?.price}</p>
              </div>
              <div className="flex items-center justify-center px-10 gap-2">
                <button
                  className="btn w-[50px] h-[50px] bg-secondary border-none text-white text-xl "
                  onClick={() => handleDecreaseCount(i?.id)}
                >
                  -
                </button>
                <button
                  className="btn w-[50px] h-[50px] bg-secondary border-none text-white text-xl "
                  onClick={() => handleIncreaseCount(i?.id)}
                >
                  +
                </button>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <p>Order: {i?.count}pcs</p>
                <p>Total Price: ${(i?.count * i?.price).toFixed(2)}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="w-full flex items-center text-center text-red-500 text-sm mt-4">
            <GoInfo className="me-2 text-lg text-red-5" />
            <span className="text-red"> No product added in the cart yet</span>
          </p>
        )}

        {localCart?.items?.length > 0 && (
          <div className="flex items-center justify-between mt3">
            <div className="flex justify-end">
              <p className="text-xl font-bold">Grand Total: ${grandTotal}</p>
            </div>
            <div>
              <button
                className="button-primary-wide"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
