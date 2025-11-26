import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import image0 from "@/assets/RectangleBodyType/0.png";
import image1 from "@/assets/RectangleBodyType/1.png";
import image2 from "@/assets/RectangleBodyType/2.png";
import image3 from "@/assets/RectangleBodyType/3.png";
import image4 from "@/assets/RectangleBodyType/4.png";
import image5 from "@/assets/RectangleBodyType/5.png";
import image6 from "@/assets/RectangleBodyType/6.png";
import image7 from "@/assets/RectangleBodyType/7.png";
import image8 from "@/assets/RectangleBodyType/8.png";
import image9 from "@/assets/RectangleBodyType/9.png";
import image10 from "@/assets/RectangleBodyType/10.png";
import image11 from "@/assets/RectangleBodyType/11.png";
import image12 from "@/assets/RectangleBodyType/12.png";

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
    },
     {
      name: "Button Up Off Shoulder Top",
      price: "IDR 207.920",
      image: image7,
	  url: "https://colorbox.co.id/products/button-up-off-shoulder-top-ecru-25h?_pos=2&_sid=448d9a127&_ss=r"
    },
     {
      name: "Printed Ruched Cami Top",
      price: "IDR 47.970",
      image: image8,
	  url: "https://colorbox.co.id/products/printed-ruched-cami-top-multicolor-24k?_pos=1&_sid=804df3e23&_ss=r"
    },
     {
      name: "Ruffled Sleeveless Blouse",
      price: "IDR 67.455",
      image: image9,
	  url: "https://colorbox.co.id/products/ruffled-sleeveless-blouse-taupe-25f?_pos=4&_sid=1456d7ce6&_ss=r"
    },
     {
      name: "Elastic Cargo Pants",
      price: "IDR 209.930",
      image: image10,
	  url: "https://colorbox.co.id/products/elastic-cargo-pants-dark-grey-25g?_pos=6&_sid=c508586cf&_ss=r"
    },
     {
      name: "Regular Fit Flare Denim Pants",
      price: "IDR 230.930",
      image: image11,
	  url: "https://colorbox.co.id/products/regular-fit-flare-denim-pants-lt-blue-25g"
    },
     {
      name: "Balloon Fit Denim Pants",
      price: "IDR 148.455",
      image: image12,
	  url: "https://colorbox.co.id/products/balloon-fit-denim-pants-med-blue-25e?_pos=1&_sid=fedbd7a0a&_ss=r"
    }
  ];
const chunkProducts = (arr, size) => {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
};
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Title */}
      <section className="container mx-auto px-6 py-12">
        <h1 className="font-zenkaku text-4xl font-extrabold text-[#454545] text-center">
          Rectangle Body Type
        </h1>
      </section>

      {/* Hero Image */}
      <section className="container mx-auto px-6 mb-12">
        <div className="bg-muted/20 rounded-lg p-8 flex justify-center">
          <img
            src={image0}
            alt="Rectangle Body Type"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-6 mb-16">
        <p className="font-inter text-[#454545] text-lg max-w-5xl mx-auto leading-relaxed text-justify">
          Your rectangle body shape is naturally balanced, with shoulders, waist, and hips that align in a sleek and athletic way. To enhance your figure, go for outfits that create gentle curves, such as belted dresses, peplum tops, or high-waisted pants that define your waist. Layered styles and textured fabrics can add dimension while keeping you effortlessly chic. Whether you're dressing for a casual day or a special night out, you shine when your style adds shape and structure to your look.
        </p>
      </section>

      {/* Products */}
      <section className="container mx-auto px-6 pb-16">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-inter font-bold text-[#454545] mb-8">
      Pieces that we recommend:
    </h2>

    <Carousel className="w-full">
      <CarouselContent>

        {chunkProducts(products, 6).map((group, index) => (
          <CarouselItem key={index}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* ROW 1 */}
              {group.slice(0, 3).map((product, i) => (
                <a
                  key={`row1-${i}`}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overflow-hidden hover:shadow-lg transition block"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-contain"
                  />
                  <div className="p-4">
                    <h3 className="font-inter text-[#454545] mb-2">
                      {product.name}
                    </h3>
                    <p className="font-inter text-[#454545]">{product.price}</p>
                  </div>
                </a>
              ))}

              {/* ROW 2 */}
              {group.slice(3, 6).map((product, i) => (
                <a
                  key={`row2-${i}`}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overflow-hidden hover:shadow-lg transition block"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-contain"
                  />
                  <div className="p-4">
                    <h3 className="font-inter text-[#454545] mb-2">
                      {product.name}
                    </h3>
                    <p className="font-inter text-[#454545]">{product.price}</p>
                  </div>
                </a>
              ))}

            </div>
          </CarouselItem>
        ))}

      </CarouselContent>
    </Carousel>
  </div>
</section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RectangleBodyType;
