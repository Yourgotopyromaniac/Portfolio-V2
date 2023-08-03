import Hero from "@/pages/portfolio/Hero"
import LoadingScreen from "@/components/dynamic/LoadingScreen";
import DateTime from "@/components/dynamic/DateTime";
import { useSelector } from "react-redux";
import NavBar from "@/components/toggles/NavBar";
import CustomCursor from "@/components/dynamic/CustomCursor";
import ThemeSwitch from "@/components/toggles/ThemeSwitch";
import About from "./portfolio/About";

const Home = () => {

  const isDark = useSelector((state) => state.theme.isDark);
  return (

    <div className={`w-[100vw] relative h-full overflow-x-hidden ${isDark ? 'bg-[#090909] text-[#e6e6e6]' : 'bg-[#e6e6e6] text-[#090909]'}  `}>
    <div className={`w-full fixed top-0 z-[10] bg-gradient-to-b ${isDark? 'from-[#090909]' : 'from-[#e6e6e6]'} to-transparent h-[15vh]`}></div>
    <div className={`w-full fixed bottom-0 z-[10] bg-gradient-to-t ${isDark? 'from-[#090909]' : 'from-[#e6e6e6]'} to-transparent h-[15vh]`}></div>
      <CustomCursor/>
      <LoadingScreen/>
      <Hero/>
      <About/>
      <DateTime />
      <ThemeSwitch/>
      <NavBar/>
    </div>
  )
}


export default Home;