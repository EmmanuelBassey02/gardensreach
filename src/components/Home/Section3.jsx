import React from 'react';
import { Star, Headphones, ArrowUpRight, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Section3 = () => {
  return (
    <>
    <section className="bg-black h-fit py-12 px-[3vw] md:px-[4vw]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center md:mb-8 mb-6">
          <Star className="w-5 h-5 text-lime-400 mr-2 fill-lime-400" />
          <span className="text-white uppercase tracking-wider text-sm font-medium">Why Choose Us</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-relaxed">
              Trusted <span className="text-lime-400">expertise</span> for your
              technology needs
            </h2>
            
            {/* Description */}
            <p className="text-gray-300 mb-12 md:text-base text-[15px] max-w-xl">
              We&rsquo;re not just a service provider — we&rsquo;re a digital partner. Our approach is collaborative, transparent, and built for growth. With a team of experienced professionals, we ensure every solution is purposeful, scalable, and future-ready.
            </p>
            
            {/* 24/7 Support Feature */}
            <div className="md:mb-12 mb-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full border border-lime-400 flex items-center justify-center mr-4">
                  <Headphones className="w-5 h-5 text-lime-400" />
                </div>
                <h3 className="text-white text-2xl font-bold">24/7 Dedicated Customer Support</h3>
              </div>
            </div>
            
            {/* Divider */}
            <div className="border-t border-gray-800 md:mb-8 mb-2"></div>
            
            
            {/* Contact Button */}
            <div>
              <Link to="/contact">
              <button className="flex items-center bg-gray-800 hover:bg-gray-700 transition-colors rounded-full py-3 px-6 group">
                <span className="text-white mr-4">Contact Us</span>
                <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center group-hover:bg-lime-500 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </div>
              </button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
              <div className="relative h-64 md:h-full">
                <img 
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team members collaborating" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="relative h-64 md:h-full mt-12 md:mt-24">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="IT professional working" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Section3;