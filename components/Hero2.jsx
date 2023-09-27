import Image from 'next/image'
import React from 'react'

const Hero2 = ({item}) => {
    console.log(item?.id)
    return (
        <section className='mt-3 mb-7 grid gap-7 grid-cols-1 lg:grid-cols-2'>
            <div className="order-2 lg:order-1">
                <div className=' w-full h-full'>
                    <Image
                        src="/images/GarnetRED1.jpg"
                        alt="Garnet"
                        width={800}
                        height={600}
                        priority
                        objectFit='cover'
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}

                    />
                </div>
            </div>
            <div className=' order-1 lg:order-2 flex flex-col  justify-center items-center  gap-7 lg:block py-14  px-7 lg:px-24 uppercase'>
                <h1 className='text-2xl leading-8 lg:text-4xl text-orange-300'>An introduction to tomorrow</h1>
                <p className='lg:pt-5 lg:text-sm'>
{item?.cte}                </p>
                <button className='mt-8 flex'>
                    <div>Book a consultation</div>
                    <div>
                    

                    </div>
                </button>
            </div>
        </section>
    )
}

export default Hero2