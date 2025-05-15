import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import lgo from '../../assets/lgo.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-[3vw] md:px-[4vw]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-8 ">
          {/* Logo and Contact Info */}
          <div className="bg-black bg-opacity-50">
            
            <h1 className="text-xl font-bold mb-3 text-lime-400">Contact</h1>
            
            {/* Contact Info */}
            <div className="space-y-4 ">
              <div className="flex justify-center items-center">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mr-3 border border-gray-800">
                  <Mail className="w-5 h-5 text-lime-400" />
                </div>
                <div>
                  <a href='mailto:gardensreach@gmail.com'>
                    <p className="text-white">gardensreach@gmail.com</p>
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center items-center">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mr-3 border border-gray-800">
                  <MapPin className="w-5 h-5 text-lime-400" />
                </div>
                <div>
                  <p className="text-white">123 Creative Lane London,</p>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mr-3 border border-gray-800">
                  <MapPin className="w-5 h-5 text-lime-400" />
                </div>
                <div>
                  <p className="text-white">123 Creative Lane London,</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className=''>
            <h3 className="text-xl font-bold mb-3 text-lime-400">Company</h3>
            <div className="flex flex-col gap-4">
            <Link to='/'> <p className='hover:underline'>Home</p></Link>
            <Link to='/about'> <p className='hover:underline'>About Us</p></Link>
            <Link to='/services'> <p className='hover:underline'>Services</p></Link>
              <Link to='/contact'> <p className='hover:underline'>Contact Us</p></Link>

            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-lime-400 ">Quick Links</h3>
            
            <div className="flex flex-col gap-4">
             <Link to='/application-form'><p className='hover:underline'>Apply For Job</p></Link>

             <Link to='/contact'> <p className='hover:underline'>Contact Us</p></Link>

             <Link to='/contact'> <p className='hover:underline'>Request a Quote</p></Link>

             {/* <Link to='/contact'> <p className='hover:underline'>Contact Us</p></Link> */}



              <p></p>
            </div>
          </div>
          
          {/* Support */}
          <div className='max-w-[270px]'>
          <img src={lgo} alt="" className='md:h-18 h-8 md:mb-6 mb-4'/>
            {/* <h3 className="text-xl font-bold mb-6 text-lime-400">LOGO</h3> */}
           <p className='text-neutral-300 text-sm'>
           <span className='font-bold text-white'>GardensReach Digital</span> is a forward-thinking digital agency committed to driving business growth and innovation through smart marketing and advanced tech solutions.
           </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;