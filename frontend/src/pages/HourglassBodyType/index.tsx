import { useNavigate } from "react-router-dom";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      image: image1,
	  url: "https://colorbox.co.id/products/long-sleeve-off-shoulder-top-dark-red-25f?srsltid=AfmBOopLxiymXA1Q2qnOwuX0H2jqQuRaH_N6xbCU4ngoSrEkC3vCJeTc"
    },
    {
      name: "Peplum Sleeveless Top",
      price: "IDR 199.900",
      image: image2,
	  url: "https://colorbox.co.id/products/peplum-sleeveless-top-black-25i?_pos=1&_sid=824d07a6d&_ss=r"
    },
    {
      name: "Embroidered Button Up Camisole",
      price: "IDR 89.950",
      image: image3,
	  url: "https://colorbox.co.id/products/embroidered-button-up-camisole-off-white-25e?_pos=2&_sid=e59bf7aaa&_ss=r"
    },
    {
      name: "Plaid Checks Midi Skirt",
      price: "IDR 299.900",
      image: image4,
	  url: "https://colorbox.co.id/products/plaid-checks-midi-skirt-brown-25j?_pos=1&_sid=387cf8f09&_ss=r"
    },
    {
      name: "Boot Cut Flared Denim Pants",
      price: "IDR 164.950",
      image: image5,
	  url: "https://colorbox.co.id/products/boot-cut-flared-denim-pants-dark-blue-25e?_pos=1&_sid=be198eba3&_ss=r"
    },
    {
      name: "Contrast Rib Mini Dress",
      price: "IDR 299.900",
      image: image6,
	  url: "https://colorbox.co.id/products/contrast-rib-mini-dress-black-25h?_pos=1&_sid=3b8c0a31c&_ss=r"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

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
          {products.map((product, index) => (<a
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

export default HourglassBodyType;
