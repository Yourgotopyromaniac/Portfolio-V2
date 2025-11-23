import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/text/ProjectCard";
import { useSelector } from "react-redux";
import unispend from "@/assets/unispend.svg";
import crestville from "@/assets/crestville.svg";
import tredi from "@/assets/tredi.svg";
import safebridge from "@/assets/safebridge-l.svg";
import lockedin from "@/assets/lockedin.svg";
import studentpaddy from "@/assets/student-paddy.svg";

const Projects = () => {
  const selectedAccentColor = useSelector(
    (state) => state.accent.selectedAccentColor
  );

  const projectData = [
    {
      img: crestville,
      name: "Crestville",
      stack: "ReactJS, Zustand, Framer motion, Tailwind.",
      color: "#314cb6",
      textColor: "text-[#314cb6]",
      desc: "More than just accommodation, exceptional experiences through premium properties and hassle-free booking.",
      border: "border-[#314cb6]",
      background: "bg-[#F3F0E8]",
      link: "https://crestville.ng",
    },
    {
      img: unispend,
      name: "Unispend",
      stack: "ReactJS, Zustand, Framer motion, Tailwind.",
      color: "#67D9F6",
      textColor: "text-[#67D9F6]",
      desc: "A P2P QR code payment system built for campuses, empowering students, vendors, and universities.",
      border: "border-[#67D9F6]",
      background: "bg-[#040B17]",
      link: "https://unispendtracker.com",
    },

    {
      img: safebridge,
      name: "Safebridge",
      stack: "ReactJS, GSAP, Tailwind, PHP.",
      color: "#142ca6",
      textColor: "text-[#142ca6]",
      desc: "SafeBridge provides secure escrow services, ensuring trusted transactions for online vendors and shoppers.",
      border: "border-[#142ca6]",
      background: "bg-[#FFFFFF]",
      link: "https://safebridge.africa",
    },

    {
      img: tredi,
      name: "Tredi",
      stack: "ReactJS, Framer motion, Tailwind.",
      color: "#FFFFFF",
      textColor: "text-[#FFFFFF]",
      desc: "Manage stock, sales, expenses, customers, and reps across multiple shops — all in one simple platform.",
      border: "border-[#FFFFFF]",
      background: "bg-[#014748]",
      link: "https://tredibooks.com",
    },
    {
      img: lockedin,
      name: "LockedinTrip",
      stack: "ReactJS, Tailwind",
      color: "#FFFFFF",
      textColor: "text-[#7D71FF]",
      desc: "Transform your favorite travel content into a smart, personalized bookable trip with AI.",
      border: "border-[#7D71FF]",
      background: "bg-[#FFFFFF]",
      link: "https://lockedintrip.ai",
    },
    {
      img: studentpaddy,
      name: "Student Paddy",
      stack: "ReactJS, Tailwind",
      color: "#FFFFFF",
      textColor: "text-[#FFFFFF]",
      desc: "Empowering universities, employers, students, and alumni with innovative solutions for talent management.",
      border: "border-[#FFFFFF]",
      background: "bg-[#0F7863]",
      link: "https://studentpaddy.com",
    },
  ];

  return (
    <div
      id="work"
      className="z-[20] h-[150vh] flex justify-center items-center"
    >
      <div className="absolute rotate-90 w-[120vh] landscape-rotate md:rotate-0 md:w-full leading-[0] font-extrabold md:text-[25rem] flex justify-center items-center">
        <h1 className="lg:tracking-wide md:tracking-[0] tracking-[0] landscape-small project-bg-sm md:text-[20rem] text-[25rem] lg:text-[25rem]">
          PORTFOLIO
        </h1>
      </div>

      <motion.div
        style={{ borderColor: selectedAccentColor }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.3, delay: 0.5, type: "keyframes" }}
        layout
        className="border-4 origin-center h-[65%] w-[95%] md:w-[90%]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1, type: "keyframes" }}
          style={{ scrollSnapType: "x mandatory" }}
          className="flex-nowrap backdrop projects items-center flex overflow-x-scroll h-full"
        >
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
