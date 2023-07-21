import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <div style={{
      overflowY: 'hidden'
    }} className="w-[100vw] overflow-x-hidden">
        <LoadingScreen/>
    </div>
  )
}
