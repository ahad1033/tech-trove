import { useEffect, useState } from "react";
import TopProduct from "./TopProduct";

const TopHundred = () => {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    fetch("topHundred.json")
      .then((res) => res.json())
      .then((data) => {
        setTopProducts(data);
      });
  }, []);

  return (
    <div className="section-container">
      <div className="flex justify-between items-center my-12">
        <h3 className="text-2xl mb-2">Top 100</h3>
        <button className="btn btn-active text-white btn-link">view all</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto">
        {topProducts.map((product) => (
          <TopProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default TopHundred;
