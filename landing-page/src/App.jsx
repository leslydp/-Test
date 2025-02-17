import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import './App.css';

function App(){
  return(
    <div className="app">
      <Header/>
      <Hero/>
      <HowItWorks/>
      <Features/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;