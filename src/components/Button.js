import React from 'react'

const Button = ({name}) => {
  return (
    <button className='bg-gray-100 rounded-md shrink-0 px-3 py-2 m-2'>
        {name}
    </button>
  )
}
export default Button