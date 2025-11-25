import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#791401] text-white py-8 px-4 mt-auto">
      <div className="mw-full pl-20">
        <div className="mb-4">
          <p className="text-xl font-noto">
            HerShape <span className="font-zenkaku font-bold">X COLORBOX</span>
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
