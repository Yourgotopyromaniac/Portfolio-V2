import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import ArticleCard from "@/components/text/ArticleCard";
import lovedin from "@/assets/articles/lovedin.webp";
import luminaryIwd from "@/assets/articles/luminary-iwd.webp";
import luminaryNext from "@/assets/articles/luminary-nextjs.webp";
import markdownAi from "@/assets/articles/markdown-ai.webp";

const articleData = [
  {
    index: "01",
    title: "My Better Markdown app, Now with AI",
    blurb:
      "Bolting a Gemini-powered chat and a document summariser onto Better Markdown, my minimal markdown editor and viewer, to close the UX gaps the first release left open.",
    date: "July 2026",
    readingTime: 6,
    tags: ["markdown", "ai", "gemma"],
    cover: markdownAi,
    link: "https://dev.to/biola/my-better-markdown-app-now-with-ai-2hc4",
  },
  {
    index: "02",
    title: "Luminary: a NextJS migration story",
    blurb:
      "Moving Luminary off vanilla HTML, CSS and JavaScript into a Turborepo monorepo — Next.js App Router and TypeScript on the front, Express and Supabase behind it.",
    date: "June 2026",
    readingTime: 5,
    tags: ["nextjs", "typescript", "iwd"],
    cover: luminaryNext,
    link: "https://dev.to/biola/luminary-a-nextjs-migration-story-1n1i",
  },
  {
    index: "03",
    title: "Luminary - IWD Project",
    blurb:
      "Week one of building Luminary, a community-powered directory celebrating women driving change across Nigeria and Africa. Team roles, project setup, and shipping the landing page.",
    date: "March 2026",
    readingTime: 9,
    tags: ["iwd", "frontend"],
    cover: luminaryIwd,
    link: "https://dev.to/biola/luminary-week-1-iwd-project-5h8p",
  },
  {
    index: "04",
    title: "LovedIn: A Case Study",
    blurb:
      "A full case study on LovedIn — the problem it set out to solve, who it solves it for, the UI design decisions, and the HTML and CSS architecture holding it together.",
    date: "February 2026",
    readingTime: 8,
    tags: ["design", "frontend", "showdev"],
    cover: lovedin,
    link: "https://dev.to/biola/lovedin-a-case-study-4hc7",
  },
];

const Articles = () => {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div
      id="articles"
      className={`w-screen flex flex-col relative z-[20] ${
        isDark ? "bg-[#090909]" : "bg-[#d6d6d6]"
      }`}
    >
      <motion.div
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "keyframes" }}
        viewport={{ once: true }}
        className={`flex text-[70px] font-bold justify-start leading-tight w-full p-6 border-t-[6px] ${
          isDark ? "border-[#d6d6d6]" : "border-[#090909]"
        }`}
      >
        <h1>Articles</h1>
      </motion.div>

      {articleData.map((article) => (
        <ArticleCard key={article.link} {...article} />
      ))}
    </div>
  );
};

export default Articles;
