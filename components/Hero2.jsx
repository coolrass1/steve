import Image from 'next/image'
import React from 'react'

const Hero2 = () => {
    return (
        <section className='mt-3 grid gap-7 grid-cols-2'>
            <div>
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
            <div className='py-14 px-24 uppercase'>
                <h1 className='text-4xl text-orange-300'>An introduction to tomorrow</h1>
                <p className='pt-5 text-sm'>
                    In the realm of CenturyB4,
                    elegance reigns supreme,
                    innovation is the crown jewel,
                    and indulgence knows no bounds.
                    This illustrious atelier has
                    forged a resplendent realm,
                    where the union of contemporary
                    styles and venerable techniques
                    gives birth to opulence and
                    regality.
                    With an unwavering commitment to detail, CenturyB4's designs are adorned with intricate embellishments and draped in the most sumptuous of fabrics, rendering them truly resplendent.
                </p>
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