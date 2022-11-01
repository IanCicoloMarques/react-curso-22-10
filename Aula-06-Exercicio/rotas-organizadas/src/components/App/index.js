import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "../Menu";
import FeaturesSection from "../FeaturesSection";
import ServicesSection from "../ServicesSection";
import PortfolioSection from "../PortfolioSection";
import TestimonialsSection from "../TestimonialsSection";
import TeamSection from "../TeamSection";
import Banner from "../Banner";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/features" element={<FeaturesSection />}/>
          <Route path="/services" element={<ServicesSection />}/>
          <Route path="/portfolio" element={<PortfolioSection />}/>
          <Route path="/testimonials" element={<TestimonialsSection />}/>
          <Route path="/team" element={ <TeamSection />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
