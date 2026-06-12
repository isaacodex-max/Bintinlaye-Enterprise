import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, lazy, useEffect, useState } from "react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import ScrollProgress from "@/components/site/ScrollProgress";
import BackToTop from "@/components/site/BackToTop";
import Particles from "@/components/site/Particles";
import Loader from "@/components/site/Loader";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Businesses = lazy(() => import("@/pages/Businesses"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const Services = lazy(() => import("@/pages/Services"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function PageWrap({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setBooting(false), 1400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [location.pathname, location.hash]);

  if (booting) return <Loader />;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Particles />
      <ScrollProgress />
      <Navbar />
      <Suspense fallback={<div className="min-h-screen" />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrap><Home /></PageWrap>} />
            <Route path="/about" element={<PageWrap><About /></PageWrap>} />
            <Route path="/businesses" element={<PageWrap><Businesses /></PageWrap>} />
            <Route path="/gallery" element={<PageWrap><Gallery /></PageWrap>} />
            <Route path="/services" element={<PageWrap><Services /></PageWrap>} />
            <Route path="/contact" element={<PageWrap><Contact /></PageWrap>} />
            <Route path="*" element={<PageWrap><NotFound /></PageWrap>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
      <BackToTop />
    </div>
  );
}