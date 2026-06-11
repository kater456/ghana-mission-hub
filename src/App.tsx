import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Programs from "./pages/Programs";
import Partners from "./pages/Partners";
import GetInvolved from "./pages/GetInvolved";
import Donate from "./pages/Donate";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Inkwell from "./pages/Inkwell";
import InkwellApply from "./pages/InkwellApply";
import Submit from "./pages/Submit";
import Studio from "./pages/Studio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/inkwell" element={<Inkwell />} />
            <Route path="/inkwell/apply" element={<InkwellApply />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/studio/*" element={<Studio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
