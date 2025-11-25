import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import image1 from "@/assets/BodyTypes/1.png";
import image2 from "@/assets/BodyTypes/2.png";
import image3 from "@/assets/BodyTypes/3.png";
import image4 from "@/assets/BodyTypes/4.png";
import image5 from "@/assets/BodyTypes/5.png";
import image6 from "@/assets/BodyTypes/6.png";
import image7 from "@/assets/BodyTypes/7.png";

const BodyTypes = () => {
  const navigate = useNavigate();

  const bodyTypes = [
    {
      id: "hourglass",
      name: "Hourglass Body Type",
	  description: "The hourglass body type features balanced shoulders and hips with a well-defined waist. This shape is known for its natural curves and proportional silhouette, making it easy to highlight with fitted or tailored clothing.",
	  image: image1
    },
    {
      id: "pear",
      name: "Pear Body Type",
	  description: "The pear body type has narrower shoulders and a smaller bust, with wider hips and thighs. This shape creates a graceful, bottom-heavy silhouette that shines with styles that draw attention upward.",
	  image: image2
    },
    {
      id: "rectangle",
      name: "Rectangle Body Type",
	  description: "The apple body type carries more weight around the midsection, with a fuller bust and narrower hips. This shape looks best in styles that create balance and draw attention to the neckline or legs.",
	  image: image3
    },
    {
      id: "apple",
      name: "Apple Body Type",
	  description: "The apple body type carries more weight around the midsection, with a fuller bust and narrower hips. This shape looks best in styles that create balance and draw attention to the neckline or legs.",
	  image: image4
    },
    {
      id: "inverted-triangle",
      name: "Inverted Triangle Type",
	  description: "The inverted triangle body type features broader shoulders and a fuller bust with narrower hips. This shape looks great in styles that balance the upper and lower body, emphasizing the waist and hips.",
	  image: image5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <section className="container mx-auto px-6 py-16">
<h1 className="font-zenkaku text-[#2E2E2E] text-6xl font-bold text-foreground mb-10">
          Learn more about your Body Types
        </h1>
        <p className="font-inter text-muted-foreground text-2xl mb-12">
          Discover the unique shape that defines you and learn how it influences <br /> your perfect fit. Explore each body type to find styles that complement<br /> your natural form effortlessly.
        </p>

        <div className="space-y-8">
          {bodyTypes.map((type) => (
            <div
  key={type.id}
  className="relative rounded-xl overflow-hidden flex flex-col md:flex-row bg-[#D9D9D9]"
>

  {/* LEFT TEXT */}
  <div className="md:w-1/2 p-8 md:p-12 relative z-10">
    <h2 className="font-merriweathersans text-4xl font-bold text-foreground mb-4">
      {type.name}
    </h2>
    <p className="font-inter text-2xl text-muted-foreground mb-10 leading-relaxed">
      {type.description}
    </p>
    <Button
      onClick={() => navigate(`/body-types/${type.id}`)}
      className="bg-[hsl(0,65%,30%)] hover:bg-[hsl(0,65%,25%)] text-white text-2xl px-10 py-10"
    >
      Learn More
    </Button>
  </div>
<div className="md:w-1/2 relative min-h-[300px] md:min-h-[400px]">
                {/* GRADIENT OVERLAY (image6) - Placed behind the main image */}
                <img
                  src={image6}
                  alt="gradient overlay"
                  className="absolute inset-0 w-full h-full object-cover z-20"
                />
                
                {/* BODY TYPE IMAGE - Now properly positioned and sized */}
                <img
                  src={type.image}
                  alt={type.name}
                  className="absolute inset-0 w-full h-full object-contain z-10"
                />
              </div>

</div>
          ))}
        </div>
      </section>

      {/* About Section */}
	  <section className="bg-muted/30 px-4 py-16">
  <div className="w-full px-0">
    <div className="grid md:grid-cols-2 items-center w-full">
      <div className="pl-6 md:pl-40">
        <h2 className="text-6xl font-merriweathersans font-bold text-[#454545] mb-4">About The Project</h2>
        <h3 className="text-4xl font-inter text-[#454545] mb-6">Smart Fashion Fit, Powered by Technology</h3>
        <p className="text-xl text-[#454545] mb-4">
          This student-developed system helps users identify their body <br /> type and explore clothing styles that flatter their shape. With 3D <br /> visualization and intelligent analysis, it offers a personalized,<br /> body-positive experience for more confident shopping.
        </p>
        <p className="text-xl text-[#454545]">
          Outfit inspirations are sourced from Colorbox’s public collection.<br /> This project is not affiliated with Colorbox; recommendations are <br /> for styling reference and educational purposes.
        </p>
      </div>

      <div className="flex justify-center">
        <img src={image7} alt="Colorbox Logo" />
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BodyTypes;
