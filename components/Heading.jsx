import Image from "next/image";
import Link from "next/link";
import React from "react";

const Heading = () => {
  return (
    <section className=" mb-7 md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl ">
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
<div className="border-2 border-red-700 translate-x-36 ">
        <button className="px-3 py-[1px] text-[10px] border-2 shadow-lg">
          Contact Us
        </button>
        </div>
      </main>
      <nav>
        <ul className="flex justify-center items-center gap-2">
          <li>Home</li>
          <li>About</li>
          <li>Consultation</li>
          <li>Contact</li>
        </ul>
      </nav>
    </section>
  );
};

export default Heading;
