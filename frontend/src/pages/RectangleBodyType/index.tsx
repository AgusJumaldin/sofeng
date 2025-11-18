import { useNavigate } from "react-router-dom";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import image7 from "@/assets/RectangleBodyType/7.png";
import image1 from "@/assets/RectangleBodyType/1.png";
import image2 from "@/assets/RectangleBodyType/2.png";
import image3 from "@/assets/RectangleBodyType/3.png";
import image4 from "@/assets/RectangleBodyType/4.png";
import image5 from "@/assets/RectangleBodyType/5.png";
import image6 from "@/assets/RectangleBodyType/6.png";

const RectangleBodyType = () => {
  const navigate = useNavigate();

  const products = [
    {
	  name: "V-Neck Long Sleeve Wrap Blouse",
      price: "IDR 179.900",
      image: image5
    },
    {
	  name: "Ruffled Sleeveless Blouse",
      price: "IDR 149.900",
      image: image4
    },
    {
      name: "Oversized Twill Blazer",
      price: "IDR 229.900",
      image: image3
    },
    {
	  name: "Regular Fit Flared Denim Pants",
      price: "IDR 329.900",
      image: image2
    },
    {
	  name: "Printed Tier Mini Skirt",
      price: "IDR 249.900",
      image: image1
    },
    {
      name: "Ruffle Tiered Mini Skirt",
      price: "IDR 249.900",
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
          Rectangle Body Type
        </h1>
      </section>

      {/* Hero Image */}
      <section className="container mx-auto px-6 mb-12">
        <div className="bg-muted/20 rounded-lg p-8 flex justify-center">
          <img
            src={image7}
            alt="Rectangle Body Type"
            className="max-w-2xl w-full rounded-lg"
          />
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-6 mb-16">
        <p className="text-lg text-foreground max-w-4xl mx-auto leading-relaxed">
          Your rectangle body shape is naturally balanced, with shoulders, waist, and hips that align in a sleek and athletic way. To enhance your figure, go for outfits that create gentle curves, such as belted dresses, peplum tops, or high-waisted pants that define your waist. Layered styles and textured fabrics can add dimension while keeping you effortlessly chic. Whether you're dressing for a casual day or a special night out, you shine when your style adds shape and structure to your look.
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

export default RectangleBodyType;
