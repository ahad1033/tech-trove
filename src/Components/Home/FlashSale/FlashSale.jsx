import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import Product from './Product';

const FlashSale = () => {

    const [ products, setProducts] = useState([]);

    useEffect( () => {
        fetch('flashSales.json')
        .then (res => res.json())
        .then (data => setProducts(data))
    },[])
    // console.log(products);
    return (
        // TO DO.....
        <section className='section-container'>
            <SectionTitle title={"Flash Sale"} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {
                    products.map(product => <Product product={product} key={product.id}  />)
                }
            </div>
        </section>
    );
};

export default FlashSale;

// import React, { useEffect, useState } from 'react';
// import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
// import Product from './Product';
// import Swiper from 'swiper';

// import 'swiper/swiper-bundle.css';

// const FlashSale = () => {
//   const [products, setProducts] = useState([]);
//   const swiperRef = React.createRef();

//   useEffect(() => {
//     fetch('flashSales.json')
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .then(() => {
//         // Initialize Swiper when products data is available
//         new Swiper(swiperRef.current, {
//           // Swiper options and configuration here
//           slidesPerView: 3,
//           spaceBetween: 10,
//           // Add more options as needed
//         });
//       });
//   }, []);

//   return (
//     <section className="section-container">
//       <SectionTitle title={"Flash Sale"} />
//       <div className="swiper-container" ref={swiperRef}>
//         <div className="swiper-wrapper">
//           {products.map((product) => (
//             <div className="swiper-slide" key={product.id}>
//               <Product product={product} />
//             </div>
//           ))}
//         </div>
//         {/* <div className="swiper-button-next"></div>
//         <div className="swiper-button-prev"></div> */}
//       </div>
//     </section>
//   );
// };

// export default FlashSale;
