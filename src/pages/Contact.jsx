import React from 'react';
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import herobg from '../assets/herobg.jpg'
import '../styles/Contact.css'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, PhoneIcon as WhatsApp, ChevronUp } from 'lucide-react';

const QuoteForm = () => {
  return (
    <>
    <Navbar />
    <section className="contact bg-fixed md:px-[4vw] px-[3vw] bg-[#1c0d3d] text-white min-h-screen" style={{ backgroundImage: `url(${herobg})` }}>
    {/* <div className="absolute bottom-0 animate-bounce right-0 w-48 h-48 md:w-64 md:h-64 bg-lime-400 rounded-full  opacity-20 blur-3xl" /> */}
        <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-lime-400 rounded-full  opacity-20 blur-3xl" />
     
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="border-b md:border-b-0 md:border-r border-lime-800 pb-8 md:pb-0 md:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need more info? We'd love to hear from <span className="text-lime-400 ">you!</span>
            </h2>
            
            <p className="text-gray-300 mb-8">
              Complete the form to talk to a member of our team about getting started.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <Mail className="w-6 h-6 text-lime-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Interested in working with us?</p>
                  <a href="mailto:gardensreach@gmail.com" className="text-white hover:text-lime-400 transition-colors">
                    gardensreach@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <Phone className="w-6 h-6 text-[#d5f379]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Feel Free To Call Us</p>
                  <a href="tel:(528)456-7592" className="text-white hover:text-[#d5f379] transition-colors">
                    (528) 456-7592
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <MapPin className="w-6 h-6 text-[#d5f379]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Visit Our Location</p>
                  <p className="text-white">
                    5th Street, 21st Floor, New York 99508, USA.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="md:pl-8">
            <div className="flex justify-end mb-6">
              <button className="border border-lime-400 md:text-base text-sm rounded-full px-6 py-2  text-lime-400 transition-colors">
                REQUEST A QUOTE
              </button>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to bring your idea to life?
            </h2>
            
            <p className="text-gray-300 mb-8 md:text-base text-[15px]">
              Tell us what you need, and we&rsquo;ll craft a custom solution tailored to your business goals. Whether it&rsquo;s a website, an app, branding, or IT support—we&rsquo;ll send you a detailed quote at no cost.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-[#0d1801] placeholder:text-gray-400 border border-lime-800 rounded-md px-4 py-3 focus:outline-none focus:border-lime-700 focus:border"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-[#0d1801] placeholder:text-gray-400 border border-lime-800 rounded-md px-4 py-3 focus:outline-none focus:border-lime-700"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="tel" 
                  placeholder="Your Phone number" 
                  className="bg-[#0d1801] placeholder:text-gray-400 border border-lime-800 rounded-md px-4 py-3 focus:outline-none focus:border-lime-700"
                />
                <select className="bg-[#0d1801] placeholder:text-gray-400 border border-lime-800 text-gray-400 rounded-md px-4 py-3 focus:outline-none focus:border-lime-700">
                  <option>Select Service</option>
                  <option>Web Development</option>
                  <option>Digital Marketing</option>
                  <option>Graphic Design</option>
                </select>
              </div>
              
              <textarea 
                placeholder="Please describe your needs. The more we know, the better." 
                rows={6}
                className="resize-none  w-full placeholder:text-gray-500  bg-[#0d1801] border border-lime-800 rounded-md px-4 py-3 focus:outline-none focus:border-lime-700"
              ></textarea>
              
              <div className="flex justify-between items-center">
                <button 
                  type="submit" 
                  className="bg-lime-400 text-black md:text-base text-sm font-medium rounded-full md:px-8 px-5 py-3 hover:bg-[#bbd570] transition-colors"
                >
                  SEND MESSAGE
                </button>
                
                <button 
                  type="button" 
                  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                  className="bg-lime-400 p-2 rounded"
                >
                  <ChevronUp size={20} className="text-black" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <Footer />
    </>
  );
};

export default QuoteForm;