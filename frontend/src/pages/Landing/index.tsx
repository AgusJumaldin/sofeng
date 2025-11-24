import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      image: image5,
	  route: "/body-types/hourglass"
    },
    {
      name: "Pear",
      image: image6,
	  route: "/body-types/pear"
    },
    {
      name: "Apple",
      image: image7,
	  route: "/body-types/apple"
    },
    {
      name: "Rectangle",
      image: image8,
	  route: "/body-types/rectangle"
    },
    {
      name: "Inverted Triangle",
      image: image9,
	  route: "/body-types/inverted-triangle"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header /> 

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h1 className="font-zenkaku text-5xl font-bold text-[#2E2E2E] mb-4">
              HerShape x COLORBOX
            </h1>
            <h2 className="font-merriweathersans text-3xl text-[#000000]/75 mb-6">
              Discover Your Perfect Fit, Virtually
            </h2>
            <p className="font-inter mb-8 text-[#000000]/75 leading-relaxed">
              Visualize your body in 3D, find your body type, and explore outfit 
			  <br />recommendations made just for you with Colorbox
            </p>
            <Button 
              onClick={() => navigate("/scan")}
              className="bg-[hsl(0,65%,30%)] hover:bg-[hsl(0,65%,25%)] text-white px-8 py-6 text-lg"
            >
              Start Your Body Scan | Find My Style
            </Button>
          </div>
        </div>
		<div className="w-full max-w-full mx-auto mb-0">
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
          
          <Carousel className="w-full">
            <CarouselContent>
              {bodyTypes.map((type, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-background p-8 mx-2 h-full flex flex-col items-center cursor-pointer hover:shadow-xl transition-shadow" 
				  onClick={() => navigate(type.route)}>
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
<section className="w-full py-20">
  <div className="w-full grid md:grid-cols-2 gap-20 items-start px-40">

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
      <section className="bg-muted/30 px-40 py-16">
  <div className="w-full px-0">
    <div className="grid md:grid-cols-2 gap-12 items-center w-full">
      <div>
        <h2 className="text-4xl font-bold text-[#2E2E2E] mb-4">About The Collaboration</h2>
        <h3 className="text-2xl text-[#2E2E2E]/75 mb-6">A Digital Innovation by Students and Colorbox</h3>
        <p className="text-[#2E2E2E]/75 mb-4">
          The Body Measurement Visualizer System is a collaborative project between our development team and Colorbox.
        </p>
        <p className="text-[#2E2E2E]/75">
          Together, we aim to transform online shopping into an interactive, body-positive experience that empowers women to shop with confidence and precision.
        </p>
      </div>

      <div className="flex justify-center">
        <img src={image14} alt="Colorbox Logo" />
      </div>
    </div>
  </div>
</section>



      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
