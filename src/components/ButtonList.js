import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const arr = ['Kapil sharma' , 'All' , 'Trending' , 'Comedy' , 'Horror' , 'Lifestyle' , 'Mental Health' , 'Billionaire']

  return (
    <div className="flex items-center">
      <div className='buttonList flex  whitespace-nowrap overflow-x-scroll scrollbar-hide max-w-screen-lg'>
      {
        arr.map((item)=>{
          return <Button key={item} name={item}/>
        })
      }
    </div>
    </div>
  )
}

export default ButtonList