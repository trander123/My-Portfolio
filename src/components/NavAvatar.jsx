import React from 'react'

export const NavAvatar = () => {
  return (
    <>
      <img src="./images/avatar.jpg" alt="" className=' w-48 h-48  rounded-full mb-2.5 sm:mb-5'/>
      <div className='flex flex-col text-center text-lg'>
        <span className=' text-2xl mb-5 sm:mb-10 font-bold'>Mico Gee M. Cuarto</span>
        <span className=' font-light'>FRONTEND WEB DEVELOPER</span>
        <span>+63-9065347560</span>
        <span>cuartzmico@gmail.com</span>
      </div>
    </>
  )
}
