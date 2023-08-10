import Hero from "@/pages/portfolio/Hero"
import LoadingScreen from "@/components/dynamic/LoadingScreen";
import DateTime from "@/components/dynamic/DateTime";
import { useSelector } from "react-redux";
import NavBar from "@/components/toggles/NavBar";
import CustomCursor from "@/components/dynamic/CustomCursor";
import ThemeSwitch from "@/components/toggles/ThemeSwitch";
import About from "./portfolio/About";
import Pitstop from "@/components/masks/Pitstop";
import Gears from "@/components/dynamic/Gears";
import Projects from "./portfolio/Projects";

const Home = () => {

  const isDark = useSelector((state) => state.theme.isDark);
  return (

    <div className={`w-[100vw] relative h-full overflow-x-hidden ${isDark ? 'bg-[#090909] text-[#d6d6d6]' : 'bg-[#d6d6d6] text-[#090909]'}  `}>
      <Gears/>
      <div className={`w-full fixed top-0 z-[15] bg-gradient-to-b h-[15vh] ${isDark ? 'from-[#090909]' : 'from-[#d6d6d6]'} to-transparent `}></div>
      <div className={`w-full fixed bottom-0 z-[15] bg-gradient-to-t  h-[15vh] ${isDark ? 'from-[#090909]' : 'from-[#d6d6d6]'} to-transparent`}></div>
      <CustomCursor />
      <LoadingScreen />
      <Hero />
      <Pitstop/>
      <About />
      <Pitstop/>
      <Projects/>
      <DateTime />
      <ThemeSwitch />
      <NavBar />
    </div>
  )
}


export default Home;