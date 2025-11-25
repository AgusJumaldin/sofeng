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
                    <h3 className="text-2xl font-inter text-[#454545] text-foreground">{type.name}</h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

{/* How Does It Work Section */}
<section className="w-full py-10">
  <div className="w-full grid md:grid-cols-2 gap-20 items-start px-40">

    {/* LEFT TEXT */}
    <div>
      {/* Title 48px */}
      <h2 className="text-[48px] font-merriweathersans text-foreground text-[#454545] mb-20 leading-tight">
        How Does It Work?
      </h2>

      <div className="space-y-10">

        {/* Step 1 */}
        <div>
          <p className="font-inter text-[30px] text-[#454545] text-foreground leading-snug mb-5">
            Step 1 – Measure Yourself:
          </p>
          <p className="font-inter text-[24px] text-muted-foreground leading-snug">
            Enter your basic body measurements; bust,<br />
			shoulders, waist, and hips.
          </p>
        </div>

        {/* Step 2 */}
        <div>
          <p className="font-inter text-[#454545] text-[30px] text-foreground leading-snug mb-5">
            Step 2 – See Your 3D Model:
          </p>
          <p className="font-inter text-[24px] text-muted-foreground leading-snug">
            Get a realistic visual of your body in seconds.
          </p>
        </div>

        {/* Step 3 */}
        <div>
          <p className="font-inter text-[#454545] text-[30px] text-foreground leading-snug mb-5">
            Step 3 – Know Your Body Type:
          </p>
          <p className="font-inter text-[24px] text-muted-foreground leading-snug">
            Instantly learn if you're pear, hourglass,<br />
			apple, or rectangle.
          </p>
        </div>

        {/* Step 4 */}
        <div>
          <p className="font-inter text-[#454545] text-[30px] text-foreground leading-snug mb-5">
            Step 4 – Get Personalized Outfit Recommendations:
          </p>
          <p className="font-inter text-[24px] text-muted-foreground leading-snug">
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
      <section className="bg-muted/30 px-4py-16">
  <div className="w-full px-0">
    <div className="grid md:grid-cols-2 gap-12 items-center w-full">
      <div className="pl-6 md:pl-40">
        <h2 className="text-4xl font-merriweathersans font-bold text-[#454545] mb-4">About The Project</h2>
        <h3 className="text-2xl font-inter text-[#454545] mb-6">Smart Fashion Fit, Powered by Technology</h3>
        <p className="text-[#454545] mb-4">
          This student-developed system helps users identify their body <br /> type and explore clothing styles that flatter their shape. With 3D <br /> visualization and intelligent analysis, it offers a personalized,<br /> body-positive experience for more confident shopping.
        </p>
        <p className="text-[#454545]">
          Outfit inspirations are sourced from Colorbox’s public collection.<br /> This project is not affiliated with Colorbox; recommendations are <br /> for styling reference and educational purposes.
        </p>
      </div>

      <div className="flex justify-start">
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
