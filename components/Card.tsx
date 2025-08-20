import { ProjectInfo } from '@/app/api/info/route'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Url } from 'url'


function Card({image,title,description,view,techs,id,properties}: ProjectInfo) {
    
  return (
    <div className='bg-[#B6FCFF]/50  w-full max-w-70 mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
        <div className='flex flex-col items-center space-y-2'>
            <Image src={image} width={100} height={60} className='object-contain w-full rounded-t-lg h-56 bg-gray-400 ' alt='project image' />
            <div className='flex w-full flex-col space-y-4 px-3 pb-4'>
                <h2 className='text-lg font-semibold text-left w-full text-gray-800 '>{title}</h2>
                <p className='pb-5 text-sm text-gray-800'>{description}</p>

               
                    <Link href={`/projects/${id}`} className='w-full flex justify-center'>
                        <button className='bg-[#037A7F] text-white px-4 py-2 rounded-lg hover:bg-[#026f6c] transition-colors duration-300'>
                            View Project
                        </button>
                    </Link>
               
            </div>
        </div>
    </div>
  )
}

export default Card