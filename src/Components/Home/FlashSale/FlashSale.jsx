import { useEffect, useState } from "react";
import Product from "./Product";

const FlashSale = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("flashSales.json")
      // fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    // TO DO.....
    <section className="section-container">
      <div className="flex justify-between items-center my-12">
        <h3 className="text-2xl mb-2">Flash Sale</h3>
        <button className="btn text-white btn-link">view all</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default FlashSale;
