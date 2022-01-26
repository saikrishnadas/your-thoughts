import Link from "next/link";
import image from "../public/icon.png";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src={image.src}
            alt=""
          />
        </Link>
      </div>
      <div className="flex items-center space-x-5 text-green-60">
        <a
          className="border px-4 py-1 rounded-full border-green-600 cursor-pointer"
          href="https://www.linkedin.com/in/sai-krishna-das/"
        >
          About
        </a>
      </div>
    </header>
  );
}

export default Header;
