import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import image0 from "@/assets/HourglassBodyType/0.png";
import image1 from "@/assets/HourglassBodyType/1.png";
import image2 from "@/assets/HourglassBodyType/2.png";
import image3 from "@/assets/HourglassBodyType/3.png";
import image4 from "@/assets/HourglassBodyType/4.png";
import image5 from "@/assets/HourglassBodyType/5.png";
import image6 from "@/assets/HourglassBodyType/6.png";
import image7 from "@/assets/HourglassBodyType/7.png";
import image8 from "@/assets/HourglassBodyType/8.png";
import image9 from "@/assets/HourglassBodyType/9.png";
import image10 from "@/assets/HourglassBodyType/10.png";
import image11 from "@/assets/HourglassBodyType/11.png";
import image12 from "@/assets/HourglassBodyType/12.png";


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
    },
    {
      name: "Button Up Long Sleeve Top",
      price: "IDR 80.955",
      image: image7,
	  url: "https://colorbox.co.id/products/button-up-long-sleeve-top-multicolor-25e?_pos=1&_sid=49e837784&_ss=r"
    },
    {
      name: "Oversized Denim Shirt with Pocket",
      price: "IDR 206.910",
      image: image8,
	  url: "https://colorbox.co.id/products/oversized-denim-shirt-with-pocket-dark-blue-25i?_pos=3&_sid=787a19f98&_ss=r"
    },
    {
      name: "One Shoulder Knit Top",
      price: "IDR 59.970",
      image: image9,
	  url: "https://colorbox.co.id/products/one-shoulder-knit-top-black-24l?_pos=27&_sid=b10abede4&_ss=r"
    },
    {
      name: "Side Ruched Fitted Mini Dress",
      price: "IDR 179.910",
      image: image10,
	  url: "https://colorbox.co.id/products/side-ruched-fitted-mini-dress-grey-25i?_pos=5&_sid=b7a756462&_ss=r"
    },
    {
      name: "Fitted Short Sleeve Mini Dress",
      price: "IDR 139.930",
      image: image11,
	  url: "https://colorbox.co.id/products/fitted-short-sleeve-mini-dress-taupe-25g?_pos=4&_sid=1b4427538&_ss=r"
    },
    {
      name: "Ruffle Tiered Mini Skirt",
      price: "IDR 74.970",
      image: image12,
	  url: "https://colorbox.co.id/products/ruffle-tiered-mini-skirt-beige-24i?_pos=10&_sid=0b2f5acb6&_ss=r"
    },
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
          Hourglass Body Type
        </h1>
      </section>

      {/* Hero Image */}
      <section className="container mx-auto w-[1278px] h-[639px]">
        <div className="bg-muted/20 rounded-lg p-8 flex justify-center">
          <img
            src={image0}
            alt="Hourglass Body Type"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-6 mb-16">
        <p className="font-inter text-[#454545] text-lg max-w-5xl mx-auto leading-relaxed text-justify">
          Your hourglass body shape is beautifully balanced, your shoulders and hips align, while your waist adds that natural definition everyone admires. To accentuate your figure, opt for wrap dresses, crop tops, or high-waisted jeans that hug your curves in all the right places. Fitted silhouettes and soft fabrics will highlight your natural balance without compromising comfort. Whether you're dressing up for a night out or keeping it casual, you shine when your style celebrates your shape.
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
	  <CarouselPrevious className="-left-5" />
	  <CarouselNext className="-right-5" />
    </Carousel>
  </div>
</section>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HourglassBodyType;
