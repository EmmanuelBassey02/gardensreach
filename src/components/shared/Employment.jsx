import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Employment = () => {
  return (
    <div className="bg-black h-fit md:pt-20 pt-10 md:pb-20 pb-10 border-b-lime-950 border px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Header */}
            <div className="flex items-center mb-6">
              <Star className="w-5 h-5 text-lime-400 mr-2 fill-lime-400" />
              <span className="text-white uppercase tracking-wider text-sm font-medium">Work With Us</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl  font-bold text-white md:mb-8 mb-5 leading-tight">
             <span className="text-lime-400">Join</span> Our Growing Team
            </h2>
            
            
            {/* Job aVAILability Description */}
            <p className="text-gray-300 md:text-base text-[15px] max-w-xl mb-5">
            At GardensReach Digital, we&rsquo;re always on the lookout for curious minds, passionate creators, and solution-driven professionals ready to shape the future of digital. If you&rsquo;re excited to work in a collaborative, fast-paced environment where innovation meets impact — we&rsquo;d love to hear from you. 
            <span className="text-white font-bold "> Explore open roles and become a part of our team.</span>
            </p>


            <Link to="/job-application">
              <button className='bg-lime-400 font-bold rounded-[8px] px-4 py-2 text-black hover:text-lime-400 hover:bg-transparent border-2 border-lime-400 sm:text-base text-sm active:scale-95'>
                Apply For Job
              </button>
            </Link>
          </div>
          
          {/* Right Column - Image */}
          <div className="mt-8 lg:mt-0">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" 
                alt="Team collaborating on software development" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employment;