import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(0,75%,20%)] text-white py-8 px-8 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <p className="text-xl font-serif">
            HerShape <span className="font-bold">X COLORBOX</span>
          </p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
