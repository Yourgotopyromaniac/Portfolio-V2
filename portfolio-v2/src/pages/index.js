import Hero from "@/pages/portfolio/Hero"
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <div className="w-[100vw] h-full overflow-x-hidden bg-[#101010]">
      <LoadingScreen />
      <Hero />
    </div>
  )
}
