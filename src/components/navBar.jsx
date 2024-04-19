import { useState } from "react"
import { Links } from "./linksNav"
import { SocialMedia } from "./socialMedia"
import '../index.css';
import {motion} from 'framer-motion'

export function NavBar(){
    let [open,setopen]=useState(false);
    return(
        <header className=" shadow-md xl:flex w-full h-24 justify-between items-center bg-white text-white max-xl:pt-6 fixed z-30">
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5}} className="text-5xl ml-12 font-bold text-purple-900">KBG</motion.div>
            <div onClick={()=>setopen(!open)} className="text-3xl absolute right-8 top-8 cursor-pointer xl:hidden">
                <ion-icon name={open ? 'close-outline' : 'menu-outline'}></ion-icon>
            </div>
            <div className={`flex xl:mr-12 gap-14 max-xl:items-center max-xl:justify-center max-xl:gap-5 max-xl:flex-col max-xl:absolute bg-white max-xl:z-[-1] max-xl:left-0 max-xl:w-full transition-all duration-500 ease-in ${open ? 'top-[97px] opacity-100' : 'top-[-490px] max-xl:opacity-0'}`}>
                <div className="flex gap-14 max-xl:flex-col max-xl:gap-5 max-xl:mt-5">
                    <Links nombre="Home" seccion="#home"/>
                    <Links nombre="Skills" seccion="#skills"/>
                    <Links nombre="Projects" seccion="#projects"/>
                </div>
                <div className="flex justify-center items-center border-t-4 xl:border-y-2 border-purple-900 xl:border-solid max-xl:mt-2 max-xl:w-4/5">
                    <SocialMedia/>
                </div>
                <a href="#contact" className="w-56 h-20 border-solid border-2 flex justify-center items-center text-xl font-bold bg-slate-200 border-purple-900 text-purple-900 cursor-pointer transition-all hover:text-white hover:bg-purple-900 max-xl:h-10 max-xl:mb-5">
                    Let's Connect
                </a>
            </div>
        </header>
    )
}