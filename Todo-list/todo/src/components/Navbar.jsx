import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-500 flex justify-between text-white  py-2'>
      <h1 className='px-10 text-xl'>C-Task</h1>
      <ul className='flex gap-32  px-10'>
        <li className='cursor-pointer hover:font-bold'>Home</li>
        <li className='cursor-pointer hover:font-bold'>Your task</li>
      </ul>
    </nav>
  )
}

export default Navbar
