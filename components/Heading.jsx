import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactButton from "./ContactButton";

const Heading = () => {
  return (
    <>
    <section className=" hidden lg:block mb-7 md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl ">
      <main className=" pt-14 px-14 mb-7 flex justify-center items-center gap-7">
        <div className="text-sm ">
          <Image
            src="/images/signature.jpg"
            alt="Garnet"
            width={100}
            height={100}
            priority
            objectFit="cover"
          />
        </div>
<div className="hidden lg:block border-2 border-red-700 translate-x-36 ">
        <button className="px-3 py-[1px] text-[10px] border-2 shadow-lg">
          Contact Us
        </button>
   </div>
      </main>
      <nav className="hidden lg:block">
        <ul className="flex justify-center items-center gap-2">
          <li>Home</li>
          <li>About</li>
          <li>Consultation</li>
          <li>Contact</li>
        </ul>
      </nav>
      </section>
      <section className="block lg:hidden">
      <header className=" pt-7 flex justify-between items-center px-3 lg:hidden ">
      <button className="relative  ">
        <div className="w-7 h-[1px] mb-1 bg-black"></div>
        <div className="w-6 h-[1px] mb-1 ml-1 bg-black"></div>
        <div className="w-5 h-[1px] mb-1 ml-2 bg-black"></div>
        <div className="w-5 h-[1px] mb-1 ml-3 bg-black"></div>

      </button>
      <ContactButton/>

    </header>
    <div className="text-center pb-3">  signature</div>
  
    </section>
      
    </>


  );
};

export default Heading;
