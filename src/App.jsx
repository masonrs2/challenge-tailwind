import { useState } from 'react'
import pfp from './assets/pfp-challenge.jpeg'
import { SlLocationPin } from 'react-icons/sl'
import { AiOutlinePicture, AiOutlineHeart } from 'react-icons/ai'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { FiUserPlus } from 'react-icons/fi'
import photo1 from './assets/photo1.jpeg'
import photo2 from './assets/photo2.jpeg'
import photo3 from './assets/photo3.jpeg'
import photo4 from './assets/photo4.jpeg'
import photo5 from './assets/photo5.jpeg'
import photo6 from './assets/photo6.jpeg'
import photo7 from './assets/photo7.jpeg'
import photo8 from './assets/photo8.jpeg'
import github from  './assets/github.png'
import twitter from  './assets/twitter.png'
import linkedin from  './assets/linkedin.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" bg-amber-100  ">
      <div className="flex py-20 mx-4 lg:mx-20 xl:mx-32 2xl:mx-44  ">
        <div className="bg-white flex flex-col px-12 ">

          <div className="flex flex-col lg:flex-row gap-12">

            <div className="flex flex-col ">
              <div className="flex flex-row gap-12">

                <img src={pfp} className=" w-64 h-80 shadow-lg b-20 mt-10" />
                <div className="flex flex-col ">
                  <div className="flex mt-8 gap-12 items-center lg:items-start lg:justify-start">
                    <div className="flex">

                        <div className="flex flex-col h-28 border-b-2 border-gray-500/20 border-r-2 pr-10 2xl:pr-20">
                          <h1 className="font-semibold w-full text-xl md:text-2xl italic text-gray-700">Jane Doe</h1>
                          <h4 className="text-gray-400 lg:text-lg font-medium">- Photography</h4>
                          

                          <div className="flex flex-row gap-1 mt-2 text-gray-400">
                            <SlLocationPin size={20} className="" />
                            <p className="text-xs md:text-sm ">Timisoara, RO</p>
                          </div>
                        </div>

                        <div className="lg:flex items-center justify-center px-8 h-28 gap-6  border-gray-500/20 border-r-2 border-b-2 hidden">

                          <div className="flex flex-col items-center">
                            <AiOutlinePicture size={24} className="text-gray-700" />
                            <p className="text-gray-800 font-bold text-lg justify-start flex w-full relative">127</p>
                          </div>

                          <div className="flex flex-col items-center">
                            <AiOutlineHeart size={24} className="text-gray-700" />
                            <p className="text-gray-800 font-bold text-lg">502</p>
                          </div>

                          <div className="flex flex-col items-center">
                            <HiOutlineUserCircle size={24} className="text-gray-700" />
                            <p className="text-gray-800 font-bold text-lg">495</p>
                          </div>

                        </div>

                        <div className="justify-center items-center flex gap-4 border-b-2  border-gray-500/20  border-r-2 h-28  px-8">
                          <a href="https://www.twitter.com/mxsonrr">
                            <img src={twitter} className="w-9 h-9 md:h-11 md:w-11" />
                          </a>

                          <a href="https://github.com/masonrs2">
                            <img src={github} className="h-12 w-12 md:h-14 md:w-14 cursor-pointer" />
                          </a>

                          <a src="https://www.linkedin.com/in/mason-sepulveda/">
                            <img src={linkedin} className="h-12 w-12 md:h-14 md:w-14 cursor-pointer" />
                          </a>
                        </div>

                        <div className="hidden xl:flex  items-center border-b-2 h-28 border-gray-500/20 border-r-2 ">
                          <button className="flex gap-2 mx-8 h-10 border ring-0 border-gray-500/60 outline-none  hover:bg-yellow-600 active:bg-yellow-700 shadow-inner font-medium text-gray-100 bg-yellow-500 px-6 py-2 ">
                            <FiUserPlus size={20} />
                            Follow
                          </button>
                        </div>


                    </div>
                    
                  </div>
              

              <div className="flex mt-2 2xl:gap-12 3xl:gap-24">

                <div className="flex flex-col ">
                  <h2 className="text-gray-800 font-bold mb-3 text-lg">About Me</h2>
                  <p className="text-gray-500 w-80 md:w-[420px] lg:w-[600px] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque provident, unde quis veniam laboriosam a quo vitae aliquam dolore sequi nesciunt maiores voluptates reiciendis dolores voluptatum voluptatibus pariatur non aut!</p>
                  <p className="hidden lg:flex text-gray-500 mt-6 w-[600px]">Quod a explicabo ducimus id ea minima velit incidunt repellat quaerat pariatur sapiente, doloribus distinctio aliquam quia dolor. ad ut neque perspiciatis odit. Incidunt ab ducimus, consectetur exercitationem est reprehenderit.</p>
                </div>

                <div className="hidden xl:flex flex-col">
                  <h3 className="text-lg font-bold text-gray-800">Skills</h3>

                  <div className="flex text-gray-600 font-medium items-center gap-2 mt-3 justify-end">
                    <p>Equipment</p>
                    <div className="h-2 w-28 bg-gray-300 rounded-lg">
                      <div className="h-2 w-24 bg-gray-800 rounded-lg flex items-center">
                        <div className="w-full flex justify-end items-center">

                          <div className="h-4 w-4 rounded-full bg-gray-800 absolute t-10 "></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex text-gray-600 font-medium items-center gap-2 mt-3 justify-end">
                    <p>Editing</p>
                    <div className="h-2 w-28 bg-gray-300 rounded-lg">
                      <div className="h-2 w-16 bg-gray-800 rounded-lg flex items-center">
                        <div className="w-full flex justify-end items-center">

                          <div className="h-4 w-4 rounded-full bg-gray-800 absolute t-10 "></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex text-gray-600 font-medium items-center gap-2 mt-3 justify-end">
                    <p>Marketing</p>
                    <div className="h-2 w-28 bg-gray-300 rounded-lg">
                      <div className="h-2 w-full bg-gray-800 rounded-lg flex items-center">
                        <div className="w-full flex justify-end items-center">

                          <div className="h-4 w-4 rounded-full bg-gray-800 absolute t-10 "></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex text-gray-600 font-medium items-center gap-2 mt-3 justify-end">
                    <p>Retouching</p>
                    <div className="h-2 w-28 bg-gray-300 rounded-lg">
                      <div className="h-2 w-20 bg-gray-800 rounded-lg flex items-center">
                        <div className="w-full flex justify-end items-center">

                          <div className="h-4 w-4 rounded-full bg-gray-800 absolute t-10 "></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  </div>
                </div>

              </div>

            </div>
            </div>
          </div>
              <h3 className="text-gray-700 font-bold  text-xl mt-3">Pictures</h3>

              <div className="w-full grid grid-cols-7 mb-8 gap-2">
                <div className="grid col-span-2">

                  <div className="flex flex-col">
                    <img src={photo1} className="mb-2 h-64" />
                    <img src={photo2} className="h-80 object-cover" />
                  </div>

                </div>

                <div className="flex flex-col col-span-3">
                  <img src={photo4} className="mb-2 h-44 object-cover w-full" />
                  <div className="grid grid-cols-3">
                    <div className="flex flex-col col-span-3 lg:col-span-2">
                      <img src={photo7} className="mb-2 h-[250px]" />
                      <img src={photo5} className="h-36 object-cover w-full" />
                    </div>

                    <img src={photo6} className="hidden lg:flex h-full object-cover w-[185px] ml-[4px] xl:ml-[6px]" />
                  </div>

                </div>

                <div className="grid col-span-2 ">
                  <div className="  flex flex-col">
                    <img src={photo3} className="mb-2 h-60 object-cover w-full" />
                    <img src={photo8} className="mb-2 h-[335px] object-cover w-full" />

                  </div>
                </div>

              </div>
        </div>
        
      </div>
    </div>
  )
}

export default App
