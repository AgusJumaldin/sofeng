import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import image0 from "@/assets/InvertedTriangleBodyType/0.png";
import image1 from "@/assets/InvertedTriangleBodyType/1.png";
import image2 from "@/assets/InvertedTriangleBodyType/2.png";
import image3 from "@/assets/InvertedTriangleBodyType/3.png";
import image4 from "@/assets/InvertedTriangleBodyType/4.png";
import image5 from "@/assets/InvertedTriangleBodyType/5.png";
import image6 from "@/assets/InvertedTriangleBodyType/6.png";
import image7 from "@/assets/InvertedTriangleBodyType/7.png";
import image8 from "@/assets/InvertedTriangleBodyType/8.png";
import image9 from "@/assets/InvertedTriangleBodyType/9.png";
import image10 from "@/assets/InvertedTriangleBodyType/10.png";
import image11 from "@/assets/InvertedTriangleBodyType/11.png";
import image12 from "@/assets/InvertedTriangleBodyType/12.png";

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
    },
    {
      name: "Halter Neck Sleeveless Top",
      price: "IDR 134.910",
      image: image7,
	  url: "https://colorbox.co.id/products/halter-neck-sleeveless-top-off-white-25j?_pos=2&_sid=68b03348c&_ss=r"
    },
    {
      name: "Ruched Short Sleeve Blouse",
      price: "IDR 67.455",
      image: image8,
	  url: "https://colorbox.co.id/products/ruched-short-sleeve-blouse-off-white-25f?_pos=75&_sid=4d984c291&_ss=r"
    },
    {
      name: "Tied Front Popcorn Cardigan",
      price: "IDR 233.910",
      image: image9,
	  url: "https://colorbox.co.id/collections/cardigans/products/tied-front-popcorn-cardigan-beige-25i"
    },
    {
      name: "Wide Leg Woven Pants",
      price: "IDR 206.910",
      image: image10,
	  url: "https://colorbox.co.id/products/wide-leg-woven-pants-lt-grey-25i?_pos=5&_sid=427411dc6&_ss=r"
    },
    {
      name: "Lace Details Wide Leg Pants",
      price: "IDR 207.920",
      image: image11,
	  url: "https://colorbox.co.id/products/lace-details-wide-leg-pants-black-25h?_pos=17&_sid=427411dc6&_ss=r"
    },
    {
      name: "Wide Leg Stripes Roll Up Pants",
      price: "IDR 229.900",
      image: image12,
	  url: "https://colorbox.co.id/products/wide-leg-stripes-roll-up-pants-lt-grey-25k?_pos=20&_sid=427411dc6&_ss=r"
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
          Inverted Triangle Body Type
        </h1>
      </section>

      {/* Hero Image */}
      <section className="container mx-auto px-6 mb-12">
        <div className="bg-muted/20 rounded-lg p-8 flex justify-center">
          <img
            src={image0}
            alt="Inverted Triangle Body Type"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-6 mb-16">
        <p className="font-inter text-[#454545] text-lg max-w-5xl mx-auto leading-relaxed text-justify">
          Your inverted triangle body shape is bold and athletic, with strong shoulders and a sleek, tapered waist. To create harmony, soften your upper frame with V-necks or wrap tops and add volume below with flared skirts or wide-leg pants. Balanced proportions and fluid fabrics help highlight your confident shape. No matter the look, your style stands out with strength and effortless poise.
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

export default InvertedTriangleBodyType;
