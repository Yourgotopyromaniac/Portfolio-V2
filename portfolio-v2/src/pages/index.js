import Hero from "@/pages/portfolio/Hero"
import LoadingScreen from "@/components/LoadingScreen";
import DateTime from "@/components/DateTime";
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

export default function Home() {
  return (
    <div className="w-[100vw] relative h-full overflow-x-hidden bg-[#101010]">
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
      />
      <LoadingScreen />
      <Hero />
      <DateTime />
    </div>
  )
}
