'use client'

import React, { useState, useEffect } from 'react'
import { MenuIcon, MoonIcon, SunIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };





  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };


  return (
    <div className='sticky top-0 left-0 bg-transparent w-screen p-3 z-50 flex items-center justify-between shadow-sm '>
      <Link href='/' className='text-bold text-gray-400'>
        <div className="text-3xl font-extrabold text-gray-800 dark:text-white tracking-tight transform transition duration-300 ease-in-out hover:scale-110">
          S<span className='text-[#037A7F]'>M</span>
        </div>

      </Link>
      <div className='hidden md:flex space-x-8 pr-8 items-center flex-1 justify-end'>
        <Link href='#' className='text-gray-500 dark:text-gray-300  font-semibold hover:font-bold  hover:text-gray-600'>
          Contact
        </Link>
        <Link href='#projects' className='text-gray-500 dark:text-gray-300  font-semibold hover:font-bold hover:text-gray-600'>
          Projects
        </Link>
        <Link href='#about' className='text-gray-500 dark:text-gray-300  font-semibold hover:font-bold hover:text-gray-600'>
          About
        </Link>
        <button
          onClick={toggleDarkMode}
          className="relative  flex items-center justify-between w-16 h-8 p-1 bg-gray-300 dark:bg-gray-600 rounded-full transition-all duration-300"
        >

          <span
            className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300 ${isDarkMode ? 'translate-x-8' : 'translate-x-0'}`}
          >
            {!isDarkMode ? (<MoonIcon className="h-6 w-6  text-blue-500" />) : <SunIcon className="h-6 w-6  dark:text-yellow-500" />}
          </span>
        </button>
      </div>
      <div>
        <Button
          onClick={toggleDrawer}

          asChild variant='ghost' className='md:hidden p-0 cursor-pointer'>
          <MenuIcon className='w-8 h-8 text-gray-400' />

        </Button>
        <div
          className={`fixed  top-0 right-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg
                transition-transform transform ${isOpen ? "translate-x-0 " :
              "translate-x-full"}`}
        >
          <div className="p-4 pr-8 pt-20">


            <ul className="space-y-4 justify-center items-end flex flex-col h-full">
              <li >
                <button
                  onClick={toggleDarkMode}
                  className="relative  flex items-center justify-between w-16 h-8 p-1 bg-gray-300 dark:bg-gray-600 rounded-full transition-all duration-300"
                >

                  <span
                    className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300 ${isDarkMode ? 'translate-x-8' : 'translate-x-0'}`}
                  >
                    {!isDarkMode ? (<MoonIcon className="h-6 w-6  text-blue-500" />) : <SunIcon className="h-6 w-6  dark:text-yellow-500" />}
                  </span>
                </button>
              </li>

              <li>
                <Link href="/" className="text-gray-500 dark:text-gray-300 font-semibold hover:text-gray-600 hover:font-bold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-500 dark:text-gray-300  font-semibold hover:text-gray-600 hover:font-bold transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-500 dark:text-gray-300  font-semibold hover:text-gray-600 hover:font-bold transition-colors">
                  Contact
                </Link>
              </li>

            </ul>
          </div>
          <button
            onClick={toggleDrawer}
            className="absolute top-4 right-4 text-gray-600"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  )
}

export default Header