import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Image from "next/image";
import odjtech from "@/assets/odjtech.jpg";
import vobb from "@/assets/vobb.jpg";
import crestville from "@/assets/crestville.jpg";
import suni from "@/assets/suni.jpg";
import transmit from "@/assets/transmit.jpg";
import fpd from "@/assets/5pd.png";
import freelance from "@/assets/favicon.ico";

const Work = () => {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div
      className={`w-screen flex flex-col text-[30px] md:text-[40px] relative z-[20] ${
        isDark ? "bg-[#090909]" : "bg-[#d6d6d6]"
      }`}
    >
      <motion.div
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "keyframes" }}
        viewport={{ once: true }}
        className={`flex text-[70px] font-bold justify-end leading-tight w-full p-6 border-t-[6px] ${
          isDark ? "border-[#d6d6d6]" : "border-[#090909]"
        }`}
      >
        <h1>Work Experience</h1>
      </motion.div>
      <motion.div
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "keyframes" }}
        viewport={{ once: true }}
        className={`flex items-start lg:items-center justify-start leading-tight gap-4 w-full p-6 border-t-[6px] ${
          isDark ? "border-[#d6d6d6]" : "border-[#090909]"
        }`}
      >
        <div className="lg:w-20 w-12 lg:h-20 h-12 shrink-0 flex items-center justify-center overflow-hidden">
          <Image src={odjtech} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col items-start gap-2">
          <h1>ODJTech Multimedia, Frontend Engineer</h1>
          <p className="text-[20px] md:text-[25px]">Nov, 2024 - Present</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "keyframes" }}
        viewport={{ once: true }}
        className={`flex items-start lg:items-center justify-start leading-tight gap-4 w-full p-6 border-t-[6px] ${
          isDark ? "border-[#d6d6d6]" : "border-[#090909]"
        }`}
      >
        <div className="lg:w-20 w-12 lg:h-20 h-12 shrink-0 flex items-center justify-center overflow-hidden">
          <Image
            src={crestville}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col items-start gap-2">
          <h1>Crestville Apartments</h1>
          <p className="text-[20px] md:text-[25px]">May, 2025 - Present</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "keyframes" }}
        viewport={{ once: true }}
        className={`flex items-start lg:items-center justify-start leading-tight gap-4 w-full p-6 border-t-[6px] ${
          isDark ? "border-[#d6d6d6]" : "border-[#090909]"
        }`}
      >
        <div className="lg:w-20 w-12 lg:h-20 h-12 shrink-0 flex items-center justify-center overflow-hidden">
          <Image src={vobb} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1>Vobb, Frontend Engineer</h1>
          <p className="text-[20px] md:text-[25px]">Jan, 2025 - Aug, 2025</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "keyframes" }}
        viewport={{ once: true }}
        className={`flex items-start lg:items-center justify-start leading-tight gap-4 w-full p-6 border-t-[6px] ${
          isDark ? "border-[#d6d6d6]" : "border-[#090909]"
        }`}
      >
        <div className="lg:w-20 w-12 lg:h-20 h-12 shrink-0 flex items-center justify-center overflow-hidden bg-white">
          <Image src={fpd} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col items-start gap-2">
          <h1>5Percent Daily, Frontend Developer</h1>
          <p className="text-[20px] md:text-[25px]">Jan, 2023 - Apr, 2024</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "keyframes" }}
        viewport={{ once: true }}
        className={`flex items-start lg:items-center justify-start leading-tight gap-4 w-full p-6 border-t-[6px] ${
          isDark ? "border-[#d6d6d6]" : "border-[#090909]"
        }`}
      >
        <div className="lg:w-20 w-12 lg:h-20 h-12 shrink-0 flex items-center justify-center overflow-hidden">
          <Image src={transmit} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col items-start gap-2">
          <h1>Transmit (fka Radioadspread), Frontend Developer</h1>
          <p className="text-[20px] md:text-[25px]">Jan, 2023 - July, 2023</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "keyframes" }}
        viewport={{ once: true }}
        className={`flex items-start lg:items-center justify-start leading-tight gap-4 w-full p-6 border-t-[6px] ${
          isDark ? "border-[#d6d6d6]" : "border-[#090909]"
        }`}
      >
        <div className="lg:w-20 w-12 lg:h-20 h-12 shrink-0 flex items-center justify-center overflow-hidden">
          <Image src={suni} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col items-start gap-2">
          <h1>Space Universe Africa, Frontend Development Intern</h1>
          <p className="text-[20px] md:text-[25px]">Jan, 2023 - July, 2023</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "keyframes" }}
        viewport={{ once: true }}
        className={`flex items-start lg:items-center justify-start leading-tight gap-4 w-full p-6 border-t-[6px] ${
          isDark ? "border-[#d6d6d6]" : "border-[#090909]"
        }`}
      >
        <div className="lg:w-20 w-12 lg:h-20 h-12 shrink-0 flex items-center justify-center overflow-hidden">
          <Image
            src={freelance}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col items-start gap-2">
          <h1>Freelance</h1>
          <p className="text-[20px] md:text-[25px]">Jan, 2022 - Present</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
