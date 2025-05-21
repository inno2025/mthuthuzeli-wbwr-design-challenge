import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { VideoSection } from "./components/VideoSection";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <VideoSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}