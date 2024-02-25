import { BiLogoVisa, BiLogoMastercard } from "react-icons/bi";
import { FaCcPaypal } from "react-icons/fa";

import FooterIcons from "./FooterIcons";

const TopFooter = () => {
  return (
    <>
      <div className="section-container mt-4 pb-1 flex justify-center sm:justify-between">
        <div className="flex gap-6 items-center text-gray-500">
          <BiLogoVisa className="text-6xl" />
          <BiLogoMastercard className="text-4xl" />
          <FaCcPaypal className="text-2xl" />
        </div>
        <div className="hidden sm:flex items-center text-center">
          <FooterIcons />
        </div>
      </div>
      <hr />
    </>
  );
};

export default TopFooter;
