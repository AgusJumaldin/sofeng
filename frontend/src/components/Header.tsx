import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#791401] text-white py-8 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-noto">
          HerShape <span className="font-zenkaku font-bold">x COLORBOX</span>
        </div>
        <nav className="flex gap-8">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/body-types" className="hover:underline">
            Body Types
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
