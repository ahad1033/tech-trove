

const SharedBanner = () => {
  return (
    <div className="section-container flex flex-col md:flex-row lg:flex-row gap-5">
      <div className="flex flex-row rounded-lg w-full md:w-1/2 lg:w-1/2 px-3">
        <div
          className="flex flex-col text-white px-5 lg:px-10 py-7 lg:py-16 w-1/2 rounded-s-lg justify-around"
          style={{ backgroundColor: "#BF2E3B" }}
        >
          <h2 className="text-md md:text-lg lg:text-4xl font-bold">
            Never-Ending Summer
          </h2>
          <p className="text-xs md:text-sm lg:text-xl">
            Throwback Shirts & all-day dressed
          </p>
          <p className="text-xs lg:text-lg underline">Explore all category</p>
        </div>
        <div className="w-1/2">
          <img
            className="rounded-e-lg h-full w-full"
            // src="https://i.ibb.co/k6h3cNs/Rectangle-1078.png"
            src="/item1.webp"
            alt="banner"
          />
        </div>
      </div>
      <div className="flex flex-row rounded-lg w-full md:w-1/2 lg:w-1/2 px-3">
        <div
          className="flex flex-col text-white px-5 lg:px-10 py-7 lg:py-16 w-1/2 rounded-s-lg justify-around"
          style={{ backgroundColor: "#1D5159" }}
        >
          <h2 className="text-md md:text-lg lg:text-4xl font-bold">
            Never-Ending Summer
          </h2>
          <p className="text-xs md:text-sm lg:text-xl">
            Throwback Shirts & all-day dressed
          </p>
          <p className="text-xs lg:text-lg underline">Explore all category</p>
        </div>
        <div className="w-1/2">
          <img
            className="rounded-e-lg h-full w-full"
            // src="https://i.ibb.co/pytDMDH/Rectangle-1078.png"
            src="item2.webp"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default SharedBanner;
