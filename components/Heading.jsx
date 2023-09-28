"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ContactButton from "./ContactButton";
import Signature from "./Signature";
import { TEMPORARY_REDIRECT_STATUS } from "next/dist/shared/lib/constants";

const Heading = () => {
  const [ismenu , setIsmenu]=useState(false) 
  const HandleShow=(e)=>{
    e.preventDefault()
    
    setIsmenu(!ismenu)
    console.log("ismenu is true")
  } 
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
      <section className="block   relative lg:hidden">
        <div className={`absolute ${ismenu && 'opacity-0'} tra transition-opacity  top-0 left-1 w-[400px] min-h-screen`}>
        <nav className="bg-white text-gray-400">
              <ul className="flex  py-7 min-h-full  flex-col justify-center items-center gap-5">
                <li className="py-3 ">Home</li>
                <li>About</li>
                <li>Consultation</li>
                <li>Contact</li>
              </ul>
              <ul className="py-5 flex flex-col gap-3 justify-center items-center">
              <li>LinkedIn</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </nav>
        </div>
        <header className=" pt-7 flex justify-between items-center px-3 lg:hidden ">
          { ismenu?(<button onClick={HandleShow} className="relative  z-10">
            <div className="w-7 h-[1px] mb-1 bg-black"></div>
            <div className="w-6 h-[1px] mb-1 ml-1 bg-black"></div>
            <div className="w-5 h-[1px] mb-1 ml-2 bg-black"></div>
            <div className="w-5 h-[1px] mb-1 ml-3 bg-black"></div>
          </button>):(<button onClick={HandleShow} className="text-3xl z-50"><span>X</span></button>)
        }
          <ContactButton />
        </header>

        <Signature />
      </section>
    </>
  );
};

export default Heading;
