import SharedBanner from "../../Shared/SharedBanner/SharedBanner";

const BottomBanner = () => {
  return (
    <div className="my-20">
      <SharedBanner />
      {/* middle carousel start */}
      <div
        className="flex justify-around my-16 p-3 md:p-5 lg:p-0"
        style={{ backgroundColor: "#F7DDD0" }}
      >
        <div className="flex flex-col justify-center">
          <h2 className="text-md md:text-xl lg:text-2xl font-semibold mb-5">
            MAGSAFE
          </h2>
          <p className="text-xs md:text-lg lg:text-xl">
            Snap on a magnetic case, wallet, or both. And get faster wireless
            charging.
          </p>
        </div>
        <figure>
          <img src="https://i.ibb.co/cyNpFYx/Iphone.png" alt="" />
        </figure>
      </div>
      {/* middle carousel end */}
      <div className="section-container flex flex-col md:flex-row lg:flex-row gap-5">
        <div className="flex flex-row rounded-lg w-full md:w-1/2 lg:w-1/2 px-3">
          <div
            className="flex flex-col text-white px-5 lg:px-10 py-7 lg:py-16 w-1/2 rounded-s-lg justify-around"
            style={{ backgroundColor: "#D11FB5" }}
          >
            <h2 className="text-md md:text-lg lg:text-4xl font-bold">
              The Pinky Barbie Edition
            </h2>
            <p className="text-xs md:text-sm lg:text-xl">Lets play dress up</p>
            <p className="text-xs lg:text-lg underline">Explore all category</p>
          </div>
          <div className="w-1/2">
            {/* <div className="h-full bg-cover" style={{ background: `url('https://i.ibb.co/98zB4Sf/Rectangle-1078.png') center/cover no-repeat` }}></div> */}
            <img
              className="rounded-e-lg h-full w-full"
              src="https://i.ibb.co/98zB4Sf/Rectangle-1078.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-row rounded-lg w-full md:w-1/2 lg:w-1/2 px-3">
          <div
            className="flex flex-col text-white px-5 lg:px-10 py-7 lg:py-16 w-1/2 rounded-s-lg justify-around"
            style={{ backgroundColor: "#0186C4" }}
          >
            <h2 className="text-md md:text-lg lg:text-4xl font-bold">
              Best Sellers Everyone Love
            </h2>
            <p className="text-xs md:text-sm lg:text-xl">
              poolside glam include
            </p>
            <p className="text-xs lg:text-lg underline">Explore all category</p>
          </div>
          <div className="w-1/2">
            {/* <div className="h-full bg-cover" style={{ background: `url('https://i.ibb.co/F62pqJN/Rectangle-1078.png') center/cover no-repeat` }}></div> */}
            <img
              className="rounded-e-lg h-full w-full"
              src="https://i.ibb.co/F62pqJN/Rectangle-1078.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
