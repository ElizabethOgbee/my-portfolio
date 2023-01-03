import React from 'react'
import Link from 'next/link'
import {CiTwitter, CiLinkedin,} from 'react-icons/ci';
import {BsGithub} from 'react-icons/bs';




const Contact = () => {
  return (
    <div  id='contact' className="w-full h-full px-4 py-3 mt-40 text-center text-gray-300 lg:py-5 ">
      <hr  className=' h-[0.1px] bg-slate-300 border-0 '/>
    <h2 className='font-thin  text-2xl mt-4'>Reach me via mail or any of the below platforms:</h2>
    <h3 className='font-thin'>Email: ogbeElizabeth344@gmail.com</h3>
    <div className=" mb-2 px-5 mt-6  ">
                <ul className='flex gap-2 justify-center'>
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

  )
}

export default Contact