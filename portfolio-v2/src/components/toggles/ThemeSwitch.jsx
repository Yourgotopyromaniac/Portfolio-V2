import sun from "@/assets/sunSvg.svg";
import moon from "@/assets/moon2.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";


const ThemeSwitch = () => {
  
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);

  const handleTheme = () => {
    dispatch(toggleTheme());
  }

  return (
    <nav onClick={handleTheme} className={`flex items-center overflow-hidden fixed z-[20] bottom-8 left-8 transition-all delay-300 duration-300 ease-in-out justify-center rounded-[50%] border-[2px] border-[#ff4040] w-[30px] h-[30px] ${isDark ? 'bg-[black]' : 'bg-[white]'} `}>
    <div className={`flex flex-col items-center relative transition-all duration-500 ease-in-out w-[20px]`}>
      <div className={`absolute -top-[0.5rem] transition-all ease-in-out delay-300 duration-300 ${isDark ? ' translate-y-0' : 'translate-y-7'}`}>
        <Image width={15} height={15} src={moon} alt="moon icon" />
      </div>
      <div className={`absolute top-4 transition-all ease-in-out delay-300 duration-300 ${isDark ? ' translate-y-0' : '-translate-y-[1.7rem]'}`}>
        <Image width={20} height={20} src={sun} alt="sun icon" />
      </div>
    </div>

  </nav>
  )
}

export default ThemeSwitch