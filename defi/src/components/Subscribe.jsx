import React from 'react'

const Subscribe = () => {
  return (
      <>
      <div className=' w-full px-4 py-16 bg-black text-white text-center'>
        <h1> Join Our DeFi community</h1>
        <div className=' py-4'>
          <input className=' p-3 rounded-3xl mr-4' type="text" placeholder='Enter your email' />
          <button>Sign Up</button>
        </div>
        <div className=' flex items-center justify-center py-2'>
          <input className=' mr-2' type="Checkbox" />
          <p>Yes, I agree to recieve email communications from Us</p>
        </div>
      </div>
      </>
  )
}

export default Subscribe
