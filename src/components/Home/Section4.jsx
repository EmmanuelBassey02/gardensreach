import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We begin by understanding your brand, goals, and challenges to tailor the right strategy.",
      icon: (
        <svg className="w-10 h-10 text-lime-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 12L16 9M12 12L16 15M12 12L8 9M12 12L8 15" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description: "We craft a custom roadmap aligned with your objectives — ensuring purpose drives every decision.",
      icon: (
        <svg className="w-10 h-10 text-lime-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path d="M20 20L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9 11H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M11 9L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Execution & Optimization",
      description: "Our experts bring your project to life with precision, creativity, and a focus on performance.",
      icon: (
        <svg className="w-10 h-10 text-lime-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 14H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 14H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Review & Support",
      description: "We analyze results, refine where needed, and offer ongoing support to ensure long-term success.",
      icon: (
        <svg className="w-10 h-10 text-lime-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M21 12H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 21V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M3 12H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <>
    <div className="bg-black h-fit py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center md:mb-6 mb-3">
           <div className="flex items-center md:mb-6 mb-4">
              <Star className="w-5 h-5 text-lime-400 mr-2 fill-lime-400" />
              <span className="text-white uppercase tracking-wider text-sm font-medium">How It Work</span>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Main Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 leading-tight md:mb-8 mb-3">
              Simple Steps to<br />Digital Success
            </h2>
          </div>

          {/* Description and CTA */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-400 mb-8 md:text-base text-[15px]">
            At GardensReach Digital, we follow a streamlined, client-first approach designed to keep your goals at the center of everything we do. From initial discovery to final delivery, our process is built for clarity, efficiency, and accountability. We take time to understand your unique needs, craft tailored strategies, and execute with precision—ensuring every project not only meets expectations but delivers measurable, impactful results.
            </p>

            <div>
              <Link to="/contact">
              <button className="flex items-center text-lime-500 hover:text-lime-400 transition-colors group">
                <span className="mr-2 font-medium">Get Started Now</span>
                <div className="group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-5 h-5 animate-bounce" />
                </div>
              </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="border border-lime-700 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="absolute top-0 right-0 text-gray-500 font-bold text-xl">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="mb-6">
                  {step.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-white text-xl font-semibold mb-4">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HowItWorksSection;