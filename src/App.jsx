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


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-blue-900 ">
      <div className="flex pt-40 ">
        <div className="bg-white  flex flex-col px-12 lg:mx-32 2xl:mx-44 ">

          <div className="flex flex-col lg:flex-row gap-12">

            {/* <div className="lg:hidden flex">
              <img src={pfp} className="hidden lg:block w-64 h-80 shadow-lg b-20" />
              <div className="flex flex-col h-28 border-b-2 border-gray-500/20 pr-20 border-r-2 ">
                      <h1 className="font-semibold text-2xl italic text-gray-700">Jane Doe</h1>
                      <h4 className="text-gray-400 text-lg font-medium">- Photography</h4>
                      

                      <div className="flex flex-row gap-1 mt-2 text-gray-400">
                        <SlLocationPin size={20} className="" />
                        <p className="">Timisoara, RO</p>
                      </div>
                    </div>
              
            </div> */}

            <div className="flex flex-col ">
              <div className="flex flex-row gap-12">

                <img src={pfp} className=" w-64 h-80 shadow-lg b-20 mt-10" />
                <div className="flex flex-col ">
                  <div className="flex mt-8 gap-12 items-center lg:items-start lg:justify-start">
                    <div className="flex">

                        <div className="flex flex-col h-28 border-b-2 border-gray-500/20 pr-20 border-r-2 ">
                          <h1 className="font-semibold text-2xl italic text-gray-700">Jane Doe</h1>
                          <h4 className="text-gray-400 text-lg font-medium">- Photography</h4>
                          

                          <div className="flex flex-row gap-1 mt-2 text-gray-400">
                            <SlLocationPin size={20} className="" />
                            <p className="">Timisoara, RO</p>
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

                        <div className="flex h-32 w-20 mx-8 items-center">
                          <button className="flex gap-2 h-10 border ring-0 border-gray-500/60 outline-none hover:bg-yellow-600 active:bg-yellow-700 shadow-inner font-medium text-gray-100 bg-yellow-500 px-6 py-2">
                            <FiUserPlus size={20} />
                            Follow
                          </button>
                        </div>


                    </div>
                    
                  </div>
              

              <div className="flex">

                <div className="flex flex-col">
                  <h2 className="text-gray-800 font-bold mb-3 text-lg">About Me</h2>
                  <p className="text-gray-500 w-[600px] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque provident, unde quis veniam laboriosam a quo vitae aliquam dolore sequi nesciunt maiores voluptates reiciendis dolores voluptatum voluptatibus pariatur non aut!</p>
                  <p className="text-gray-500 mt-6 w-[600px]">Quod a explicabo ducimus id ea minima velit incidunt repellat quaerat pariatur sapiente, doloribus distinctio aliquam quia dolor. ad ut neque perspiciatis odit. Incidunt ab ducimus, consectetur exercitationem est reprehenderit.</p>
                </div>

                <div className="hidden lg:flex flex-col">
                  <h3 className="text-lg font-bold text-gray-800">Skills</h3>

                  <div className="flex text-gray-600 font-medium items-center gap-2">
                    <p>Equipment</p>
                    <div className="h-2 w-28 bg-gray-300 rounded-lg">
                      <div className="h-2 w-24 bg-gray-800 rounded-lg flex items-center">
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
              <h3 className="text-gray-700 font-bold  text-xl ">Pictures</h3>

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
                    <div className="flex flex-col col-span-2">
                      
                    </div>
                  </div>

                </div>

                <div className="grid col-span-2 ">
                  <div className="  flex flex-col">
                    <img src={photo3} className="mb-2 h-60 object-cover w-full" />
                    <img src={photo8} className="mb-2 h-full object-cover w-full" />

                  </div>
                </div>

              </div>
        </div>
        
      </div>
    </div>
  )
}

export default App
