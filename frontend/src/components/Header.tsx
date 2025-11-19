import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[hsl(0,65%,30%)] text-white py-4 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-serif">
          HerShape <span className="font-bold">x COLORBOX</span>
        </Link>
        <nav className="flex gap-8">
          <Link to="/scan" className="hover:underline">
            Start Body Scan
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
