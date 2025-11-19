import { useNavigate } from "react-router-dom";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import image7 from "@/assets/InvertedTriangleBodyType/7.png";
import image1 from "@/assets/InvertedTriangleBodyType/1.png";
import image2 from "@/assets/InvertedTriangleBodyType/2.png";
import image3 from "@/assets/InvertedTriangleBodyType/3.png";
import image4 from "@/assets/InvertedTriangleBodyType/4.png";
import image5 from "@/assets/InvertedTriangleBodyType/5.png";
import image6 from "@/assets/InvertedTriangleBodyType/6.png";

const InvertedTriangleBodyType = () => {
  const navigate = useNavigate();

  const products = [
    {
      name: "Two Tone Cropped Cardigan",
      price: "IDR 229.900",
      image: image1,
	  url: "https://colorbox.co.id/products/two-tone-cropped-cardigan-dark-grey-25f?_pos=1&_sid=0f266e265&_ss=r"
    },
    {
      name: "Cropped Halter Vest",
      price: "IDR 159.900",
      image: image2,
	  url: "https://colorbox.co.id/products/cropped-halter-vest-taupe-25g?_pos=1&_sid=58976b831&_ss=r"
    },
    {
	  name: "Tied Up Long Sleeve Cardigan",
      price: "IDR 259.900",
      image: image6,
	  url: "https://colorbox.co.id/products/tied-up-long-sleeve-cardigan-green-25e?_pos=1&_sid=287b32a8f&_ss=r"
	},
	{
      name: "Front Pleats Corduroy Shorts",
      price: "IDR 229.990",
      image: image3,
	  url: "https://colorbox.co.id/products/front-pleats-corduroy-shorts-lt-grey-25h?_pos=2&_sid=757333d02&_ss=r"
    },
    {
      name: "A-Line Satin Long Skirt",
      price: "IDR 209.900",
      image: image4,
	  url: "https://colorbox.co.id/products/a-line-satin-long-skirt-beige-25g?_pos=1&_sid=038628e5a&_ss=r"
    },
    {
      name: "Box Pleated Mini Skort",
      price: "IDR 199.900",
      image: image5,
	  url: "https://colorbox.co.id/products/box-pleated-mini-skort-dark-brown-25h?_pos=3&_sid=9ac6c2fa9&_ss=r"
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
          Inverted Triangle Body Type
        </h1>
      </section>

      {/* Hero Image */}
      <section className="container mx-auto px-6 mb-12">
        <div className="bg-muted/20 rounded-lg p-8 flex justify-center">
          <img
            src={image7}
            alt="Inverted Triangle Body Type"
            className="max-w-2xl w-full rounded-lg"
          />
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-6 mb-16">
        <p className="text-lg text-foreground max-w-4xl mx-auto leading-relaxed">
          Your inverted triangle body shape is bold and athletic, with strong shoulders and a sleek, tapered waist. To create harmony, soften your upper frame with V-necks or wrap tops and add volume below with flared skirts or wide-leg pants. Balanced proportions and fluid fabrics help highlight your confident shape. No matter the look, your style stands out with strength and effortless poise.
        </p>
      </section>

      {/* Products */}
      <section className="container mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">
          Pieces that we recommend:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <a
    key={index}
    href={product.url}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
  >
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
  </a>
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

export default InvertedTriangleBodyType;
