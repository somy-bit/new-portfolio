import { GithubIcon } from 'lucide-react'
import React from 'react'
import { BiEnvelope } from 'react-icons/bi'
import { LiaLinkedin } from 'react-icons/lia'

function Footer() {
  return (
    <footer className='w-full p-2'>
        <div className='border border-[#037A7F] lg:mx-20'/>
        <div className='flex flex-col space-y-2 p-1 py-2'>
            <p className='lg:mx-20 text-gray-700 dark:text-gray-200'>Contact info :</p>
            <div className='flex ites-center justify-center lg:justify-start
            lg:px-36 space-x-4
            px-5 py-3'>
                <a href='#' className='group relative rounded-full p-1 hover:bg-[#037A7F]/20 transition-colors duration-300'>
                    <BiEnvelope className='w-6 h-6 text-[#037A7F] hover:text-gray-600 dark:hover:text-[#6ee0dc] transition-colors duration-300' />
                    <span className='hidden absolute -bottom-6 left-1 group-hover:block '>sm.moosavi.sm@gmail.com</span>
                </a>
                 <a href='https://www.github.com/somy-bit' className='rounded-full p-1 hover:bg-[#037A7F]/20 transition-colors duration-300'>
                    <GithubIcon className='w-6 h-6 text-[#037A7F] hover:text-gray-600 dark:hover:text-[#6ee0dc]  transition-colors duration-300' />
                </a>
                <a href="https://www.linkedin.com/in/somayyeh-mousavi" className=' rounded-full p-1 hover:bg-[#037A7F]/20 transition-colors duration-300'>
                    <LiaLinkedin className='w-7 h-7 text-[#037A7F] haver:text-gray-600 dark:hover:text-[#6ee0dc] transition-colors duration-300' />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer