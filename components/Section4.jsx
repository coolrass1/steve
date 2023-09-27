import Image from "next/image";
import React from "react";

const Section4 = () => {
  return (
    <section className="pt-12 grid grid-cols-2">
      <div className="py-14 px-24 uppercase">
        <h1 className="text-4xl text-orange-300">inspired by the past</h1>
        <p className="pt-5 text-sm">
          Imbued with wisdom gleaned from the annals of history, yet resolutely
          bound to the future, CenturyB4 delves deep into the ethereal realms of
          fortitude and fragility, tradition and modernity. They artfully
          navigate the intricate tapestry of human emotion and individuality,
          ensuring a seamless continuation into the 21st Century, where legacy
          of regal refinement remains unparalleled.
        </p>
        <button className="mt-8 flex">
          <div>Book a consultation</div>
          <div></div>
        </button>
      </div>

      <div>
        <div className=" w-full h-full">
          <Image
            src="/images/GarnetRED1.jpg"
            alt="Garnet"
            width={800}
            height={600}
            priority
            objectFit="cover"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Section4;
