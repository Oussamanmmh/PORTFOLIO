"use client"
import {motion} from "framer-motion";
export default function Dialoge({state , handleShowdialoge }) {
    
  return (
    <motion.dialog  
    initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}


     className={` mt-20  dialog ${state}  w-[800px]  bg-black max-h-[520px]  rounded-3xl overflow-y-scroll z-50 p-5`}>
        <header className="">
            <motion.h1  transition={{
                        ease: "linear",
                        duration: 2,
                        x: { duration: 1 }
                        }}
             className="text-5xl font-semibold text-center text-white font-rubik">About <span className="text-purple-700">me</span></motion.h1>
            <button onClick={handleShowdialoge}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-14 stroke-purple-700 -translate-y-12 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>

        </header>
        <main className="flex gap-14 flex-col items-center text-white ">
            <h1  className="text-3xl font-bold text-start  "> PERSONAL INFO</h1>
            <div className="flex flex-col gap-5">
                <div className="flex gap-20">
                    <p className="text-lg w-[320px]   ">First Name : <span className="font-bold">OUSSAMA</span></p>
                    <p className="text-lg w-[320px]  ">Last Name : <span className="font-bold">NEMAMCHA</span></p>

                </div>
                <div className="flex gap-20">
                    <p className="text-lg w-[320px]  ">Age : <span className="font-bold">20</span></p>
                    <p className="text-lg w-[320px]  ">Nationality : <span className="font-bold">ALGERIAN</span></p>
                </div>
                <div className="flex gap-20">
                    <p className="text-lg w-[320px]  ">Location : <span className="font-bold">ALGERIA</span></p>
                    <p className="text-lg w-[320px]  ">Address : <span className="font-bold">GUELMA</span></p>
                </div>
                <div className="flex gap-20">
                    <p className="text-lg w-[320px]  ">Email : <span className="font-bold">oussamcontact@gmail.com</span></p>
                    <p className="text-lg w-[320px]  ">Phone : <span className="font-bold">+213 4367322</span></p>
                </div>
            </div>
            <button  className="rounded-3xl font-semibold text-purple-700  border border-purple-700 p-3 w-44 hover:transition-all hover:duration-1000 hover:text-white hover:bg-purple-700">
                Download CV
            </button>
            
        </main>
    </motion.dialog>
  );
}   