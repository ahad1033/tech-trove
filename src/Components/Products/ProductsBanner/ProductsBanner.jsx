const ProductsBanner = () => {
  return (
    <div>
      <div
      className="flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url('https://i.ibb.co/hXjcCxW/banner-Left.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          height: "80vh",
        }}
      >
       <div className="flex flex-col justify-center items-center bg-primary bg-opacity-50 rounded-xl px-3 lg:px-10 py-7 lg:py-8">
       <h1 className="text-xl md:text-4xl lg:text-7xl font-bold text-white">
          Explore Our Collection
        </h1>
        <p className="mt-4 text-xs md:text-xl lg:text-xl text-white text-center">
          Discover a wide range of high-quality products to suit your needs.
        </p>
       </div>
      </div>
    </div>
  );
};

export default ProductsBanner;
