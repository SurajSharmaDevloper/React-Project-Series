import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import Navbar from "@/components/blocks/Navbar";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import { Footer } from "@/components/blocks/Footer";


function AppRouter() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* Main routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />


        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default AppRouter