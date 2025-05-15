import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <>
        <div className='flex justify-center items-center bg-black min-h-screen md:px-[4vw] px-[3vw]'>
          <div className=''>
           <h1 className='text-lime-400 font-semibold text-2xl md:text-4xl text-center mb-5'>😥 &nbsp; OOPS! THIS PAGE DOES NOT EXIST</h1>
           <p className='text-neutral-300 text-center text-2xl md:text-3xl font-[500]'>Go back to &nbsp; <span className='p-2 text-neutral-950 border-2 border-lime-400 hover:bg-transparent hover:text-lime-400 rounded-2xl px-3 bg-lime-400'><Link to='/'> Home</Link></span></p>
          </div>
        </div>
    </>
  )
}

export default ErrorPage