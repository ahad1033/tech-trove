


const CheckoutModal = () => {
  return (
    <div>
      <h2>Hello</h2>
      <div className="form-control w-full mt-5 md:mt-8 lg:mt-8">
        <label className="label">
          <span className="label-text text-white mb-3">Your Name</span>
        </label>
        <div>
          <input
            type="name"
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
          className="textarea textarea-bordered h-24 border-white bg-transparent text-white"
          placeholder="Tell Us About Your Concerns"
        ></textarea>
      </div>
      {/* Submit button */}
      <button className="button-primary">Submit</button>
      {/* Close modal button */}
      <button className="button-secondary">Close</button>
    </div>
  );
};

export default CheckoutModal;
