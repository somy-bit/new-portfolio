'use client'

import React from 'react'
import { useEffect, useState } from 'react'
import Typewriter from './Typewriter'
import { LinkedinIcon, MapPinIcon, MoonIcon } from 'lucide-react';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';


function Hero() {

    const [isVisible, setIsVisible] = useState(false);
    const whoami: string[] = [
        'Web Developer',
        'Data analyst',
        'Fronted Developer',
        'React Developer',
        'UI/UX Designer',
        'Backend Developer',
    ]





    useEffect(() => {

        const timeout = setTimeout(() => setIsVisible(true), 300)

        return () => clearTimeout(timeout)
    }, [])
    return (
        <section className='snap-start h-screen  flex mx-auto items-center justify-center  text-gray-700 overflow-hidden 
    w-full [background-image:repeating-linear-gradient(0deg,#F3EFEE_0_2px,transparent_3px_75px),repeating-linear-gradient(90deg,#F3EFEE_0_2px,transparent_3px_75px)] 
    dark:[background-image:repeating-linear-gradient(0deg,#213137_0_2px,transparent_3px_75px),repeating-linear-gradient(90deg,#213137_0_2px,transparent_3px_75px)] 
'>
            <div className='flex flex-col'>
                <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                    <h1 className='text-6xl font-bold tracking-wider dark:text-gray-200 text-center text-gray-800 antialiased'>
                        SOMAYYEH <span className='text-6xl font-bold tracking-wider  bg-gradient-to-r from-[#548189] via-[#D9D9D9] to-[#326045] bg-clip-text text-transparent'>
                            MOUSAVI
                        </span>

                    </h1>
                    <div className='flex flex-row w-screen justify-center items-baseline space-x-4 mt-4'>
                        <p className='mt-4 text-center text-lg max-w-md dark:text-gray-200'>Hey I'm a  </p>
                        <Typewriter texts={whoami} />
                    </div>

                    <div className='flex items-center justify-center dark:text-gray-200 space-x-2 mt-4'>
                        <MapPinIcon className='w-6 h-6 dark:text-gray-200' /> Vancouver , BC

                    </div>


                </div>
                <div className='flex items-center justify-center space-x-4 mt-4'>
                    <Link href='https://www.linkedin.com/in/somayyeh-mousavi'>
                        <IoLogoLinkedin className='w-8 h-8 rounded-lg dark:text-gray-200' />
                    </Link>
                    <Link href='https://github.com/somy-bit'>
                        <FaGithub className='w-8 h-8 rounded-lg dark:text-gray-200' />
                    </Link>

                </div>
            </div>


        </section>
    )
}

export default Hero