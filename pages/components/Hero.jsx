import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="w-full h-full px-4 py-5 text-gray-300 lg:py-10  md:h-screen">
      {/**Left-Item **/}
          <div className="mt-20 grid  items-center justify-items-center gap-5 lg:grid-cols-2">
            <div className="">
            <h2 className='text-3xl mb-6 md:text-5xl mt-9'> Hello, I'm <span className='text-gold'>Elizabeth Ogbe</span> </h2>
            <h4 className='mb-5 font-thin text-xl lg:text-xl'>
              {/**typewriter */}
              <Typewriter options={{
                strings: [
                  "A Blockchain Developer",
                ],
                changeDelay: 3,
                changeDeleteSpeed: 2,
                autoStart: true,
                loop: true
              }} />
            </h4>
            <p>I like to build amazing Web3 applications. Currently, I'm focused on building the future.</p>
            {/**Buttton */}
            <div className="flex items-center mt-3 ">
            <Link href="https://www.linkedin.com/in/ogbe-elizabeth-b07275149/" className='text-gray-300 px-4 py-2 m-auto text-md border-2 font-sm md:font-lg  border-gold rounded-2xl hover:text-navyBlue hover:bg-gold md:m-0'>Hire me</Link>
            </div>
      </div>
        <div className="">
        <img className="mt-5 h-80 w-80 object-cover lg:w-[500px] lg:h-[400px] rounded-3xl items-center" src="./image.jpg" alt="Crypto Dev image" />
        </div>
        </div>
        </section>
  
  )
}

export default Hero

{/**<**/}