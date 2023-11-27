import 'alpinejs'
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
// import Stack from "./components/Stack";


function App() {

  return (
    <div className='!scroll-smooth'>
      <Navbar />
      <div className="">
        <Hero />
        {/* <Stack /> */}
        <About />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
