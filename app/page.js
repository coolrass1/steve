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
import {red, purple,green, picgreen, picorange,picpurple,picred} from '@/components/Data'

export default function Home() {
  return (
   <main className='md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl lg:px-7'>
    <Heading/>
   {/* red area*/} 
    <Hero item={picred}/>
    <Hero2 item={red}/>
    {/**purple area */}
    <Hero item={picpurple}/>

    {/* <Section3/> */}
    {/* <Section4/> */}
    <Hero2 item={purple}/>
{/* /* green area*/ }
<Hero item={picgreen}/>

    {/* <Greenhero/> */}
    {/* <GreenHero2/> */}
    <Hero2 item={green}/>
{/* /**orange area */ }
<Hero item={picorange}/>

    {/* <Orangehero/> */}
    <Footer/>
    </main>
  )
}
