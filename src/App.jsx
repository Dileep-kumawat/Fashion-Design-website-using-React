import AboutSection from "./components/AboutSection"
import Advantages from "./components/Advantages"
import FeaturesSection from "./components/FeaturesSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="w-full bg-[#060503] text-[#F1EFEE]">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <Advantages />
    </div>
  )
}

export default App
