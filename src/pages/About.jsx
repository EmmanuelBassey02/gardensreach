import React from 'react'
import herobg from '../assets/herobg.jpg'
import { Link } from 'react-router-dom'
import '../styles/About.css'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import { Star, Eye, Diamond, ArrowRight } from 'lucide-react';
import mission2 from "../assets/mission2.jpg"
import mission from "../assets/mission.jpg"
import Cta from '../components/shared/Cta'
import recruit from "../assets/recruit.jpg"

function About() {
  return (
    <>
        <Navbar />
        <section className="about md:px-[4vw] px-[3vw] h-[70vh] py-[100px] bg-fixed flex items-center justify-center " style={{ backgroundImage: `url(${herobg})` }}>
        <div className="absolute bottom-0 animate-bounce right-0 w-48 h-48 md:w-64 md:h-64 bg-lime-400 rounded-full  opacity-20 blur-3xl" />
        <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-lime-400 rounded-full  opacity-20 blur-3xl" />
            <div className=''> 
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 text-white'>About <span className='text-lime-400'>Us</span></h1>
                <p className='text-base md:text-2xl text-white w-fit m-auto'>
                  <Link to="/">
                    <span>Home{" "}</span>
                  </Link> * <span className='text-lime-400'>About Us</span>
                </p>
            </div>
        </section>



       <section className="bg-black h-fit md:py-[100px] py-[60px] px-[3vw] md:px-[4vw]">
         <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            {/* Left Column - Images and Stats */}
            <div className="relative">
                {/* Top Image */}
                <div className="relative mb-4">
                <div className="rounded-2xl overflow-hidden">
                    <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Team working on computers" 
                    className="w-full h-64 md:h-80 object-cover"
                    />
                </div>
                </div>
                
                {/* Bottom Image */}
                <div className="relative ml-12 md:ml-24">
                <div className="rounded-2xl overflow-hidden">
                    <img 
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Team collaborating" 
                    className="w-full h-64 md:h-80 object-cover"
                    />
                </div>
                
                {/* Projects Badge */}
                <div className="absolute -left-16 top-1/2 transform -translate-y-1/2">
                    <div className="bg-lime-400 rounded-full py-3 px-6 flex items-center">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-3">
                        <div className="w-6 h-6 border-2 border-lime-400 rounded-full flex items-center justify-center">
                        <div className="w-3 h-0.5 bg-lime-400"></div>
                        </div>
                    </div>
                    <div>
                        <div className="text-black text-2xl font-bold">653 +</div>
                        <div className="text-black text-sm">Project Complete</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
            {/* Right Column - Content */}
            <div>
                {/* Header */}
                <div className="flex items-center mb-6">
                <Star className="w-5 h-5 text-lime-400 mr-2 fill-lime-400" />
                <span className="text-lime-400 animate-pulse uppercase tracking-wider text-sm font-medium p-2 border-2 rounded-2xl">GardensReach Digital</span>
                </div>
                
                {/* Main Heading */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    Our <span className='text-lime-400'>Story</span><br />
                 {/* <span className="text-lime-400">And What Drives Us</span> */}
                </h2>
                
                {/* Description */}
                <p className="text-gray-300 mb-12 text-[15px] md:text-[16px] max-w-xl">
                <span className='font-bold text-lime-400'>GardensReach Digital</span> was born out of a deep passion for bridging the gap between innovation 
                and impact. Founded by a group of digital natives and tech enthusiasts, the company began with a 
                mission to empower brands and businesses through smart marketing strategies and cutting-edge 
                technology. <br /><br /> What started as a small collective with big ideas has grown into a trusted digital 
                partner for clients around the globe — helping them scale, adapt, and thrive in an ever-evolving 
                digital world. Our name reflects our roots and our growth philosophy: to cultivate digital success,
                 one solution at a time.
                </p>
                
                {/* Stats */}
                <div className="bg-black bg-opacity-50 border border-gray-800 rounded-xl p-6">
                <div className="grid grid-cols-2 gap-6">
                 <div>
                    <div className="text-lime-400 text-2xl md:text-5xl font-bold mb-2">100%</div>
                  <div className="text-white md:text-[16px] text-[14px]">Success Rate</div>
                </div>

                <div>
                 <div className="text-lime-400 text-2xl md:text-5xl font-bold mb-2">1,536</div>
                    <div className="text-white md:text-[16px] text-[14px]">Satisfied clients</div>
                 </div>
                </div>
                </div>
            </div>
            </div>
        </div>
       </section>





    <section className="bg-black h-fit py-16 px-[3vw] md:px-[4vw]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className=''>
           <img src={mission} alt="" />
           <img src={mission2} alt="" />
          </div>
          
          {/* Right Column - Cards */}
          <div className="space-y-6">
            {/* Our Mission Card */}
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-md border border-lime-400 flex items-center justify-center mr-4">
                  <Eye className="w-5 h-5 text-lime-400" />
                </div>
                <h3 className="text-white text-xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-300">
              To become a globally recognized digital powerhouse that empowers organizations and individuals through purposeful technology and strategy.
              </p>
            </div>
            
            {/* Our Vision Card */}
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-md border border-lime-400 flex items-center justify-center mr-4">
                  <div className="grid grid-cols-2 gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-lime-400"></div>
                    ))}
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-300">
              To deliver innovative, data-driven digital marketing and tech solutions that help businesses grow, connect, and lead in their industries.
              </p>

            </div>
            
            {/* Our Value Card */}
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-md border border-lime-400 flex items-center justify-center mr-4">
                  <Diamond className="w-5 h-5 text-lime-400" />
                </div>
                <h3 className="text-white text-xl font-bold">Our Value</h3>
              </div>
              <div className="space-y-3 md:text-[16px] text-[15px]">
                 <p className='text-neutral-300'><span className='text-white font-bold'>Innovation First</span> – We embrace change and are always ahead of the curve.</p>

                 <p className='text-neutral-300'><span className='text-white font-bold'>Integrity Always</span> – We believe in honesty, transparency, and trust.</p>

                 <p className='text-neutral-300'><span className='text-white font-bold'>People Over Profits</span> – Whether it's clients, team members, or partners, we put people at the center.</p>

                 <p className='text-neutral-300'><span className='text-white font-bold'>Excellence in Execution</span> – We don't just deliver work — we deliver results that matter.</p>

                 <p className='text-neutral-300'><span className='text-white font-bold'>Growth Mindset</span> – We are learners, explorers, and builders of what's next.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

 
    
      {/* career */}
    <section className="bg-black h-fit py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Header */}
            <div className="flex items-center mb-6">
              <Star className="w-5 h-5 text-lime-400 mr-2 fill-lime-400" />
              <span className="text-white uppercase tracking-wider text-sm font-medium">We're Hiring – Come Make an Impact</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight">
            Career & <span className="text-lime-400">Recruitment</span>
            </h2>
            
            
            <p className="text-gray-300 text-lg max-w-xl">
              At <span className='font-bold text-lime-400'>GardensReach Digital</span> we&rsquo;re more than a company — we&rsquo;re a team of innovators, creators, and problem-solvers driven by a passion for digital excellence. Whether you're a tech expert, a marketing strategist, or a creative thinker, there&rsquo;s a place for you here.</p>
            <p className='text-white text-lg max-w-xl font-bold '> We&rsquo;re always looking for fresh talent ready to grow, collaborate, and make an impact in the digital space.</p> 
            

            <Link to="/job-application">
              <button className="flex items-center border-lime-400 border-2 mt-6 bg-gray-800 hover:bg-gray-700 transition-colors rounded-full py-3 px-6 ">
                <span className="text-white mr-4 md:text-lg text-[15px]">Apply For Job</span>
                <div className="w-8 h-8 bg-lime-400 animate-bounce rounded-full flex items-center justify-center group-hover:bg-lime-500 transition-colors">
                <ArrowRight className="w-4 h-4 text-black " />
                </div>
              </button>
            </Link>
          </div>
          
          {/* Right Column - Image */}
          <div className="mt-8 lg:mt-0">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={recruit} 
                alt="Team collaborating on software development" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

     <Cta />
     <Footer />
    </>
  )
}

export default About