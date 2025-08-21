import React from 'react'

function Techs({image,title,className}: {image: string, title?: string,className:string}) {
  return (
    <div className={`flex flex-col space-y-2 items-center justify-center p-2`} >
         <i className={`${image} colored text-5xl rounded-full p-2 bg-amber-50 w-16 h-16 ${className}`}></i>
          <p>{title}</p>
    </div>
  )
}

export default Techs