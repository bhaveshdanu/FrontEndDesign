import React from 'react'
import {IoSearch} from 'react-icons/io5'
import Pic from '../Images/pic.jpg'
import {IoMdArrowDropdown} from 'react-icons/io'
import {GiAbstract048} from 'react-icons/gi'
function Navbar() {
  return (
    <div className='w-full flex flex-row bg-gray-800 h-[56px]'>
        {/*Logo, Name of the project */}
            <div className='basis-3/12 flex flex-row justify-start space-x-2 items-center pl-4'>
                <GiAbstract048 size={19}/>
                <p>BrowseVideo</p>
            </div>
        {/*SearchBar */}
            <div className='basis-6/12 flex flex-row items-center justify-center'>
                <IoSearch size={22} className="bg-gray-500 h-[30px] rounded-l-xl pl-2"/>
                <input className='w-[340px] h-[30px] bg-gray-500 rounded-r-xl placeholder:text-[14px] text-[12px] pl-5 outline-none ' placeholder='Search'/>
             </div>
        {/*Add Video btn, profilePic, Name,Selection-Profile,Logout*/}
            <div className='basis-4/12 flex flex-row items-center justify-center space-x-5'>
                <button className='w-[140px] h-[35px] tracking-wider text-[13px] text-cyan-500 font-medium border border-cyan-600 border-solid rounded-xl' >Add Video</button>
                <div className='flex flex-row space-x-1 items-center justify-center'>
                    <img src={Pic} alt='Pic' className="w-[30px] rounded-[100px] "/>
                    <p className='text-[15px] select-none tracking-wider text-gray-400'>@Username</p>
                    <IoMdArrowDropdown size={24} className='pt-1 cursor-pointer text-gray-500' />
                </div>
            </div>
    </div>
  )
}

export default Navbar