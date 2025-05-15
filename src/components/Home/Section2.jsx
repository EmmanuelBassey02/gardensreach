import React from 'react';
import { Star, ArrowRight, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Section2 = () => {
  return (
    <>
    <div className="bg-black h-fit pt-[120px] pb-[100px] px-[3vw] md:px-[4vw]">
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
                    <div className="text-black text-2xl font-bold">493+</div>
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
              <span className="text-white uppercase tracking-wider text-sm font-medium">About Company</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-lime-400">Who</span> We Are<br />
            </h2>
            
            {/* Description */}
            <p className="text-gray-300 mb-12 md:text-base text-[15px] max-w-xl leading-relaxed">
            <span className="text-lime-400 font-bold"> GardensReach Digital </span>
          is a dynamic digital solutions company dedicated to helping businesses grow and innovate through strategic marketing and cutting-edge technology. <br />
           <br /> We specialize in delivering results-driven <span className='font-bold text-lime-400'>Digital Marketing</span> and scalable <span className='font-bold text-lime-400'>Tech/IT services</span> that empower brands to reach their full potential. Whether you're looking to amplify your online presence or build robust digital products, we partner with you to turn ideas into impactful results. 
            </p>
            
            {/* Bullet Points */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full border border-lime-400 flex items-center justify-center mr-3">
                  <Circle className="w-2 h-2 text-lime-400 fill-lime-400" />
                </div>
                <span className="text-white">Driving Growth Through Intelligent Digital Solutions</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full border border-lime-400 flex items-center justify-center mr-3">
                  <Circle className="w-2 h-2 text-lime-400 fill-lime-400" />
                </div>
                <span className="text-white">Partnering with You to Deliver Maximum Results</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full border border-lime-400 flex items-center justify-center mr-3">
                  <Circle className="w-2 h-2 text-lime-400 fill-lime-400" />
                </div>
                <span className="text-white">Innovation That Translates Into Tangible Success</span>
              </div>
            </div>
            
            {/* More About Button */}
            <div className="mb-12">
                <Link to="/about">
              <button className="flex items-center bg-gray-800 hover:bg-gray-900 md:text-lg text-base border-2 hover:border-lime-400 transition-colors rounded-full py-3 px-6 group">
                <span className="text-white mr-4">See More</span>
                <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center group-hover:bg-lime-500 transition-colors">
                  <ArrowRight className="w-4 h-4 text-black" />
                </div>
              </button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="bg-black bg-opacity-50 border border-gray-800 rounded-xl p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-lime-400 text-2xl md:text-4xl lg:text-5xl font-bold mb-2">100%</div>
                  <div className="text-white">Success Rate</div>
                </div>
                <div>
                  <div className="text-lime-400 text-2xl md:text-4xl lg:text-5xl font-bold mb-2">1,536</div>
                  <div className="text-white">Satisfied clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Section2;