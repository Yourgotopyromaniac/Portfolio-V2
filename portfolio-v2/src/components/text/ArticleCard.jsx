import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const ArticleCard = ({
  index,
  title,
  blurb,
  date,
  readingTime,
  tags,
  cover,
  link,
}) => {
  const selectedAccentColor = useSelector(
    (state) => state.accent.selectedAccentColor
  );
  const isDark = useSelector((state) => state.theme.isDark);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ y: 70, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, type: "keyframes" }}
      viewport={{ once: true }}
      className={`w-full border-t-[6px] ${
        isDark ? "border-[#d6d6d6]" : "border-[#090909]"
      }`}
    >
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex w-full items-center overflow-hidden p-6"
      >
        <div
          style={{ backgroundColor: selectedAccentColor }}
          className={`absolute bottom-0 left-0 z-[1] h-full w-full origin-bottom transition-transform duration-300 ${
            isHovered ? "scale-y-100" : "scale-y-0"
          }`}
        />

        <div
          className={`relative z-[2] flex w-full flex-col gap-5 transition-colors duration-200 lg:flex-row lg:items-center lg:gap-8 ${
            isHovered ? "text-[#090909]" : ""
          }`}
        >
          <span className="shrink-0 text-[16px] tracking-widest opacity-60 lg:self-start lg:pt-2 lg:text-[20px]">
            {index}
          </span>

          <div
            className={`relative aspect-[800/336] w-full shrink-0 overflow-hidden border-2 lg:w-[240px] xl:w-[300px] ${
              isDark ? "border-[#d6d6d6]" : "border-[#090909]"
            }`}
          >
            <Image
              src={cover}
              alt={`Cover image for ${title}`}
              fill
              sizes="(max-width: 1024px) 90vw, 300px"
              className="object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-col gap-3">
            <h1 className="text-[32px] leading-none md:text-[42px] lg:text-[48px]">
              {title}
            </h1>

            <p className="max-w-[60ch] text-[14px] leading-snug opacity-90 md:text-[16px]">
              {blurb}
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-wider opacity-60 md:text-[13px]">
              <span>{date}</span>
              <span aria-hidden="true">&#47;&#47;</span>
              <span>{readingTime} min read</span>
              <span aria-hidden="true">&#47;&#47;</span>
              <span>{tags.join(", ")}</span>
            </div>
          </div>

          <svg
            className="absolute right-0 top-0 shrink-0 lg:static lg:ml-auto"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
};

export default ArticleCard;
