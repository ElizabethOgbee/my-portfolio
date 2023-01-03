import React from 'react';
import {useState, useEffect} from 'react';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {CiTwitter, CiLinkedin,} from 'react-icons/ci';
import {BsGithub} from 'react-icons/bs';
import { motion } from 'framer-motion'



const Navbar = () => {
    {/**set functionality for nav */}
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('gold')
    
    const handlenav = () =>{
        setNav(!nav)
    };

    useEffect(() =>{
    const changeColor = () => {
        if(window.scrollY >= 90){
            setColor('#00005C')
            setTextColor('navyBlue')
        }
        else{
            setColor('transparent')
            setTextColor('gold')
        }
} 
    window.addEventListener('scroll', changeColor)
    }, [])

     return (
    <div>
        <motion.div style={{ backgroundColor: `${color}`}} className="fixed left-0 right-0 w-[100%] z-10 mb-5" initial={{initial: -350}} animate={{y: -20}} transform={{delay: 0.15, duration: 1.5, stiffness: 120}}>
            <div  className="max-w-[1240px] m-auto flex justify-between mt-3 items-center p-4">
            <Link href="/">
            <h1 className='font-bold text-4xl text-gold'>EO.</h1>
            </Link>
            <ul  className=' hidden sm:flex text-gray-300 text-lg'>
            <li className='group transition-all duration-300 ease-in-out p-4 hover:text-gold'>
            <Link className='bg-left-bottom bg-gradient-to-r from-blue-500 to-navyBlue bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out' href='#about'>About</Link>
            </li>
            <li className='group transition-all duration-300 ease-in-out p-4 hover:text-gold'>
            <Link className='bg-left-bottom bg-gradient-to-r from-blue-500 to-navyBlue bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out' href='#skills'>Skills</Link>
            </li>
            <li className='group transition-all duration-300 ease-in-out p-4 hover:text-gold'>
            <Link className='bg-left-bottom bg-gradient-to-r from-blue-500 to-navyBlue bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out' href='#projects'>Projects</Link>
            </li>
                <li className='group transition-all duration-300 ease-in-out p-4 hover:text-gold'>
                <Link className='bg-left-bottom bg-gradient-to-r from-blue-500 to-navyBlue bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out' href='#contact'>Contact</Link>
                </li>
                {/**Button contact me */}
                {/**<Link href="contact" className='text-gray-300 px-2 py-3 text-lg border-2 font-sm border-gold rounded-2xl hover:text-navyBlue hover:bg-gold '>Download CV</Link>*/}
                </ul>
                {/**mobile button and ui dropdown */}
                <div  onClick={handlenav} className="sm:block sm:hidden z-10">
                {nav ? <AiOutlineClose size={22} style={{color:`${textColor}`}}/> : <AiOutlineMenu size={22} style={{color:`${textColor}`}} />}
            </div>
                {/**Mobile Menu */}
                <div className={nav ? 
                'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col items-start w-2/3 h-[115vh]  bg-slate-400 text-left ease-in duration-300'
                : 
                'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col  items-start w-2/3 h-[115vh] p-6 ease-in  duration-300' }>
                    <h1 className='py-5 mt-2 text-2xl text-bold text-start px-5'>EO.</h1>
                    <div className="my-4  pb-4">
                <div className="flex flex-col mb-2 justify-start items-center gap-4 pl-7">
            <ul>

                <li onClick={handlenav} className='group transition-all duration-300 ease-in-out p-3 text-xl font-thin hover:text-gold cursor-pointer  '>
                    <Link className='bg-left-bottom bg-gradient-to-r from-blue-500 to-navyBlue bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out' href="/">Home</Link> 
                </li>
                <li onClick={handlenav} className='group transition-all duration-300 ease-in-out p-3 text-xl font-thin  hover:text-gold after:under'>
                    <Link className='bg-left-bottom bg-gradient-to-r from-blue-500 to-navyBlue bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out' href="#about">About</Link> 
                </li>
                <li onClick={handlenav} className='group transition-all duration-300 ease-in-out p-3 text-xl font-thin  hover:text-gold'>
                    <Link className='bg-left-bottom bg-gradient-to-r from-blue-500 to-navyBlue bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out' href="#skills">Skills</Link> 
                </li>  
                <li onClick={handlenav} className='group transition-all duration-300 ease-in-out p-3 text-xl font-thin  hover:text-gold'>
                    <Link className='bg-left-bottom bg-gradient-to-r from-blue-500 to-navyBlue bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out' href="#projects">Projects</Link> 
                </li>    
                <li onClick={handlenav} className='group transition-all duration-300 ease-in-out p-3 text-xl font-thin  hover:text-gold'>
                    <Link className='bg-left-bottom bg-gradient-to-r from-blue-500 to-navyBlue bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out' href="#contact">Contact</Link> 
                </li>
                </ul>
                {/*</div>*/}
                             {/**Social media */} 
                            <div className=" mb-2 px-5 mt-6 ">
                <ul className='flex gap-2'>
                <li>
            <Link href='https://twitter.com/elizabeth_ogbe'>
                <CiTwitter className='text-2xl text-gray-600 border-rounded hover:bg-black hover:text-white '/></Link>
                </li>
                <li>
            <Link href='https://www.linkedin.com/in/ogbe-elizabeth-b07275149/'>
                <CiLinkedin className='text-2xl text-gray-600 border-rounded hover:bg-black hover:text-white '/></Link>
                </li>
                <li>
            <Link href='https://github.com/ElizabethOgbee'>
                <BsGithub className='text-2xl text-gray-600 border-rounded hover:bg-black hover:text-white '/></Link>
                </li>
            </ul>
            </div>
             </div>
             </div>
            </div>
            </div>
        </motion.div>
        </div>
)}

export default Navbar

