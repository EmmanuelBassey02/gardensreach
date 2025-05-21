import React from 'react'
import { Star, ArrowUpRight } from 'lucide-react';

function Section6() {
    const awards = [
        {
          title: "IT Project Delivery",
          year: "2019",
          description: "We create customized social media strategies that align with your brand's."
        },
        {
          title: "Technology Integration",
          year: "2020",
          description: "We create customized social media strategies that align with your brand's."
        },
        {
          title: "ERP Solution",
          year: "2021",
          description: "We create customized social media strategies that align with your brand's."
        },
        {
          title: "Digital Transformation Leader",
          year: "2022",
          description: "We create customized social media strategies that align with your brand's."
        },
        {
          title: "Sustainability in Tech Award",
          year: "2023",
          description: "We create customized social media strategies that align with your brand's."
        },
        {
          title: "Leadership in Cybersecurity",
          year: "2024",
          description: "We create customized social media strategies that align with your brand's."
        }
      ];
  return (
    <>
      <section className='bg-[#adf802] md:p-2 p-1 h-fit'>
         <div className="bg-black h-fit py-16 px-[3vw] md:px-[4vw] relative overflow-hidden">
            {/* Background Gradient Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl">
                <div className="w-full h-full bg-[#adf802] rounded-full opacity-5 blur-3xl"></div>
            </div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex justify-center items-center mb-6">
                <Star className="w-5 h-5 text-lime-400 mr-2 fill-lime-400" />
                <span className="text-white uppercase tracking-wider text-sm font-medium">Awards</span>
                </div>
                
                {/* Main Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center md:mb-16 mb-10">
                Celebrating our <span className="text-lime-400">achievements</span> in<br />
                IT excellence
                </h2>
                
                {/* Awards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {awards.map((award, index) => (
                    <div 
                    key={index} 
                    className="bg-black bg-opacity-80 border border-gray-800 rounded-xl p-6 hover:border-lime-500/60 transition-colors relative group"
                    >
                    {/* Green dot for middle card */}
                    {index === 1 && (
                        <div className="absolute -top-1 right-8 w-2 h-2 bg-lime-400 rounded-full"></div>
                    )}
                    
                    {/* Award Title */}
                    <div className="flex items-center mb-4">
                        <Star className="w-5 h-5 text-lime-400 mr-2 fill-lime-400" />
                        <h3 className="text-white font-semibold">
                        {award.title} <span className="text-lime-400 text-sm">[{award.year}]</span>
                        </h3>
                    </div>
                    
                    {/* Award Description */}
                    <p className="text-gray-400 mb-8">
                        {award.description}
                    </p>
                    
                    {/* Arrow Icon */}
                    <div className="absolute bottom-6 left-6">
                        <ArrowUpRight className="w-5 h-5 text-lime-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                    </div>
                ))}
                </div>
            </div>
         
        </div>
      </section>
    </>
  )
}

export default Section6