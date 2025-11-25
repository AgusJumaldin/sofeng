import { useNavigate } from "react-router-dom";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import image7 from "@/assets/PearBodyType/7.png";
import image1 from "@/assets/PearBodyType/1.png";
import image2 from "@/assets/PearBodyType/2.png";
import image3 from "@/assets/PearBodyType/3.png";
import image4 from "@/assets/PearBodyType/4.png";
import image5 from "@/assets/PearBodyType/5.png";
import image6 from "@/assets/PearBodyType/6.png";

const PearBodyType = () => {
  const navigate = useNavigate();

  const products = [
    {
      name: "Puff Sleeve Blouse with Lace Trim",
      price: "IDR 179.900",
      image: image1,
	  url: "https://colorbox.co.id/products/puff-sleeve-blouse-with-lace-trim-lt-pink-25h?_pos=10&_sid=10945b996&_ss=r"
    },
    {
	  name: "Button Up Wide Collar Blouse",
      price: "IDR 179.900",
      image: image4,
	  url: "https://colorbox.co.id/products/button-up-wide-collar-blouse-lt-blue-25g?_pos=1&_sid=ce76dd0ae&_ss=r"
    },
    {
	  name: "High Neck Long Sleeve Top",
      price: "IDR 99.900",
      image: image5,
	  url: "https://colorbox.co.id/products/high-neck-long-sleeve-top-beige-22o?_pos=1&_sid=93529cb0e&_ss=r"
    },
    {
	  name: "Off Shoulder Mini Balloon Dress",
      price: "IDR 279.900",
      image: image3,
	  url: "https://colorbox.co.id/products/off-shoulder-mini-balloon-dress-black-25e?_pos=3&_sid=6d66d78d5&_ss=r&variant=46700421415170"
    },
    {
	  name: "Frayed High Waist Baggy Jeans",
      price: "IDR 329.900",
      image: image2,
	  url: "https://colorbox.co.id/products/frayed-high-waist-baggy-jeans-ecru-25e?_pos=1&_sid=05ec46873&_ss=r"

    },
    {
      name: "Regular Fit Basic Short Pants",
      price: "IDR 299.900",
      image: image6,
	  url: "https://colorbox.co.id/products/regular-fit-basic-short-pants-sage-25g"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Title */}
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-foreground text-center">
          Pear Body Type
        </h1>
      </section>

      {/* Hero Image */}
      <section className="container mx-auto px-6 mb-12">
        <div className="bg-muted/20 rounded-lg p-8 flex justify-center">
          <img
            src={image7}
            alt="Pear Body Type"
            className="max-w-2xl w-full rounded-lg"
          />
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-6 mb-16">
        <p className="text-lg text-foreground max-w-4xl mx-auto leading-relaxed">
          Your pear body shape is beautifully grounded, with graceful curves around the hips and thighs and a naturally defined waist. Balance your silhouette by drawing attention upward; think statement tops, wide necklines, or detailed sleeves. A-line skirts and straight-leg pants flow effortlessly, highlighting your waist while elongating your frame. Whether casual or dressed up, your style shines when it celebrates your natural proportions.
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
      <Footer />
    </div>
  );
};

export default PearBodyType;
