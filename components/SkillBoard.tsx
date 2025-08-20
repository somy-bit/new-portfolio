'use client'

import { Key } from 'lucide-react'
import React, { useState } from 'react'

function SkillBoard({ title, date, company, accomplishments }: { title: string, date: string, company: string, accomplishments?: string[] }) {

    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }
    return (
        <div className='w-full h-full md:p-x5  '>
            <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                onClick={handleToggle}
                className={`w-full   
                 transition-all overflow-hidden duration-500 ease-in-out ${open ? 'max-h-[500px] pb-10 bg-[#037A7F] dark:bg-[#037A7F]/50' : 'max-h-24 bg-gradient-to-r from-[#037A7F] to-transparent'}
                 flex flex-col  rounded-lg `}>
                <div>
                    <h2 className='text-2xl p-5 font-bold text-gray-300 mb-4'>{title}</h2>
                </div>

                <div
                    className={`transition-opacity duration-500 ease-in-out px-4 text-center ${open ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <div className='pb-10'>
                        <div className='text-gray-200 w-full font-semibold flex flex-row items-center text-sm justify-between p-4 text-right '>
                            <p className='text-yellow-400'>{company}</p>
                            <p className='text-yellow-400'>{date}</p>
                        </div>
                        <ul className='p-4 '>
                            {accomplishments?.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-sm  text-gray-200  mt-4">
                                    {item}
                                </li>
                            ))}
                        </ul>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default SkillBoard