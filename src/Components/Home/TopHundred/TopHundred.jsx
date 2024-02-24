import TopProduct from "./TopProduct";
import { useSelector } from "react-redux";

const TopHundred = () => {
  // const [topProducts, setTopProducts] = useState([]);

  // useEffect(() => {
  //   fetch("topHundred.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTopProducts(data);
  //     });
  // }, []);

  const products = useSelector((state) => state.Products.products);

  return (
    <div className="section-container">
      <div className="flex justify-between items-center my-12">
        <h3 className="text-2xl mb-2">Top Sold Today</h3>
        <button className="btn btn-active text-black btn-link">view all</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto">
        {products?.slice(0, 12).map((p) => (
          <TopProduct product={p} key={p.id} />
        ))}
      </div>
    </div>
  );
};

export default TopHundred;
