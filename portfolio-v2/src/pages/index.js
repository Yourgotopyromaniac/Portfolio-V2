import Hero from "@/pages/portfolio/Hero"
import LoadingScreen from "@/components/LoadingScreen";
import DateTime from "@/components/DateTime";
import dynamic from 'next/dynamic'
import NavButton from "@/components/NavButton";
import { useState } from "react";

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

export default function Home() {
  const [theme, setTheme] = useState("");
  return (
    <div className="w-[100vw] relative h-full overflow-x-hidden">
      <AnimatedCursor
        color="239,68, 68"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerStyle={{
          backgroundColor: "rgba(230,230,230,0.9)",
          
          mixBlendMode: 'exclusion'
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          'nav'
        ]}
      />
      <LoadingScreen />
      <Hero />
      <DateTime />
      <NavButton/>
    </div>
  )
}
