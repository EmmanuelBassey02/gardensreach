import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import herobg from '../../assets/herobg.jpg'
import sec1hero from "../../assets/sec1hero.jpg"
import { Link } from 'react-router-dom';
import "./styles/section1.css"

const Section1 = () => {
  return (
    <>
    <section className="section1 md:px-[4vw] px-[4vw] pt-[80px] h-fit flex items-center justify-center overflow-hidden" style={{ backgroundImage: `url(${herobg})` }}>
    <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-lime-400 rounded-full animate-bounce  opacity-20 blur-3xl" />
    <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-lime-400 rounded-full opacity-20 blur-3xl" />
      {/* Content */}
      <div className="relative z-10 text-center  space-y-8  w-full mx-auto ">
        {/* Header */}
        <div className="flex items-center flex-wrap justify-center">
          <Star className="w-5 h-5 text-lime-400 mr-2 fill-lime-400 sm:visible invisible" />
          <span className="text-white uppercase tracking-wider text-sm font-medium ">Welcome to <span className='p-2 px-3 text-[13px] border-lime-400 animate-bounce border rounded-full'>GardensReach Digital</span></span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-[34px] sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
          A Digital Marketing & <br />
          <span className="text-lime-400 font-semibold text-[30px] sm:text-5xl md:text-6xl lg:text-7xl">Tech solution Company</span>
        </h1>
        
        {/* CTA and Reviews */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

        <Link to='/contact'>          
          <button className="flex items-center bg-gray-800 hover:bg-gray-900 border-2 hover:border-lime-400 transition-colors rounded-full py-3 px-6 group">
            <span className="text-white md:text-lg text-base mr-4">Get Quote</span>
            <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center group-hover:bg-lime-500 transition-colors">
              <ArrowRight className="w-4 h-4 text-black" />
            </div>
          </button>
          </Link>
          
          {/* Client Reviews */}
          <div className="flex items-center">
            {/* Profile Images */}
            <div className="flex -space-x-2 mr-3">
              {[
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
              ].map((src, index) => (
                <div key={index} className="w-12 h-12 rounded-full border-2 border-black overflow-hidden">
                  <img 
                    src={src || "/placeholder.svg"} 
                    alt={`Client ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-lime-400 font-medium">28K</span>
            <span className="text-white ml-1">Client Review</span>
          </div>
        </div>

      <p className='md:text-[24px] text-[15px] m-auto max-w-4xl text-neutral-100  mb-7 italic'>At GardensReach Digital, we blend creativity, strategy, and technology to drive growth, engagement, and long-term impact for modern businesses.</p>


        {/* <div className="border-2 border-blue-400 mx-auto flex py-8"> */}
        <div className="flex flex-wrap justify-between gap-6 items-center  max-w-[1600px] m-auto h-fit">
          {/* Left Column */}
          <div className="text-left sm:block flex gap-3  w-fit">
            {/* Circular Logo */}
            <div className=" mb-8 m-auto w-fit ">
              <div className="">
                <div className="md:w-32 w-20 md:h-32 h-20 rounded-full bg-lime-400  flex items-center justify-center">
                  <div className="md:w-24 w-16 md:h-24 h-16 rounded-full bg-black flex items-center justify-center">
                    <svg className="md:w-16 w-12 md:h-16 h-12 text-lime-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.3" />
                      <path d="M4 12L12 16L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 16L12 20L20 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              
              </div>
            </div>
            
            {/* Left Text */}
            <p className="text-white   mx-auto w-fit">
              We specialize in creating tailored<br />
              software solutions that drive<br />
              innovation, streamline processes.
            </p>
          </div>
          
          {/* Middle Column - Image */}
          <div className="rounded-3xl overflow-hidden ">
            <img 
              src={sec1hero} 
              alt="Software developer working on laptop" 
              className=""
            />
          </div>
          
          {/* Right Column - Stats */}
          <div className="space-y-12 text-center md:text-right m-auto w-fit">
            {/* 98% Stat */}
            <div className='text-center   m-auto w-fit mb-10'>
              <div className="text-lime-400 text-5xl md:text-7xl font-bold mb-2">98%</div>
              <p className="text-white ">
                Delivering result proven 98% client<br />
                success rate
              </p>
            </div>
            
            {/* 28k Stat */}
            <div className='text-center  m-auto w-fit'>
              <div className="text-lime-400  text-5xl md:text-7xl font-bold mb-2">28k</div>
              <p className="text-white">
                Trusted clients by 28k for marketing & Tech<br />
                solutions
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

    
    </section>
    </>
  );
};

export default Section1;