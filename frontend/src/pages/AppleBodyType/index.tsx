import { useNavigate } from "react-router-dom";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import image7 from "@/assets/AppleBodyType/7.png";
import image1 from "@/assets/AppleBodyType/1.png";
import image2 from "@/assets/AppleBodyType/2.png";
import image3 from "@/assets/AppleBodyType/3.png";
import image4 from "@/assets/AppleBodyType/4.png";
import image5 from "@/assets/AppleBodyType/5.png";
import image6 from "@/assets/AppleBodyType/6.png";

const AppleBodyType = () => {
  const navigate = useNavigate();

  const products = [
    {
	  name: "Oversized Button Up Shirt",
      price: "IDR 229.900",
      image: image5
    },
    {
	  name: "Oversized Scuba Graphic T-Shirt",
      price: "IDR 159.900",
      image: image4
    },
    {
      name: "Front Ruched Short Sleeve Shirt",
      price: "IDR 229.900",
      image: image3
    },
    {
	  name: "Oversized Front Tie Cardigan",
      price: "IDR 299.900",
      image: image2
    },
    {
	  name: "A-Line Denim Midi Skirt",
      price: "IDR 279.900",
      image: image1
    },
    {
      name: "Regular Fit Flare Denim Pants",
      price: "IDR 329.900",
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
          Apple Body Type
        </h1>
      </section>

      {/* Hero Image */}
      <section className="container mx-auto px-6 mb-12">
        <div className="bg-muted/20 rounded-lg p-8 flex justify-center">
          <img
            src={image7}
            alt="Apple Body Type"
            className="max-w-2xl w-full rounded-lg"
          />
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-6 mb-16">
        <p className="text-lg text-foreground max-w-4xl mx-auto leading-relaxed">
          Your apple body shape carries strength and softness in perfect balance. With fuller curves around your midsection and a naturally defined bust, your look shines when the focus moves upward and outward. Try flowy tops, wrap blouses, or V-neck styles that draw the eye to your neckline. Pair them with structured pants, A-line skirts, or straight-cut jeans for a balanced silhouette. Whether you're dressing up or keeping it casual, you radiate confidence when comfort and style meet in harmony.
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

export default AppleBodyType;
