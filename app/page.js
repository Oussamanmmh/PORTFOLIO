"use client" ;
import { useState } from "react";
import Dialoge from "./components/dialoge";
import { motion } from "framer-motion";

export default function Home() {
  const [state, setState] = useState("");
  const handleShowDialoge = () => { 
   if(state === ""){
     setState("block");
  }
  else{
    setState("");

  }
  }
  return (
    <main className="flex flex-row items-center justify-center gap-3  h-full bg-white p-2 ml-10  w-[900px]  ">
      <div className="flex flex-col items-center justify-center  gap-5">
            <motion.h1 
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 }
            }}
            className="text-4xl font-bold text-center font-rubik uppercase">I am Oussama Nemamcha <span className="text-purple-700 font-rubik  ">full stack developer</span></motion.h1>
            <p className="text-md max-w-[500px] text-center ">
              I am a full-stack developer specializing in both web and mobile applications. With expertise in HTML, CSS, JavaScript, Next.js, React, and Flutter, I create responsive, user-friendly digital solutions. My commitment to continuous learning ensures I stay updated with the latest trends and technologies, delivering modern, high-quality results.
             </p>
             <div className="more-btn">
                  <button className="bg-white pt-2 pb-2  pr-4 pl-4 border-none rounded-full flex gap-3" onClick={handleShowDialoge}><span className="z-20 font-semibold">More about me </span>
                  </button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6 absolute top-2 right-2 z-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>

             </div>
            <Dialoge state={state } handleShowdialoge={handleShowDialoge} />
      </div>
      <div className="bg-gray-900 h-[400px] w-[250px] rounded-2xl">
        

      </div>
    </main>
  );
}
