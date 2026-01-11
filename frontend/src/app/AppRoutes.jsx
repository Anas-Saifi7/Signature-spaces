import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";



const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));
const Projects = lazy(() => import("../pages/projects/Projects"));
const Services = lazy(() => import("../pages/services/Services"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const City = lazy(() => import("../pages/city/City"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<Terms />} />
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/interior-designer/:city" element={<City />} /> 
      </Routes>
    </Suspense>
  );
}
