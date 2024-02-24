import { useState } from "react";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSend = () => {
    if (!name || !email || !description) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
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

    setName("");
    setEmail("");
    setDescription("");

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Your message has been sent successfully.",
    });
  };

  return (
    <div className="section-container flex flex-row my-10 lg:my-20">
      <div
        className="w-full lg:w-1/2 p-5 md:p-10 lg:p-14 relative"
        style={{ backgroundColor: "#262626" }}
      >
        <h2 className="text-3xl lg:text-5xl font-bold text-white">
          Tell us about your{" "}
          <p className="mt-3" style={{ color: "#FFC94B" }}>
            Concerns
          </p>
        </h2>
        <div className="form-control w-full mt-5 md:mt-8 lg:mt-8">
          <label className="label">
            <span className="label-text text-white mb-3">Your Name</span>
          </label>
          <div>
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name Here"
              className="input input-bordered border-white w-full bg-transparent text-white"
            />
          </div>
        </div>
        <div className="form-control w-full mt-5 md:mt-8 lg:mt-8">
          <label className="label">
            <span className="label-text text-white mb-3">Email</span>
          </label>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Here"
              className="input input-bordered border-white w-full bg-transparent text-white"
            />
          </div>
        </div>
        <div className="form-control mt-5 md:mt-8 lg:mt-8">
          <label className="label">
            <span className="label-text text-white mb-3">Description</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered h-24 border-white bg-transparent text-white"
            placeholder="Tell Us About Your Conceerns"
          ></textarea>
        </div>
        <button onClick={handleSend} className="btn button-primary-wide mt-10">
          Send
        </button>
      </div>
      <div className="hidden lg:w-1/2 relative lg:block">
        <div
          className="h-full"
          style={{
            background: `url('https://i.ibb.co/hXjcCxW/banner-Left.jpg') center/cover no-repeat`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ContactUs;
