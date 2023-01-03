import React from 'react'
import Link from 'next/link';


const About = () => {
  return (
    <div id='about' className='w-full h-full px-4 py-5 m-4 text-gray-300 md-h-screen md:mt-20' > {/**w-full mt-40  px-4 py-5 flex flex-col items-center flex-wrap text-gray-300 md:h-screen md:flex-col lg:flex-col**/}
          <div className='group transition-all duration-300 ease-in-out p-3 text-3xl text-center font-bold hover:text-gold cursor-pointer'>
      <Link className=' bg-left-bottom bg-gradient-to-r from-blue-500 to-navyBlue bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out lg:mt-15' href='about'>About Me</Link>
      </div>
      {/**About Container */}
      <div className=" w-full h-full py-16 max-w-[1240px] m-auto grid items-center justify-items-center lg:grid-cols-2 gap-2 md-justify-items-center lg:h-full lg:justify-items-start" >
        {/**Image container */}
        <div className="">
          <img src="./avatar.svg" alt="my-avatar" />
        </div>
        {/**Paragraph container */}
        <div className="px-4 flex flex-col text-center lg:text-start ">
          <div className="mt-3">
            <h3 className='text-xl text-thin text-center'>Hello! my name is Elizabeth Ogbe.</h3>
            </div>
            <div className=' flex flex-row gap-3 mt-3 w-full text-center'>
            <img src="./favicons/favicon-32x32.png" className="w-[33px] h-[33px]"/>
            <p className=''>I am a web3 developer with experience in building decentralized applications (dApps)
                and blockchain-based projects. I'm passionate about using the latest technologies
                to create innovative solutions that enable users to interact with the blockchain 
                in a secure and efficient manner. My experience includes developing cross-platform 
                decentralized apps and services, designing and developing smart contracts, and deploying and managing blockchain networks.</p>
            </div>
             <div className='px-4 flex flex-row gap-3 mt-3'>
              <img src='../favicons/dog-favicon-32x32.png' className="w-[33px] h-[33px]"/>
               <p className='px-3'>When I'm not coding, I spend time with my dog Rex.</p>
               </div>  
               </div>
               </div>
               </div>
  )
}

export default About