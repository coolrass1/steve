import Footer from '@/components/Footer'
import GreenHero2 from '@/components/GreenHero2'
import Greenhero from '@/components/Greenhero'
import Heading from '@/components/Heading'
import Hero from '@/components/Hero'
import Hero2 from '@/components/Hero2'
import Orangehero from '@/components/Orangehero'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'
import Image from 'next/image'

export default function Home() {
  return (
   <main className='md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl px-7'>
    <Heading/>
    <Hero/>
    <Hero2/>
    <Section3/>
    <Section4/>
    <Greenhero/>
    <GreenHero2/>
    <Orangehero/>
    <Footer/>
    </main>
  )
}
