import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className=' flex justify-center items-center'>
    <Image
          src="/images/GarnetDueRED1.jpg"
          alt="Garnet"
          width={1600}
          height={1600}
          priority
          objectFit='contain'
          
        />
        </section>
  )
}

export default Hero