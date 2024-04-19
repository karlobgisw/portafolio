import scroll from '../assets/scroll.png';
import { Button } from './buttonHero';
import {motion} from 'framer-motion'
const animation = {
    initial:{
        x: -500,
        opacity: 0,

    },
    animate:{
        x: 0,
        opacity: 1,
        transition: {
            duration:1,
            staggerChildren:0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}
const TextAnimation = {
    initial:{
        x: 0,
    },
    animate:{
        x: "-651%",
        transition: {
            repeat:Infinity,
            duration:20,
        }
    },
    scrollButton: {
        opacity: 0,
        y:10,
        transition:{
            duration:2,
            repeatType:"mirror",
            repeat:Infinity
        }
    }
}

export function Hero(){
    return(
        <div className="w-full h-screen text-black snap-center bg-gradient-to-t from-[#111132] to-[#0c0c1d] relative overflow-hidden">
            <motion.div className='max-w-[1366px] h-full m-auto max-xl:flex max-xl:justify-center max-xl:items-center max-xl:text-center max-xl:m-none'>
                <motion.div variants={animation} className="w-1/2 h-full flex flex-col justify-center gap-10 max-xl:w-full" initial="initial" animate="animate">
                    <motion.h2 variants={animation} className=' text-[30px] max-md:text-[20px] max-sm:text-[20px] text-purple-900 tracking-[10px] font-bold'>KARLO LEONARDO</motion.h2>
                    <motion.h1 variants={animation} className='text-[88px] max-md:text-[58px] max-sm:text-[40px] font-bold text-white'>Web Developer</motion.h1>
                    <motion.div variants={animation} className='z-10'>
                        <Button seccion="#projects" title="Projects"/>
                        <Button seccion="./src/assets/images/KARLO_CV.pdf" title="Get Resume"/>
                    </motion.div>
                    <div className=' max-xl:flex max-xl:items-center max-xl:justify-center'>
                        <motion.img  variants={animation} className=' w-[50px]' src={scroll} alt="Scroll Down" animate="scrollButton"/>
                    </div>
                </motion.div>
            </motion.div>
            <div className='image-container h-full absolute top-0 right-0 max-xl:hidden'>
                <img src="../src/assets/images/karloHeroSinFondo.png" alt="karlo" />
            </div>
            <motion.div variants={TextAnimation} initial="initial" animate="animate" className="absolute text-[50vh] bottom-[-120px] whitespace-nowrap text-[#ffffff09] w-1/2 font-bold z-0 cursor-default">
                Front and Back Development
            </motion.div>
        </div>
    )
}