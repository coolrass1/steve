import Image from 'next/image'
import React from 'react'

const Section3 = () => {
  return (
    <section className=' mt-12 flex justify-center items-center'><Image
    src="/images/AmethystPurple1.jpg"
    alt="Garnet"
    width={1600}
    height={1600}
    priority
    objectFit='contain'
    
  /></section>
  )
}

export default Section3