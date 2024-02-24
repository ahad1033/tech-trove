import { useDispatch } from "react-redux";
import Footer from "../../Components/Shared/Footer/Footer";
import { updateItemCount } from "../../Redux/features/Cart/CartSlice";
import { GoInfo } from "react-icons/go";

const Cart = () => {
  const dispatch = useDispatch();
  
  const localStorageCart = JSON.parse(localStorage.getItem("cart"));

  const handleIncreaseCount = (id) => {
    const itemToUpdate = localStorageCart?.items?.find((item) => item?.id === id);

    if (itemToUpdate) {
      dispatch(
        updateItemCount({
          id,
          count: itemToUpdate.count + 1,
        })
      );
    }
  };

  const handleDecreaseCount = (id) => {
    const itemToUpdate = localStorageCart?.items?.find((item) => item?.id === id);

    if (itemToUpdate) {
      dispatch(
        updateItemCount({
          id,
          count: Math.max(itemToUpdate.count - 1, 0),
        })
      );
    }
  };

  // Calculate grand total
  const grandTotal = localStorageCart?.items?.reduce(
    (total, item) => total + item.count * item.price,
    0
  );

  return (
    <div className="section-container w-full mx-auto">
      <div className="min-h-[75vh] md:min-h-[69vh] lg:min-h-[54vh] xl:min-h-[65vh] flex-grow-1 ">
        {localStorageCart?.items?.length > 0 ? (
          localStorageCart?.items?.map((i) => (
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
                <p>Total Price: ${i?.count * i?.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="w-full flex items-center text-center text-red-500 text-sm mt-4">
            <GoInfo className="me-2 text-lg text-red-5" />
            <span className="text-red"> No product added in the cart yet</span>
          </p>
        )}

        {localStorageCart?.items?.length > 0 && (
          <div className="flex justify-end">
            <p className="text-xl font-bold">Grand Total: ${grandTotal}</p>
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
