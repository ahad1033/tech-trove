import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { PiTelegramLogoDuotone } from "react-icons/pi";

const FooterIcons = () => {
  return (
    <div className="flex gap-2 justify-between">
      <h1 className="font-semibold text-secondary">Contact Us:</h1>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineInstagram className="text-xl text-secondary" />
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiFacebook className="text-xl text-secondary" />
      </a>
      <a
        href="https://web.telegram.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <PiTelegramLogoDuotone className="text-xl text-secondary" />
      </a>
    </div>
  );
};

export default FooterIcons;
