import React from 'react';
import ctabg from '../../assets/ctabg.jpg'
import '../Home/styles/cta.css'
import { Link } from 'react-router-dom';

const Cta = () => {
  return (
    <div className="cta relative min-h-[70vh] md:min-h-[100vh]  flex items-center justify-center overflow-hidden bg-fixed" style={{ backgroundImage: `url(${ctabg})` }}>
      {/* Background with grid and geometric shape */}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Small Header */}
        <div className="mb-4">
          <p className="text-lime-400 text-sm md:text-base uppercase tracking-wider">LET'S COLLABORATE</p>
        </div>
        
        {/* Main Text */}
        <div className="relative">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight leading-none">
            LET'S WORK
            <div className="relative inline-block">
              {/* Green Button */}
              {/* <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button className="w-24 h-24 md:w-32 md:h-32 bg-lime-300 hover:bg-lime-400 transition-colors rounded-full flex flex-col items-center justify-center group">
                  <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-black mb-1 group-hover:translate-x-1 transition-transform" />
                  <span className="text-black text-xs md:text-sm font-medium">Get In Touch</span>
                </button>
              </div> */}
            </div>
            <br />TOGETHER
          </h2>
        </div>

        <Link to="/contact">
          <button className='bg-lime-400 mt-6 border-2 border-lime-400 rounded-2xl text-black px-5 py-3 text-lg font-semibold hover:bg-transparent hover:text-lime-400'>
            Request a Quote
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cta;