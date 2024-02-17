import React from 'react'
import heroVideo from '../assets/video.mp4'; 

const Hero = () => {
  return (
      <>
          <div className=' w-full h-[90vh] top-[90px]'>
              <video className=' object-cover h-full w-full absolute -z-10' src={heroVideo} autoPlay loop muted></video>
              <div className=' w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
                  <h1 className=' font-serif'>Decentralization</h1>
                  <h1 className=' py-2 font-bold'><span className=' text-blue-400'>Trading </span>Protocols</h1>
                  <p className=' text-xl py-4 font-serif'>Guranteed liquidity trading for million of users and top Etherium applications</p>
                  <div>
                      <button className=' m-2'>Use DeFi</button>
                      <button className=' m-2'>FAQ</button>
                  </div>
                  <p className=' text-center text-white text-2xl  font-serif mt-12'>Total Volume $42,134,783,682</p>
              </div>
              <div>
                 
              </div>
          </div>
      </>
  )
}

export default Hero
