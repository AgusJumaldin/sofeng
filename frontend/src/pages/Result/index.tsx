import { useNavigate } from "react-router-dom";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import image7 from "@/assets/HourglassBodyType/7.png";
import image1 from "@/assets/HourglassBodyType/1.png";
import image2 from "@/assets/HourglassBodyType/2.png";
import image3 from "@/assets/HourglassBodyType/3.png";
import image4 from "@/assets/HourglassBodyType/4.png";
import image5 from "@/assets/HourglassBodyType/5.png";
import image6 from "@/assets/HourglassBodyType/6.png";


const HourglassBodyType = () => {
  const navigate = useNavigate();

  const products = [
    {
      name: "Long Sleeve Off Shouldered Top",
      price: "IDR 85.900",
      image: image1
    },
    {
      name: "Peplum Sleeveless Top",
      price: "IDR 199.900",
      image: image2
    },
    {
      name: "Embroidered Button Up Camisole",
      price: "IDR 89.950",
      image: image3
    },
    {
      name: "Plaid Checks Midi Skirt",
      price: "IDR 299.900",
      image: image4
    },
    {
      name: "Boot Cut Flared Denim Pants",
      price: "IDR 164.950",
      image: image5
    },
    {
      name: "Contrast Rib Mini Dress",
      price: "IDR 299.900",
      image: image6
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-[hsl(0,65%,30%)] text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-semibold">HerShape x COLORBOX</div>
          <nav className="flex gap-6">
            <button onClick={() => navigate("/scan")} className="hover:underline">
              Start Body Scan
            </button>
            <button onClick={() => navigate("/body-types")} className="hover:underline">
              Body Types
            </button>
          </nav>
        </div>
      </header>

      {/* Title */}
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-foreground text-center">
          Hourglass Body Type
        </h1>
      </section>

      {/* Hero Image */}
      <section className="container mx-auto w-[1278px] h-[639px]">
        <div className="bg-muted/20 rounded-lg p-8 flex justify-center">
          <img
            src={image7}
            alt="Hourglass Body Type"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-6 mb-16">
        <p className="text-lg text-foreground max-w-4xl mx-auto leading-relaxed">
          Your hourglass body shape is beautifully balanced, your shoulders and hips align, while your waist adds that natural definition everyone admires. To accentuate your figure, opt for wrap dresses, crop tops, or high-waisted jeans that hug your curves in all the right places. Fitted silhouettes and soft fabrics will highlight your natural balance without compromising comfort. Whether you're dressing up for a night out or keeping it casual, you shine when your style celebrates your shape.
        </p>
      </section>

      {/* Products */}
      <section className="container mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">
          Pieces that we recommend:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-background rounded-lg overflow-hidden shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(0,65%,30%)] text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold">HerShape X COLORBOX</div>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:opacity-80" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:opacity-80" />
              <Youtube className="w-5 h-5 cursor-pointer hover:opacity-80" />
              <Instagram className="w-5 h-5 cursor-pointer hover:opacity-80" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HourglassBodyType;
