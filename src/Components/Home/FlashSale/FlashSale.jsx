import Swal from "sweetalert2";
import Product from "./Product";
import { useSelector } from "react-redux";

const FlashSale = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("flashSales.json")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  const products = useSelector((state) => state.Products.products);

  const handleViewAll = () => {
    Swal.fire({
      position: "top-end",
      icon: "info",
      title: "No more offer today!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    // TO DO.....
    <section className="section-container">
      <div className="flex justify-between items-center my-12">
        <h3 className="text-2xl mb-2">Flash Sell</h3>
        <button className="text-black btn btn-link" onClick={handleViewAll}>
          view all
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-3">
        {products?.slice(16, 20).map((p) => (
          <Product product={p} key={p.id} />
        ))}
      </div>
    </section>
  );
};

export default FlashSale;
