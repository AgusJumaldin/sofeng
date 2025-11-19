import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
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
      <header className="bg-[hsl(0,65%,30%)] text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-semibold">HerShape x COLORBOX</div>
          <nav className="flex gap-6">
            <button onClick={() => navigate("/scan")} className="hover:underline">
              Start Body Scan
            </button>
            <button onClick={() => navigate("/body-types")} className="hover:underline text-white/80">
              Body Types
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Learn more about your Body Types
        </h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Discover the unique shape that defines you and learn how it influences your perfect fit. Explore each body type to find styles that complement your natural form effortlessly.
        </p>

        <div className="space-y-8">
          {bodyTypes.map((type) => (
            <div
  key={type.id}
  className="relative rounded-xl overflow-hidden flex flex-col md:flex-row bg-[#D9D9D9]"
>

  {/* LEFT TEXT */}
  <div className="md:w-1/2 p-8 md:p-12 relative z-10">
    <h2 className="text-3xl font-bold text-foreground mb-4">
      {type.name}
    </h2>
    <p className="text-muted-foreground mb-6 leading-relaxed">
      {type.description}
    </p>
    <Button
      onClick={() => navigate(`/body-types/${type.id}`)}
      className="bg-[hsl(0,65%,30%)] hover:bg-[hsl(0,65%,25%)] text-white"
    >
      Learn More
    </Button>
  </div>
<div className="md:w-1/2 relative h-64 md:h-96">
  {/* BODY TYPE IMAGE */}
  <img
    src={type.image}
    alt={type.name}
    className="w-full h-full object-contain z-10 relative"
  />

  {/* GRADIENT OVERLAY (image6) */}
  <img
    src={image6}
    alt="gradient overlay"
    className="absolute inset-0 w-full h-full object-cover z-20 pointer-events-none"
  />
</div>

</div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                About The Project
              </h2>
              <h3 className="text-2xl text-muted-foreground mb-6">
                Smart Fashion Fit, Powered by Technology
              </h3>
              <p className="text-muted-foreground mb-4">
                This student-developed system helps users identify their body type and explore clothing styles that flatter their shape. With 3D visualization and intelligent analysis, it offers a personalized, body-positive experience for more confident shopping.
              </p>
              <p className="text-muted-foreground">
                Outfit inspirations are sourced from Colorbox's public collection. This project is not affiliated with Colorbox; recommendations are for styling reference and educational purposes.
              </p>
            </div>
            <div className="flex justify-center">
                <img 
				src={image7}
				/>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(0,65%,30%)] text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold">HerShape X COLORBOX</div>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:opacity-80" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:opacity-80" />
              <Youtube className="w-5 h-5 cursor-pointer hover:opacity-80" />
              <Instagram className="w-5 h-5 cursor-pointer hover:opacity-80" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BodyTypes;
