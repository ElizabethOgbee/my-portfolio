import React from 'react'
import Link from 'next/link';


const Skills = () => {
  return (
    <div id='skills' className='w-full h-full px-4 py-5 mt-20 text-gray-300 md:h-screen'>
      {/**Container */}
      <div className='group transition-all duration-300 ease-in-out p-3  text-center font-bold hover:text-gold cursor-pointer' >
        <Link className=' text-3xl bg-left-bottom bg-gradient-to-r from-blue-500 to-navyBlue bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'  href='skills' >My Skills</Link>
        <p className='text-center text-md mt-3 text-gray-300 font-normal'>Here is the list of Skills which i have worked with:</p> 
        </div>
        {/**Cards Container */}
        <div className=' w-full grid grid-cols-2 mt-10 gap-4 text-center py-8 sm:mt-20 sm:grid-cols-4 lg:h-[60px] lg:h[75vh]'>
        <div className="shadow-md shadow-navyBlue hover:scale-110 duration-500">
                <img src='../skills/javascript.png' className='w-20 mx-auto' alt='html' />
                <p className='m-4'>JavaScript</p>
                </div>
                <div className="shadow-md shadow-navyBlue hover:scale-110 duration-500">
                <img src='../skills/tailwind.svg' className='w-20 mx-auto' alt='tailwind' />
                <p className='m-4'>Tailwind</p>
                </div>
                <div className="shadow-md shadow-navyBlue hover:scale-110 duration-500">
                <img src='../skills/next2.svg' className='w-20 mx-auto' alt='nextjs' />
                <p className='m-4'>Nextjs</p>
                </div>
                <div className="shadow-md shadow-navyBlue hover:scale-110 duration-500">
                <img src='../skills/solidity2.svg' className='w-20 mx-auto' alt='solidity' />
                <p className='m-4'>Solidity</p>
                </div>
                <div className="shadow-md shadow-navyBlue hover:scale-110 duration-500">
                <img src='../skills/hardhat.png' className='w-20 mx-auto' alt='hardhat' />
                <p className='m-4'>Hardhat</p>
                </div>
                <div className="shadow-md shadow-navyBlue hover:scale-110 duration-500">
                <img src='../skills/ethers.png' className='w-20 mx-auto' alt='ethersjs' />
                <p className='m-4'>Ethersjs</p>
                </div>
                <div className="shadow-md shadow-navyBlue hover:scale-110 duration-500">
                <img src='../skills/ipfs.png' className='w-20 mx-auto'  alt='ipfs'/>
                <p className='m-4'>IPFS</p>
                </div> 
                <div className="shadow-md shadow-navyBlue hover:scale-110 duration-500">
                <img src='../skills/chainlink.png' className='w-20 mx-auto' alt='chainlink' />
                <p className='m-4'>Chainlink</p>
                </div>
            </div>
    </div>
  )
}

export default Skills