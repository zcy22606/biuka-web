import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main
      className="
    flex-1 bg-background w-screen relative flex justify-center backdrop-brightness-150 items-center
    bg-[url('/home_light.png')] bg-bottom bg-cover dark:bg-[url('/home.jpg')]
    "
    >
      <h1 className="text-[56px] font-bold relative z-10">测试网址</h1>
      {/* <Image src={'/home.png'} alt="background image" fill className="z-0object-cover blur-sm"></Image> */}
    </main>
  )
}
