import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import image0 from "@/assets/AppleBodyType/0.png";
import image1 from "@/assets/AppleBodyType/1.png";
import image2 from "@/assets/AppleBodyType/2.png";
import image3 from "@/assets/AppleBodyType/3.png";
import image4 from "@/assets/AppleBodyType/4.png";
import image5 from "@/assets/AppleBodyType/5.png";
import image6 from "@/assets/AppleBodyType/6.png";
import image7 from "@/assets/AppleBodyType/7.png";
import image8 from "@/assets/AppleBodyType/8.png";
import image9 from "@/assets/AppleBodyType/9.png";
import image10 from "@/assets/AppleBodyType/10.png";
import image11 from "@/assets/AppleBodyType/11.png";
import image12 from "@/assets/AppleBodyType/12.png";

const AppleBodyType = () => {
  const navigate = useNavigate();
//product array for carousel
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
      name: "Side Ruched Short Sleeve Mini Dress",
      price: "IDR 89.955",
      image: image2,
	  url: "https://colorbox.co.id/products/side-ruched-short-sleeve-mini-dress-aqua-25f?_pos=50&_sid=1cc1e2b5c&_ss=r"
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
    },
    {
      name: "Oversized Front Tie Cardigan",
      price: "IDR 299.900",
      image: image7,
	  url: "https://colorbox.co.id/products/oversized-front-tie-cardigan-grey-25i?_pos=1&_sid=5c5fe287c&_ss=r"
    },
    {
      name: "Long Sleeve Graphic Jersey",
      price: "IDR 143.920",
      image: image8,
	  url: "https://colorbox.co.id/collections/tops/products/long-sleeve-graphic-jersey-navy-25h"
    },
    {
      name: "Long Sleeve Retro Cardigan",
      price: "IDR 209.930",
      image: image9,
	  url: "https://colorbox.co.id/collections/cardigans/products/long-sleeve-retro-cardigan-navy-25g"
    },
    {
      name: "Basic Wide Leg Denim Pants Blue",
      price: "IDR 229.900",
      image: image10,
	  url: "https://colorbox.co.id/products/basic-wide-leg-denim-pants-blue-24o?_pos=1&_sid=c30b5f2d2&_ss=r"
    },
    {
      name: "Wide Leg Drawstring Pants",
      price: "IDR 183.920",
      image: image11,
	  url: "https://colorbox.co.id/products/wide-leg-drawstring-pants-black-25h?_pos=1&_sid=c124b154c&_ss=r"
    },
    {
      name: "Fold Over Long Pants with Tie",
      price: "269.910",
      image: image12,
	  url: "https://colorbox.co.id/products/fold-over-long-pants-with-tie-off-white-25i?pr_prod_strat=jac&pr_rec_id=db79fa94d&pr_rec_pid=9090773418242&pr_ref_pid=9090772861186&pr_seq=uniform"
    }
  ];
//split the array
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
          Apple Body Type
        </h1>
      </section>

      {/* Hero Image */}
      <section className="container mx-auto px-6 mb-12">
        <div className="bg-muted/20 rounded-lg p-8 flex justify-center">
          <img
            src={image0}
            alt="Apple Body Type"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-6 mb-16">
        <p className="font-inter text-[#454545] text-lg max-w-5xl mx-auto leading-relaxed text-justify">
          Your apple body shape carries strength and softness in perfect balance. With fuller curves around your midsection and a naturally defined bust, your look shines when the focus moves upward and outward. Try flowy tops, wrap blouses, or V-neck styles that draw the eye to your neckline. Pair them with structured pants, A-line skirts, or straight-cut jeans for a balanced silhouette. Whether you're dressing up or keeping it casual, you radiate confidence when comfort and style meet in harmony.
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
	  <CarouselPrevious className="-left-10 top-[45%] -translate-y-0" />
	  <CarouselNext className="-right-0 top-[45%] -translate-y-0" />
    </Carousel>
  </div>
</section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AppleBodyType;
