import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import lgo from '../../assets/lgo.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-[3vw] md:px-[4vw]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-start gap-8">

          {/* Quick Links */}
          <div className=''>
            <h3 className="md:text-xl text-lg font-bold mb-3 text-lime-400">Company</h3>
            <div className="flex flex-col gap-4">
            <Link to='/'> <p className='hover:underline'>Home</p></Link>
            <Link to='/about'> <p className='hover:underline'>About Us</p></Link>
            <Link to='/services'> <p className='hover:underline'>Services</p></Link>
              <Link to='/contact'> <p className='hover:underline'>Contact Us</p></Link>

            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="md:text-xl text-lg font-bold mb-6 text-lime-400 ">Quick Links</h3>
            
            <div className="flex flex-col gap-4">
             <Link to='/sjob-application'><p className='hover:underline'>Apply For Job</p></Link>

             <Link to='/contact'> <p className='hover:underline'>Contact Us</p></Link>

             <Link to='/contact'> <p className='hover:underline'>Request a Quote</p></Link>

            </div>
          </div>



           {/* Logo and Contact Info */}
           <div className="bg-black bg-opacity-50">
            
            <h1 className="md:text-xl text-lg font-bold mb-3 text-lime-400 sm:mt-0 mt-5">Contact</h1>
            
            {/* Contact Info */}
            <div className="space-y-4 ">
              <div className="flex justify-center items-center gap-4">
                  <Mail className="w-5 h-5 text-lime-400" />
                <div>
                  <a href='mailto:gardensreach@gmail.com'>
                    <p className="text-white">gardensreach@gmail.com</p>
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center items-center gap-4">
                  <MapPin className="w-5 h-5 text-lime-400 -ml-4" />
                <div>
                  <p className="text-white">600 Montgomery St <br /> San Francisco, CA 94111</p>
                </div>
              </div>
            </div>
          </div>



          
          {/* Support */}
          <div className='max-w-[270px]'>
          <img src={lgo} alt="" className='md:h-12 h-8 md:mb-6 mb-4'/>
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