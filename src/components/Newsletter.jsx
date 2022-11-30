import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-3xl sm:text-xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input type="text" placeholder='email' className='p-3 w-full rounded-md text-black'/>
                <button className='bg-[#00df9a] rounded-md text-black font-medium w-[200px] ml-4 my-6 px-6 py-3'>Submit</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter