import React from 'react'



function Nav() {
  return (
    <div className='w-full'>
      <div className="max-w-[1280px] box-border flex items-start justify-between mx-auto py-10">
        <div className="flex justify-start md:hidden sm:hidden">Logo</div>
        <ul className="flex justify-between md:hidden sm:hidden">
          <li className="px-9">ABOUT</li>
          <li className="px-9">SKILL</li>
          <li className="px-9">CONTACT</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav