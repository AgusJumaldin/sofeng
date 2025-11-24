import { useNavigate } from "react-router-dom";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      image: image5,
	  url: "https://colorbox.co.id/products/v-neck-long-sleeve-wrap-blouse-lt-brown-25c?_pos=1&_sid=3b69cb4bc&_ss=r"
    },
    {
	  name: "Ruffled Sleeveless Blouse",
      price: "IDR 149.900",
      image: image4,
	  url: "https://colorbox.co.id/products/ruffled-sleeveless-blouse-green-25h?_pos=2&_sid=c22bd3bb7&_ss=r"
    },
    {
      name: "Oversized Twill Blazer",
      price: "IDR 229.900",
      image: image3,
	  url: "https://colorbox.co.id/products/oversized-twill-blazer-taupe-25g?_pos=1&_sid=789854a1f&_ss=r"
    },
    {
	  name: "Regular Fit Flared Denim Pants",
      price: "IDR 329.900",
      image: image2,
	  url: "https://colorbox.co.id/products/regular-fit-flared-denim-pants-black-25i?_pos=1&_sid=fcb8b25fc&_ss=r"
    },
    {
	  name: "Printed Tier Mini Skirt",
      price: "IDR 249.900",
      image: image1,
	  url: "https://colorbox.co.id/products/printed-tier-mini-skirt-multicolor-25b?_pos=7&_sid=83bee930a&_ss=r"
    },
    {
      name: "Ruffle Tiered Mini Skirt",
      price: "IDR 249.900",
      image: image6,
	  url: "https://colorbox.co.id/products/ruffle-tiered-mini-skirt-beige-24i?_pos=1&_sid=19da98c95&_ss=r"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

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

export default RectangleBodyType;
