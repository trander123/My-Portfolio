import React from 'react'

export const NavAvatar = () => {
  return (
    <>
      <img src="./images/avatar.jpg" alt="" className=' w-48 h-48  rounded-full'/>
      <div className='flex flex-col text-center text-lg'>
        <span>Mico Gee M. Cuarto</span>
        <span>FrontEnd Web Developer</span>
        <span>+63-9065347560</span>
        <span>cuartzmico@gmail.com</span>
      </div>
    </>
  )
}
