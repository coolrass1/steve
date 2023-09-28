import Image from 'next/image'
import React from 'react'

const Buttoncomponent = () => {
  return (
    <button className='flex justify-center items-center gap-1'>
        <span>Join our list</span>
      <Image
        src="/images/button.svg"
        alt="Garnet"
        width={50}
        height={50}
        priority
        objectFit="cover"
      />  
    </button>
  )
}

export default Buttoncomponent