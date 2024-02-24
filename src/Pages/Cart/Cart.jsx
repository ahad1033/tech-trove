import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Components/Shared/Footer/Footer";
import { updateItemCount } from "../../Redux/features/Cart/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.Cart.items);

  console.log("Cart", cartProducts);

  const handleIncreaseCount = (id) => {
    // Dispatch action to increase count
    dispatch(
      updateItemCount({
        id,
        count: cartProducts?.find((item) => item?.id === id).count + 1,
      })
    );
  };

  const handleDecreaseCount = (id) => {
    // Dispatch action to decrease count
    dispatch(
      updateItemCount({
        id,
        count: Math.max(
          cartProducts?.find((item) => item?.id === id).count - 1,
          0
        ),
      })
    );
  };

  return (
    <div className="section-container w-full mx-auto">
      {cartProducts?.map((i) => (
        <>
          <div className="card flex flex-row justify-between items-center w-full h-48 shadow-md mb-4 px-10">
            <div className="w-1/5 items-start">
              <figure className="px-10 pt-10">
                <img src={i?.image} alt={i?.title} className="h-20" />
              </figure>
            </div>
            <div className="card-body items-start">
              <p className="text-xm text-primary">{i?.category}</p>
              <h2 className="card-title">{i?.title}</h2>
              <p>Unit pirce: ${i?.price}</p>
            </div>
            <div className="flex items-center justify-center px-10 gap-2">
              <button className="btn w-[50px] h-[50px] bg-secondary border-none text-white text-xl " onClick={() => handleDecreaseCount(i?.id)}>-</button>
              <button className="btn w-[50px] h-[50px] bg-secondary border-none text-white text-xl " onClick={() => handleIncreaseCount(i?.id)}>+</button>
            </div>
            <div className="flex flex-col gap-2 items-end">
              <p>Order: {i?.count}pcs</p>
              <p>Total Price: {i?.count * i?.price}</p>
            </div>
          </div>
        </>
      ))}
      <Footer />
    </div>
  );
};

export default Cart;
