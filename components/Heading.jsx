import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactButton from "./ContactButton";
import Signature from "./Signature";

const Heading = () => {
  return (
    <>
    <section className=" hidden lg:block mb-7 md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl ">
      <main className=" pt-7 px-14  flex justify-between items-center ">
        <div className=""></div>
        <div className=" flex flex-col justify-center items-center">
        <div className="text-sm ">
          <Image
            src="/images/signature.jpeg"
            alt="Garnet"
            width={200}
            height={200}
            priority
            objectFit="cover"
          />
        </div>
        <nav className="hidden lg:block">
        <ul className="flex justify-center items-center gap-7">
          <li>Home</li>
          <li>About</li>
          <li>Consultation</li>
          <li>Contact</li>
        </ul>
      </nav>
        </div>
       
<div className="hidden lg:block translate-y-9   ">
        <button className="text-lg px-14 py-[7px] text-[10px] border-2  shadow-xl">
          Contact Us
        </button>
   </div>
      </main>
      
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
     
  <Signature/>
    </section>
      
    </>


  );
};

export default Heading;
