import React from "react";
import Buttoncomponent from "./Buttoncomponent";

const Footer = () => {
  return (
    <section className="mt-7">
      <main className="grid grid-col-2 lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col justify-start items-start gap-3 px-7">
          <h1 className="uppercase">Vip access</h1>
          <p className="pt-3 mb-5">Join our waiting ist for exclusive access to our 2023 unveiling</p>
          <input
            className="shadow-lg appearance-none border rounded 
                       lg:w-[50%] py-2 px-3 mb-3 text-gray-700
                       leading-tight focus:outline-none 
                       focus:shadow-outline"
            type="text"
            placeholder="Please enter your email"
          />
          <Buttoncomponent/>
        </div>
        <div className="px-7 flex flex-col gap-7 lg:flex-row lg:gap-7">
          <div className="flex flex-col gap-3 ">
            <h1>Links</h1>
            <p>Book a consultation</p>
            <p>House of CenturyB4</p>
            <p>CenturyB4.com</p>
            <p> Studio CB4</p>
            <p>Contact</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="flex flex-col gap-3" >
           <h1>FOLLOW</h1>
            <p>Linkedin</p>
            <p>Instagram</p>
            <p>Facebook</p>
          </div>
        </div>
      </main>
      <div className="  my-3 py-14 flex gap-3 justify-center border-y-2 lg:justify-between items-center">
        <p className="hidden lg:block">CenturyB4/House of centuryB4/StudioCB</p>
        <p>CenturyB4</p>
        <p className="hidden lg:block">All right reseved</p>
      </div>
    </section>
  );
};

export default Footer;
