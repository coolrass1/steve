import Image from 'next/image'
import React from 'react'

const Orangehero = () => {
  return (
    <section className=' mt-7 flex justify-center items-center'>
<Image
          src="/images/RubyORANGE1.jpg"
          alt="Garnet"
          width={1600}
          height={1600}
          priority
          objectFit='contain'
          
        />
</section>
  )
}

export default Orangehero