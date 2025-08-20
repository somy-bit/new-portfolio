'use client'
import React, { useEffect, useState } from 'react'
import SkillBoard from './SkillBoard'

export type Experience = {
  title: string;
  company: string;
  date: string;
  accomplishments: string[]
}

function Skill() {

  const [positions, setPositions] = useState<Experience[]>([])

  useEffect(() => {

    async function fetchExperience() {
      try {
        const res = await fetch('/api/experience');
        const data = await res.json();

        setPositions(data)
      } catch (error) {
        console.log("error catching info in experiences")
      }


    }

    fetchExperience();
  }, [])

  return (
    <section className='w-full flex flex-col space-y-3 items-center justify-center lg:p-10 '>
      {
        positions && positions.map((item,index)=>(
           <SkillBoard 
           key={index}
           title={item.title} date={item.date} company={item.company} accomplishments={item.accomplishments} />
        ))
      }
    

    </section>
  )
}

export default Skill