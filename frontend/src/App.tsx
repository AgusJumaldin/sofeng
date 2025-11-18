import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Index from "./pages/Scan";
import Result from "./pages/Result";
import BodyTypes from "./pages/BodyTypes";
import HourglassBodyType from "./pages/HourglassBodyType";
import PearBodyType from "./pages/PearBodyType";
import AppleBodyType from "./pages/AppleBodyType";
import RectangleBodyType from "./pages/RectangleBodyType";
import InvertedTriangleBodyType from "./pages/InvertedTriangleBodyType";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/scan" element={<Index />} />
          <Route path="/result" element={<Result />} />
          <Route path="/body-types" element={<BodyTypes />} />
          <Route path="/body-types/hourglass" element={<HourglassBodyType />} />
          <Route path="/body-types/pear" element={<PearBodyType />} />
          <Route path="/body-types/apple" element={<AppleBodyType />} />
          <Route path="/body-types/rectangle" element={<RectangleBodyType />} />
          <Route path="/body-types/inverted-triangle" element={<InvertedTriangleBodyType />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
