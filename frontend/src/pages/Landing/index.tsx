import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import image12 from "@/assets/landing/image12.png";
import image4 from "@/assets/landing/11.png";
import image5 from "@/assets/landing/image5.png";
import image6 from "@/assets/landing/image6.png";
import image7 from "@/assets/landing/image7.png";
import image8 from "@/assets/landing/image8.png";
import image9 from "@/assets/landing/image9.png";
import image14 from "@/assets/landing/image14.png";

const Landing = () => {
  const navigate = useNavigate();

  const bodyTypes = [
    {
      name: "Hourglass",
      image: image5
    },
    {
      name: "Pear",
      image: image6
    },
    {
      name: "Apple",
      image: image7
    },
    {
      name: "Rectangle",
      image: image8
    },
    {
      name: "Inverted Triangle",
      image: image9
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
            <button onClick={() => navigate("/body-types")} className="hover:underline">
              Body Types
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h1 className="text-5xl font-bold text-foreground mb-4">
              HerShape x COLORBOX
            </h1>
            <h2 className="text-3xl text-muted-foreground mb-6">
              Discover Your Perfect Fit, Virtually
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Visualize your body in 3D, find your body type, and explore outfit
              recommendations made just for you with Colorbox
            </p>
            <Button 
              onClick={() => navigate("/scan")}
              className="bg-[hsl(0,65%,30%)] hover:bg-[hsl(0,65%,25%)] text-white px-8 py-6 text-lg"
            >
              Start Your Body Scan | Find My Style
            </Button>
          </div>
        </div>
        <div className="w-[1081px] h-[776px] mx-auto mb-0">
          <img 
            src={image12}
            alt="Women in white outfits"
          />
        </div>
      </section>

      {/* Body Types Carousel Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-2">
            Know your body. Own your style.
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            The different types of body shapes
          </p>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {bodyTypes.map((type, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-background p-8 mx-2 h-full flex flex-col items-center">
                    <div className="w-405 h-405 mb-6 flex items-center justify-center">
                     <img 
                        src={type.image} 
                        alt={`${type.name} body type`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{type.name}</h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* How Does It Work Section */}
{/* How Does It Work Section */}
<section className="w-full py-20">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">

    {/* LEFT TEXT */}
    <div>
      {/* Title 48px */}
      <h2 className="text-[48px] font-bold text-foreground mb-12 leading-tight">
        How Does It Work?
      </h2>

      <div className="space-y-10">

        {/* Step 1 */}
        <div>
          <p className="font-semibold text-[30px] text-foreground leading-snug">
            Step 1 – Measure Yourself:
          </p>
          <p className="text-[24px] text-muted-foreground leading-snug">
            Enter your basic body measurements; bust, shoulders, waist, and hips.
          </p>
        </div>

        {/* Step 2 */}
        <div>
          <p className="font-semibold text-[30px] text-foreground leading-snug">
            Step 2 – See Your 3D Model:
          </p>
          <p className="text-[24px] text-muted-foreground leading-snug">
            Get a realistic visual of your body in seconds.
          </p>
        </div>

        {/* Step 3 */}
        <div>
          <p className="font-semibold text-[30px] text-foreground leading-snug">
            Step 3 – Know Your Body Type:
          </p>
          <p className="text-[24px] text-muted-foreground leading-snug">
            Instantly learn if you're pear, hourglass, apple, or rectangle.
          </p>
        </div>

        {/* Step 4 */}
        <div>
          <p className="font-semibold text-[30px] text-foreground leading-snug">
            Step 4 – Get Personalized Outfit Recommendations:
          </p>
          <p className="text-[24px] text-muted-foreground leading-snug">
            Browse Colorbox's latest looks tailored for your unique shape.
          </p>
        </div>

      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center">
      <img
        src={image4}
        alt="Measuring waist"
        className="rounded-xl object-cover shadow-sm w-[1081px] h-[776px]"
      />
    </div>

  </div>
</section>


      {/* About The Collaboration Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                About The Collaboration
              </h2>
              <h3 className="text-2xl text-muted-foreground mb-6">
                A Digital Innovation by Students and Colorbox
              </h3>
              <p className="text-muted-foreground mb-4">
                The Body Measurement Visualizer System is a collaborative project between our development team and Colorbox.
              </p>
              <p className="text-muted-foreground">
                Together, we aim to transform online shopping into an interactive, body-positive experience that empowers women to shop with confidence and precision.
              </p>
            </div>
            <div className="flex justify-center">
                <img 
				src={image14}
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

export default Landing;
