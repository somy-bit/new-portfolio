
import React from 'react'
import FadeIn from './FadeIn'
import FloatingDiv from './FloatingDiv'
import { client } from '@/lib/sanityClient'

async function About() {

  const about = await client.fetch(`*[_type == "profile"][0]{
    about
  }`)
  console.log("about", about)

  return (
    <section id='about' className='pt-5 pb-24 md:max-w-7xl mx-auto  flex flex-col  md:space-y-12  w-full mt-25  text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800'>

      <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div className='flex flex-col space-y-12'>
          <FadeIn duration={2} className=''>
            <h1 className='font-bold text-gray-800 dark:text-gray-200 md:text-7xl text-5xl'>
              <span className='font-bold text-5xl md:text-7xl text-[#037A7F]'>A</span>BOUT
            </h1>
          </FadeIn>
          <FadeIn duration={3} yOffset={70} className='mt-8 flex w-full  items-center justify-center'>
            <p className='text-lg '>
              {about.about}
            </p>
          </FadeIn>
        </div>
        <div className="relative w-full h-96 mt-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="/images/group-doodle.png" alt="First" className=" h-96 w-96  object-contain" />
            <FloatingDiv translateX={3} translateY={8} duration={5} className='absolute max-h-64 max-w-64  h-64 w-64 rounded-full   flex items-center justify-center '>
              <img src="/images/avatar.png" alt="Second" className="object-contain" />
            </FloatingDiv>

          </div>
        </div>

      </div>


    </section>
  )
}

export default About