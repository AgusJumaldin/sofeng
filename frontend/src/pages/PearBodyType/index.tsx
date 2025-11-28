import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import image0 from "@/assets/PearBodyType/0.png";
import image1 from "@/assets/PearBodyType/1.png";
import image2 from "@/assets/PearBodyType/2.png";
import image3 from "@/assets/PearBodyType/3.png";
import image4 from "@/assets/PearBodyType/4.png";
import image5 from "@/assets/PearBodyType/5.png";
import image6 from "@/assets/PearBodyType/6.png";
import image7 from "@/assets/PearBodyType/7.png";
import image8 from "@/assets/PearBodyType/8.png";
import image9 from "@/assets/PearBodyType/9.png";
import image10 from "@/assets/PearBodyType/10.png";
import image11 from "@/assets/PearBodyType/11.png";
import image12 from "@/assets/PearBodyType/12.png";

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
    },
    {
      name: "Embroidered Puff Sleeve Blouse",
      price: "IDR 179.910",
      image: image7,
	  url: "https://colorbox.co.id/products/embroidered-puff-sleeve-blouse-off-white-25i?_pos=2&_sid=f8077229b&_ss=r"
    },
    {
      name: "Button Up Short Sleeve Blouse",
      price: "IDR 134.910",
      image: image8,
	  url: "https://colorbox.co.id/products/button-up-short-sleeve-blouse-lt-blue-25i?_pos=26&_sid=9f274e944&_ss=r"
    },
    {
      name: "Pocket Crop Denim Shirt",
      price: "IDR 134.955",
      image: image9,
	  url: "https://colorbox.co.id/products/pocket-crop-denim-shirt-med-blue-25f?_pos=12&_sid=a29084d63&_ss=r"
    },
    {
      name: "A-Line Denim Midi Skirt",
      price: "IDR 195.930",
      image: image10,
	  url: "hhttps://colorbox.co.id/products/a-line-denim-midi-skirt-lt-blue-25g?_pos=33&_sid=d378bc4d2&_ss=r"
    },
    {
      name: "Denim Pants with Side Fringe Details",
      price: "IDR 287.920",
      image: image11,
	  url: "https://colorbox.co.id/products/denim-pants-with-side-fringe-details-med-blue-25h?_pos=1&_sid=8a0572d70&_ss=r"
    },
    {
      name: "Tied Waist Wide Leg Denim Pant",
      price: "IDR 296.910",
      image: image12,
	  url: "https://colorbox.co.id/products/tied-waist-wide-leg-denim-pants-grey-25j?_pos=1&_sid=bd63f812d&_ss=r"
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
          Pear Body Type
        </h1>
      </section>

      {/* Hero Image */}
      <section className="container mx-auto w-[1278px] h-[639px]">
        <div className="bg-muted/20 rounded-lg p-8 flex justify-center">
          <img
            src={image0}
            alt="Pear Body Type"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-6 mb-16">
        <p className="font-inter text-[#454545] text-lg max-w-5xl mx-auto leading-relaxed text-justify">
          Your pear body shape is beautifully grounded, with graceful curves around the hips and thighs and a naturally defined waist. Balance your silhouette by drawing attention upward; think statement tops, wide necklines, or detailed sleeves. A-line skirts and straight-leg pants flow effortlessly, highlighting your waist while elongating your frame. Whether casual or dressed up, your style shines when it celebrates your natural proportions.
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

export default PearBodyType;
