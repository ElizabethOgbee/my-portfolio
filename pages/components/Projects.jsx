import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <div id='projects' className='w-full h-full  px-4 py-5   text-gray-300 md:h-'>
            <div className='group transition-all duration-300 ease-in-out p-3  text-center font-bold hover:text-gold cursor-pointer' >
        <Link className='my- text-3xl bg-left-bottom bg-gradient-to-r from-blue-500 to-navyBlue bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out' href="projects" >My Projects</Link>
        <p className='text-center text-md mt-3 text-gray-300 font-normal'>I believe that the best way to learn is by Building projects so here are my latest project which i have built in the process of my learning. the last two projects are Web2 projects. </p> 
        </div>
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <div className="grid md:grid-cols-2 gap-8 mt-10 sm:grid-cols-2">
          {/**Project Container */}
          <div className="relative flex items-center justify-center w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gold">
            <img className='rounded-xl group-hover:opacity-0' src="../projects/whitelist.png" alt="" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className='text-xl text-navyBlue tracking-wider text-center'> NFT Waitlist Dapp</h3>
            <div className="flex justify-center items-center flex-wrap gap-[1.5px] md:flex-row lg:flex-row lg:gap-2">
            <Link href='./' className="mt-3 text-center text-sm px-2 py-2 rounded-lg bg-slate-400 text-navyBlue font-bold lg:text-lg cursor-pointer">Demo</Link>
            <Link href='./' className="mt-3 text-center text:sm px-2 py-2 rounded-lg bg-slate-400 text-navyBlue font-bold lg:text-lg cursor-pointer">Repo</Link>
            </div>
            </div>
            </div>
            <div className="relative flex items-center justify-center w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gold">
            <img className='rounded-xl group-hover:opacity-0' src="../projects/random-winner-game.png" alt="" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className='text-xl text-navyBlue tracking-wider text-center'> Random Winner Game</h3>
            <div className="flex justify-center items-center flex-wrap gap-[1.5px] md:flex-row lg:flex-row lg:gap-2">
              <Link href='https://random-winner-game-dapp.vercel.app/' className="mt-3 text-center text-sm px-2 py-2 rounded-lg bg-slate-400 text-navyBlue font-bold lg:text-lg cursor-pointer">Demo</Link>
            <Link href='https://github.com/ElizabethOgbee/random-winner-game-dapp.git' className="mt-3 text-center text:sm px-2 py-2 rounded-lg bg-slate-400 text-navyBlue font-bold lg:text-lg cursor-pointer">Repo</Link>
            
            </div>
            </div>
            </div>
            <div className="relative flex items-center justify-center w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gold">
            <img className='rounded-xl group-hover:opacity-0' src="../projects/portfolio.png" alt="" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className='text-xl text-navyBlue tracking-wider text-center'>Elizabeth Portfolio</h3>
            <div className="flex justify-center items-center flex-wrap gap-[1.5px] md:flex-row lg:flex-row lg:gap-2">
            <Link href='./' className="mt-3 text-center text-sm px-2 py-2 rounded-lg bg-slate-400 text-navyBlue font-bold lg:text-lg cursor-pointer">Demo</Link>
            <Link href='./' className="mt-3 text-center text:sm px-2 py-2 rounded-lg bg-slate-400 text-navyBlue font-bold lg:text-lg cursor-pointer">Repo</Link>
            </div>
            </div>
            </div>
            <div className="relative flex items-center justify-center w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gold">
            <img className='rounded-xl group-hover:opacity-0' src="../projects/ore's bukka.png" alt="" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className='text-xl text-navyBlue tracking-wider text-center'>Food Ordering App</h3>
            <div className="flex justify-center items-center flex-wrap gap-[1.5px] md:flex-row lg:flex-row lg:gap-2">
            <Link href='./' />
            <p className="mt-3 text-center text-sm px-2 py-2 rounded-lg bg-slate-400 text-navyBlue font-bold lg:text-lg cursor-pointer">Demo</p>
            <Link href='./' />
            <p className="mt-3 text-center text:sm px-2 py-2 rounded-lg bg-slate-400 text-navyBlue font-bold lg:text-lg cursor-pointer">Repo</p>
            </div>
            </div>
            </div>
           {/*<ProjectItem  title={propertyFinder} backgroundImage={propertyImg} propertyUrl= '/property' /> 
         <ProjectItem  title={propertyFinder} backgroundImage={propertyImg} propertyUrl= '/property' />
          <ProjectItem  title={propertyFinder} backgroundImage={propertyImg} propertyUrl= '/property' />
          <ProjectItem  title={propertyFinder} backgroundImage={propertyImg} propertyUrl= '/property' />
          <ProjectItem  title={propertyFinder} backgroundImage={propertyImg} propertyUrl= '/property' />
          <ProjectItem  title={propertyFinder} backgroundImage={propertyImg} propertyUrl= '/property' />
          <ProjectItem  title={propertyFinder} backgroundImage={propertyImg} propertyUrl= '/property' />**/}

        </div>
      </div>
      </div>

  )
}

export default Projects