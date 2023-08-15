import Hero from "@/pages/portfolio/Hero"
import LoadingScreen from "@/components/dynamic/LoadingScreen";
import DateTime from "@/components/dynamic/DateTime";
import { useSelector } from "react-redux";
import NavBar from "@/components/toggles/NavBar";
import CustomCursor from "@/components/dynamic/CustomCursor";
import ThemeSwitch from "@/components/toggles/ThemeSwitch";
import About from "./portfolio/About";
import Projects from "./portfolio/Projects";
import Stack from "./portfolio/Stack";
import Gears from "@/components/dynamic/Gears";
import Contact from "./portfolio/Contact";
import Work from "./portfolio/Work";
import Footer from "./portfolio/Footer";

const Home = () => {

  const isDark = useSelector((state) => state.theme.isDark);
  return (

    <div className={`w-[100vw] relative font-bebas flex flex-col gap-40 h-full overflow-x-hidden ${isDark ? 'bg-[#090909] text-[#d6d6d6]' : 'bg-[#d6d6d6] text-[#090909]'}  `}>
      <div className={`w-full fixed top-0 z-[29] h-[15vh] ${isDark ? 'better-linear-gradient-top' : 'bg-transparent'} `}></div>
      <div className={`w-full fixed bottom-0 z-[29] h-[15vh] ${isDark ? 'better-linear-gradient-bottom' : 'bg-transparent'}`}></div>
      <Gears/>
      <CustomCursor />
      <LoadingScreen />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Work/>
      <Contact/>
      <Footer/>
      <DateTime />
      <ThemeSwitch />
      <NavBar />
    </div>
  )
}


export default Home;