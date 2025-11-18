import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";

const Result = () => {
  const navigate = useNavigate();

  const recommendations = [
    {
      name: "Long Sleeve Off Shouldered Top",
      price: "IDR 85.800",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80"
    },
    {
      name: "Peplum Sleeveless Top",
      price: "IDR 199.900",
      image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80"
    },
    {
      name: "Embroidered Button Up Camisole",
      price: "IDR 89.950",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80"
    },
    {
      name: "Plaid Checks Midi Skirt",
      price: "IDR 289.000",
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&q=80"
    },
    {
      name: "Boot Cut Flared Denim Pants",
      price: "IDR 164.950",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80"
    },
    {
      name: "Contrast Rib Mini Dress",
      price: "IDR 299.900",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80"
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

      {/* Result Hero Section */}
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-center text-foreground mb-12">
          Your Body Type Is Hourglass!
        </h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <img 
            src="https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?w=1200&q=80" 
            alt="Aesthetic image with passion fruit" 
            className="rounded-lg shadow-xl w-full h-96 object-cover"
          />
        </div>

        <div className="max-w-3xl mx-auto text-justify leading-relaxed text-muted-foreground mb-16">
          <p>
            Your hourglass body shape is beautifully balanced, your shoulders and hips align, 
            while your waist adds that natural definition everyone admires. To accentuate your 
            figure, opt for wrap dresses, crop tops, or high-waisted jeans that hug your curves 
            in all the right places. Fitted silhouettes and soft fabrics will highlight your 
            natural balance without compromising comfort. Whether you're dressing up for a night 
            out or keeping it casual, you shine when your style celebrates your shape.
          </p>
        </div>

        {/* Recommendations Section */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Pieces that we recommend:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-muted rounded-lg overflow-hidden mb-4 aspect-[3/4]">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                <p className="text-muted-foreground">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(0,65%,30%)] text-white py-8 mt-16">
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

export default Result;
