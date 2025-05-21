import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main className="p-6">
      <Hero />
      <Features />
      <Gallery />
      <Footer />
      </main>
    </div>
    
  );
}

export default App;
