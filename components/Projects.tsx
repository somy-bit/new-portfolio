'use client'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import Carousel from './Carousel'
import { ProjectInfo } from '@/app/api/info/route';


function Projects() {

  const [items,setItems] = useState<ProjectInfo[]>([]);

  useEffect(() => {

    async function fetchData() {
      const data = await fetch(`/api/info`, { cache: 'no-store' });
      let itemsArr: ProjectInfo[] = [];
      if (data.status == 500) {
        console.error("failed to fetch data")
      } else {

        itemsArr = await data.json();
        setItems(itemsArr)
      }
    }

    fetchData()
  }, [])






  return (
    <div id='projects' className='w-full flex h-screen py-20 md:max-w-7xl mx-auto  '>
      <Carousel
        items={items}
        autoplayInterval={3000}

   
     
      />
    </div>
  )
}

export default Projects