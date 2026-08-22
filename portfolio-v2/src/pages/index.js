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
import Articles from "./portfolio/Articles";
import Footer from "./portfolio/Footer";

const Home = () => {

  const isDark = useSelector((state) => state.theme.isDark);
  return (

    <div className={`w-[100vw] relative font-grotesk flex flex-col gap-40 h-full overflow-x-hidden ${isDark ? 'bg-[#090909] text-[#d6d6d6]' : 'bg-[#d6d6d6] text-[#090909]'}  `}>
      <div className={`w-full fixed top-0 z-[29] h-[15vh] ${isDark ? ' bg-gradient-to-b from-[#090909] to-transparent' : 'bg-transparent'} `}></div>
      <div className={`w-full fixed bottom-0 z-[29] h-[15vh] ${isDark ? 'bg-gradient-to-t from-[#090909] to-transparent' : 'bg-transparent'}`}></div>
      <Gears />
      <CustomCursor />
      <LoadingScreen />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Work />
      <Articles />
      <Contact />
      <Footer />
      <DateTime />
      <ThemeSwitch />
      <NavBar />
    </div>
  )
}


export default Home;