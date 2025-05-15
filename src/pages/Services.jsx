import React from 'react'
import herobg from '../assets/herobg.jpg'
import { Link } from 'react-router-dom'
import '../styles/Services.css'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import { ArrowRight } from 'lucide-react';
import Cta from '../components/shared/Cta'


function Services() {

    const services = [
        {
          title: "Social Media Marketing",
          description: "We build and manage engaging social media presence to grow your brand, reach your audience, and drive results.",
        },
        {
          title: "SEO & Organic Growth",
          description: "We optimize your website for visibility, helping you rank higher on search engines and attract organic, high-quality traffic.",
        },
        {
          title: "Paid Ads & Analytics",
          description: "We create and manage targeted ad campaigns that maximize ROI across platforms like Google, Meta, and LinkedIn.",
        },
        {
          title: "Content Marketing",
          description: "We craft valuable, consistent content that informs, attracts, and builds trust with your target audience.",
        },
        {
          title: "Email Campaigns",
          description: "We deliver strategic email campaigns that boost engagement, nurture leads, and drive conversions.",
        }
        ];




      const techservices = [
        {
          title: "Website design & Development",
          description: "We design and build responsive, user-friendly websites tailored to your brand’s needs and goals.",
        },
        {
          title: "UI/UX design",
          description: "We design intuitive, aesthetically pleasing interfaces focused on user satisfaction and seamless digital experiences.",
        },
        {
          title: "Mobile App Development",
          description: "We develop high-performing mobile apps that deliver functionality, speed, and user satisfaction across devices.",
        },
        {
          title: "CRM Integration",
          description: "We streamline operations by integrating CRM systems that improve client management, communication, and efficiency.",
        },
        {
          title: "Data Analytics",
          description: "Crafting cohesive and memorable brand identities that reflect your values, connect with your audience.",
        },
        {
          title: "Software Maintenance",
          description: "Crafting cohesive and memorable brand identities that reflect your values, connect with your audience.",
        }
      ];
  return (
    <>
        <Navbar />
        <section className="services md:px-[4vw] px-[3vw] h-[70vh] py-[100px] bg-fixed flex items-center justify-center " style={{ backgroundImage: `url(${herobg})` }}>
        <div className="absolute bottom-0 animate-bounce right-0 w-48 h-48 md:w-64 md:h-64 bg-lime-400 rounded-full  opacity-20 blur-3xl" />
        <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-lime-400 rounded-full  opacity-20 blur-3xl" />
            <div className=''> 
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 text-white'>Our<span className='text-lime-400'> Services</span></h1>
                <p className='text-base md:text-2xl text-white w-fit m-auto'>
                  <Link to="/">
                    <span>Home{" "}</span>
                  </Link> * <span className='text-lime-400'>Services</span>
                </p>
            </div>
        </section>



        <section className="md:px-[4vw] px-[3vw] h-fit pt-[80px] pb-[10px] bg-black">
          <div className="mb-8 md:px-[4vw] px-[3vw] max-w-[1400px] m-auto">
              <div className="inline-block mb-6">
                <div className="px-4 py-2 border border-lime-400 text-lime-400 rounded-full text-sm">
                  Services we offer
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-3/5">
                  <h2 className="text-[30px] md:text-[36px] lg:text-[48px] font-bold text-white leading-relaxed sm:mb-6 mb-2">
                 Our <span className='text-lime-400'>Digital Marketing</span> Services
                  </h2>
                </div>
                
                <div className="lg:w-2/5">
                  <p className="text-gray-300 text-lg">
                  We help organizations strengthen their online presence, connect with their target audience, and achieve consistent growth in the digital space.
                  </p>
                </div>
              </div>
            </div>
        </section>


       
       <section className="bg-black h-fit pt-0 pb-8 px-[3vw] md:px-[4vw]">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
                <div 
                key={index} 
                className="bg-gray-950 rounded-3xl lg:p-8 border md:p-6 p-4   border-lime-700 hover:border-gray-700 transition-colors flex flex-col justify-between"
                >
                <h3 className="text-white text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                
                <div className="border-t border-gray-800 my-6"></div>
                
                <div className="flex items-center justify-between">
                    <Link to="/contact">
                    <button className="flex items-center bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg py-2 px-4 group">
                    <span className="text-white mr-2">Request Quote</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                    </button>
                    </Link>
                </div>
                </div>
            ))}
            </div>
         </div>
      </section>



      <section className="md:px-[4vw] px-[3vw] h-fit pt-[80px] pb-[10px] bg-black">
          <div className="mb-8 md:px-[4vw] px-[3vw] max-w-[1400px] m-auto">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-3/5">
                  <h2 className="text-[30px] md:text-[36px] lg:text-[48px] font-bold text-white leading-relaxed sm:mb-6 mb-2">
                 Our <span className='text-lime-400'>Tech/IT</span> Services
                  </h2>
                </div>
                
                <div className="lg:w-2/5">
                  <p className="text-gray-300 text-lg">
                  We provide end-to-end digital solutions—from user-focused design to seamless development and integrations—crafted to enhance functionality and drive business growth.
                  </p>
                </div>
              </div>
            </div>
        </section>



        <section className="bg-black h-fit pt-0 pb-16 px-[3vw] md:px-[4vw]">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techservices.map((services, index) => (
                <div 
                key={index} 
                className="bg-gray-950 rounded-3xl lg:p-8 border md:p-6 p-4 border-lime-700 hover:border-gray-700 transition-colors flex flex-col justify-between"
                >
                <h3 className="text-white text-2xl font-bold mb-4">{services.title}</h3>
                <p className="text-gray-400 mb-4">{services.description}</p>
                
                <div className="border-t border-gray-800 my-6"></div>
                
                <div className="flex items-center justify-between">
                    <div className="text-lime-400">
                    {services.icon}
                    </div>
                    <Link to="/contact">
                     <button className="flex items-center bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg py-2 px-4 group">
                     <span className="text-white mr-2">Request Quote</span>
                     <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                    </button>
                    </Link>
                </div>
                </div>
            ))}
            </div>
         </div>
      </section>


        <Cta />
        <Footer />
    </>
  )
}

export default Services







