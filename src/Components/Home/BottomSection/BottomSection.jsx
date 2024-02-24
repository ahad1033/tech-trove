import { useState } from "react";
import { PiNavigationArrowFill } from "react-icons/pi";
import Swal from "sweetalert2";

const BottomSection = () => {
  const [email, setEmail] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your email!",
      });
      return;
    }

    if (!isValidEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address!",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Thanks for subscribing!",
      text: "You will get updated with our offers everyday.",
      confirmButtonColor: "#4172DC",
    });
    setEmail("");
  };

  return (
    <div className="relative mt-16 md:mt-28 lg:mt-80">
      <div
        className="w-2/5 h-96 absolute inset-1/2 transform -translate-x-1/2  text-center px-36 py-20 rounded-xl -top-56  hidden lg:block"
        style={{ backgroundColor: "#7296AB" }}
      >
        <h1 className="mb-10 text-5xl text-white">
          Tech<span className="font-bold">Trove</span>
        </h1>
        <p className="mb-6 text-white font-semibold">
          Register your email not to miss the last minutes off+ Free delivery
        </p>
        <div className="form-control">
          <div className="input-group justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn" onClick={handleSubscribe}>
              <PiNavigationArrowFill className="text-white" />
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-full grid grid-cols-2 lg:grid-cols-4  items-center px-3 md:px-40 lg:px-60 md:pt-15 lg:pt-32 md:pb-15 lg:pb-32 lg:gap-32 text-black text"
        style={{ backgroundColor: "#d1e2eb" }}
      >
        <div className="items-start my-6 p-10">
          <h3 className="font-bold text-sm md:text-lg lg:text-lg">Company</h3>
          <p className="my-4 text-xs md:text-sm lg:text-sm">About Us</p>
          <p className="my-4 text-xs md:text-sm lg:text-sm">Our Store</p>
          <p className="my-4 text-xs md:text-sm lg:text-sm">Contact Us</p>
        </div>
        <div className="items-start my-6 p-10">
          <h3 className="font-bold text-sm md:text-lg lg:text-lg">Career</h3>
          <p className="my-4 text-xs md:text-sm lg:text-sm">Selling Programs</p>
          <p className="my-4 text-xs md:text-sm lg:text-sm">Advertise</p>
          <p className="my-4 text-xs md:text-sm lg:text-sm">Cooperation </p>
        </div>
        <div className="items-start my-6 p-10">
          <h3 className="font-bold text-sm md:text-lg lg:text-lg">
            How to Buy
          </h3>
          <p className="my-4 text-xs md:text-sm lg:text-sm">Making Payments</p>
          <p className="my-4 text-xs md:text-sm lg:text-sm">Delivery Options</p>
          <p className="my-4 text-xs md:text-sm lg:text-sm">New User Guide</p>
        </div>
        <div className="items-start my-6 p-10">
          <h3 className="font-bold text-sm md:text-lg lg:text-lg">Help</h3>
          <p className="my-4 text-xs md:text-sm lg:text-sm">Contact Us</p>
          <p className="my-4 text-xs md:text-sm lg:text-sm">FAQ</p>
          <p className="my-4 text-xs md:text-sm lg:text-sm">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
