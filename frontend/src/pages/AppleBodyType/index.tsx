import { useNavigate } from "react-router-dom";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      image: image5,
	  url: "https://colorbox.co.id/products/oversized-button-up-shirt-off-white-25i?_pos=2&_sid=d64672d56&_ss=r"
    },
    {
	  name: "Oversized Scuba Graphic T-Shirt",
      price: "IDR 159.900",
      image: image4,
	  url: "https://colorbox.co.id/products/oversized-scuba-graphic-t-shirt-lt-blue-25g?_pos=1&_sid=67108d184&_ss=r"
    },
    {
      name: "Front Ruched Short Sleeve Shirt",
      price: "IDR 229.900",
      image: image3,
	  url: "https://colorbox.co.id/products/front-ruched-short-sleeve-shirt-black-25h?_pos=3&_sid=b09fb34e3&_ss=r"
    },
    {
	  name: "Oversized Front Tie Cardigan",
      price: "IDR 299.900",
      image: image2,
	  url: "https://colorbox.co.id/products/oversized-front-tie-cardigan-grey-25i?_pos=1&_sid=5c5fe287c&_ss=r"
    },
    {
	  name: "A-Line Denim Midi Skirt",
      price: "IDR 279.900",
      image: image1,
	  url: "https://colorbox.co.id/products/a-line-denim-midi-skirt-lt-blue-25g?_pos=4&_sid=e0593de97&_ss=r"
    },
    {
      name: "Regular Fit Flare Denim Pants",
      price: "IDR 329.900",
      image: image6,
	  url: "https://colorbox.co.id/products/regular-fit-flare-denim-pants-med-blue-25g?_pos=1&_sid=ee7e84e50&_ss=r"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

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
      <Footer />
    </div>
  );
};

export default AppleBodyType;
