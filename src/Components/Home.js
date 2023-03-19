import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineFire} from 'react-icons/ai'
import {CiCircleList} from 'react-icons/ci'
import {AiOutlineHeart} from 'react-icons/ai'
import {MdVideoLibrary} from 'react-icons/md'
import Pic1 from '../Images/a.jpg'
import Pic2 from '../Images/b.jpg'
import Pic3 from '../Images/c.jpg'
import Sv1 from '../Images/sv1.jpg'
import Sv2 from '../Images/sv2.jpg'
import Sv3 from '../Images/sv3.jpg'
import Sv4 from '../Images/sv4.jpg'
import P1 from '../Images/p1.jpg'
import P2 from '../Images/p2.jpg'
function Home() {
  return (
    <div className='flex flex-row select-none tracking-wider font-light text-[14px]'>
        {/*leftbar*/ }
        <div className='basis-2/12 flex flex-col bg-gray-700 h-[689px] items-center justify-start pt-5'>
            <div className='w-full h-[55px] flex flex-row items-center hover:bg-gray-400 cursor-pointer hover:font-normal text-gray-300 hover:text-white'>
              <AiFillHome size={20} className="basis-1/4"/>
              <p className='basis-3/4 '>Home</p>
            </div>
            <div className='w-full h-[45px] flex flex-row items-center  hover:bg-gray-400 cursor-pointer hover:font-normal text-gray-300 hover:text-white'>
              <AiOutlineFire size={20} className="basis-1/4"/>
              <p className='basis-3/4'>Popular</p>
            </div>
            <div className='w-full h-[45px] flex flex-row items-center  hover:bg-gray-400 cursor-pointer hover:font-normal text-gray-300 hover:text-white'>
              <CiCircleList size={20} className="basis-1/4"/>
              <p className='basis-3/4'>Playlist</p>
            </div>
            <div className='w-full h-[45px] flex flex-row items-center  hover:bg-gray-400 cursor-pointer hover:font-normal text-gray-300 hover:text-white'>
              <AiOutlineHeart size={20} className="basis-1/4"/>
              <p className='basis-3/4'>Favourites</p>
            </div>
            <div className='w-full h-[45px] flex flex-row items-center  hover:bg-gray-400 cursor-pointer hover:font-normal text-gray-300 hover:text-white'>
              <MdVideoLibrary size={20} className="basis-1/4"/>
              <p className='basis-3/4'>Your Videos</p>
            </div>
            <div className='w-full h-[25px]'></div>
            <div className='w-full h-[38px] pl-5'>
              <p className='text-gray-400 text-[17px] tracking-wider cursor-pointer'>Subscriptions</p>
            </div>
           
            <div className='w-full h-[60px] flex flex-row pl-5 items-center  hover:bg-gray-400 cursor-pointer hover:font-normal text-gray-300 hover:text-white'>
                  <img src={Pic1} alt="Pic1" className='w-[30px] h-[38px] rounded-[100px]'/>
                  <p className='pl-4'>Channel Name 1</p>
            </div>
            <div className='w-full h-[60px] flex flex-row pl-5 items-center  hover:bg-gray-400 cursor-pointer hover:font-normal text-gray-300 hover:text-white'>
                  <img src={Pic2} alt="Pic2" className='w-[30px] h-[35px] rounded-[100px]'/>
                  <p className='pl-4'>Channel Name 2</p>
            </div>
            <div className='w-full h-[60px] flex flex-row pl-5 items-center  hover:bg-gray-400 cursor-pointer hover:font-normal text-gray-300 hover:text-white'>
                  <img src={Pic3} alt="Pic3" className='w-[30px] h-[34px] rounded-[100px]'/>
                  <p className='pl-4'>Channel Name 3</p>
            </div>
        </div>
        {/*rightbar*/ }
        <div className='basis-10/12'>
                  <div className='flex flex-col pt-[23px]'>
                      <div className='flex flex-row space-x-3 items-center justify-center'>
                      <div className='flex flex-col w-[550px] h-[280px] bg-red-500'>
                      <img src={P1} alt="P1" className='h-full'/>
                      </div>
                      <div className='flex flex-col w-[550px] h-[280px] bg-red-500'>
                      <img src={P2} alt="P2" className='h-full' />
                      </div>
                      </div>

                      <div className='flex flex-col pt-[23px] pl-[83px] space-y-7'>
                        <p className='text-[16px]'>Explore by Categories</p>
                        <div className='flex flex-row space-x-5'>
                            <button className='bg-gray-500 w-[170px] h-[36px] rounded-xl uppercase text-[13px] font-normal'>
                                Healthcare
                            </button>
                            <button className='bg-gray-500 w-[170px] h-[36px] rounded-xl uppercase text-[13px] font-normal'>
                                Animals
                            </button>
                            <button className='bg-gray-500 w-[170px] h-[36px] rounded-xl uppercase text-[13px] font-normal'>
                                Sports
                            </button>
                            <button className='bg-gray-500 w-[170px] h-[36px] rounded-xl uppercase text-[13px] font-normal'>
                                Anime
                            </button>
                            <button className='bg-gray-500 w-[170px] h-[36px] rounded-xl uppercase text-[13px] font-normal'>
                                Movie
                            </button>
                            <button className='bg-gray-500 w-[170px] h-[36px] rounded-xl uppercase text-[13px] font-normal'>
                                Education
                            </button>   
                        </div>
                        <div className='flex flex-col space-y-3'>
                            <p className='text-[16px]'>Videos to try</p>
                            <div className='flex flex-row space-x-3'>
                              <div className='w-[270px] h-[190px] border-gray-500 border-solid border flex flex-col hover:bg-gray-500 rounded-xl'>
                                  <img src={Sv1} alt="Sv1" className='w-full h-[130px] pt-4 pl-4 pr-4'/>
                                  <div className='flex flex-row items-center pt-4 pl-4'>
                                  <img src={Pic1} alt="Pic1" className='w-[30px] h-[33px] rounded-[100px]'/>
                                  <p className='pl-4'>Channel Name 1</p>
                                  </div>
                              </div>

                              <div className='w-[270px] h-[190px] border-gray-500 border-solid border flex flex-col hover:bg-gray-500 rounded-xl'>
                                  <img src={Sv2} alt="Sv2" className='w-full h-[130px] pt-4 pl-4 pr-4'/>
                                  <div className='flex flex-row items-center pt-4 pl-4'>
                                  <img src={Pic3} alt="Pic3" className='w-[30px] h-[33px] rounded-[100px]'/>
                                  <p className='pl-4'>Channel Name 3</p>
                                  </div>
                              </div>


                              <div className='w-[270px] h-[190px] border-gray-500 border-solid border flex flex-col hover:bg-gray-500 rounded-xl'>
                                  <img src={Sv3} alt="Sv3" className='w-full h-[130px] pt-4 pl-4 pr-4'/>
                                  <div className='flex flex-row items-center pt-4 pl-4'>
                                  <img src={Pic2} alt="Pic2" className='w-[30px] h-[33px] rounded-[100px]'/>
                                  <p className='pl-4'>Channel Name 2</p>
                                  </div>
                              </div>


                              <div className='w-[270px] h-[190px] border-gray-500 border-solid border flex flex-col hover:bg-gray-500 rounded-xl'>
                                  <img src={Sv4} alt="Sv4" className='w-full h-[130px] pt-4 pl-4 pr-4'/>
                                  <div className='flex flex-row items-center pt-4 pl-4'>
                                  <img src={Pic1} alt="Pic1" className='w-[30px] h-[33px] rounded-[100px]'/>
                                  <p className='pl-4'>Channel Name 1</p>
                                  </div>
                              </div>


                            </div>
                        </div>
                      </div>
                  </div>
        </div>
    </div>
  )
}

export default Home