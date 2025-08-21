'use client'

import { ProjectInfo } from '@/app/api/info/route';
import Techs from '@/components/Techs';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';


function ProjectPage() {

  const { id } = useParams();
  const [item, setItem] = useState<ProjectInfo>()

  useEffect(() => {

    async function fetchData() {
      const info = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/info?field=_id&value=${id}`, { cache: 'no-store' });
      const data: ProjectInfo[] = await info.json();
      setItem(data[0])
    }
  }, [])



  return (
    <div className='flex w-full flex-col max-w-6xl mx-auto'>
      
    <h1 className='p-5 text-4xl bg-gradient-to-r from-[#548189] via-[#D9D9D9] to-[#326045] bg-clip-text text-transparent'>{item?.title}</h1>
      <a href={item?.link} target='_blank' className='mt-5 mx-24 dark:text-gray-100 text-gray-100 text-center bg-[#036367] p-5 rounded-lg
             hover:bg-[#037A7F] font-semibold md:max-w-46'>Visit Website</a>
      <div className='w-full p-10 mt-10 '>
        <Image
          src={item?.viewUrl || '/images/avatar.png'}
          alt='Project View'
          width={1000}
          height={500}
          className='object-cover w-full max-w-5xl h-auto '
        />
      </div>
      <div className='flex flex-col'>

        <div className='mt-10 p-5 lg:p-10 '>
          <h2 className='font-semibold text-gray-700 dark:text-gray-100 text-lg px-5'>About Project :</h2>
          <ul className='px-16 space-y-2 text-gray-700 dark:text-gray-200 mt-10'>
            {item?.properties?.map((desc, index) => (
              <li key={index} className='list-disc'>
                {desc}
              </li>

            ))}
          </ul>
        </div>

        <div className='mt-10 lg:p-10 p-5 '>
          <div className='w-full flex flex-col space-y-2 items-center justify-center'>
            <h2 className='text-left w-full font-semibold text-lg text-gray-700 dark:text-gray-100'>Tools And Technologies :</h2>

            <div className='mt-10  p-5 lg:p-10 grid grid-cols-4 gap-4'>
              {item?.techs?.map((tech, index) => (
                <Techs
                  key={index}
                  image={tech.icon}
                  title={tech.name}
                  className=''
                />
              ))}
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default ProjectPage