import Image from 'next/image'
import React from 'react'

const Hero = ({item}) => {
  return (
    <section className='  min-h-[500px] px-3 flex justify-center items-center'>
    <div className='w-full min-h-full '>
    <Image
          src={item?.url}
          alt="Garnet"
          width={1600}
          height={600}
          priority
          objectFit='cover'
          style={{ width: "100%", height: "700px", objectFit: "cover" }}

          
        />
        </div>
        </section>
  )
}

export default Hero