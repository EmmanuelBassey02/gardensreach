import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import lgo from '../../assets/lgo.png'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setNav(false);
    }
  };

  useEffect(() => {
    if (nav) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [nav]);

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'About', path: '/about' },
    { id: 3, text: 'Services', path: '/services' },
    { id: 4, text: 'Contact', path: '/contact' },
  ];

  return (
    <div className='bg-[#142401] sticky top-0 z-50'>
    <div className='bg-[#142401] m-auto max-w-[1700px] border-b border-lime-400  flex justify-between items-center md:h-[75px] h-[55px] md:px-[4vw] px-[3vw] text-white'>
    
      <div className='overflow-hidden'>
        <Link to="/">
          <img src={lgo} alt="" className='md:size-12 size-8 '/>
        </Link>
       </div>
      <ul className='hidden md:flex gap-[26px]'>
        {navItems.map(item => (
          <li
            key={item.id}
            className={`p-1 m-2 cursor-pointer font-[500] sm:text-[17px] text-sm hover:border-b-2 border-lime-400 hover:text-lime-400 ${
              location.pathname === item.path ? 'text-lime-400' : ''
            }`}
          >
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        ref={navRef}
        className={`fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-lime-800 bg-gradient-to-br from-black via-black to-[#142401] duration-300 ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      > 
        <div className=' h-[100px] py-[10px] pt-[24px] pl-[20px] mb-3'>
          <Link to="/">
           <img src={lgo} alt="" className='h-8 '/>
           {/* <h1 className='border-2 border-lime-400 text-yellow-600 p-2 font-bold text-[20px] w-[170px]'>JESECT OBI Global Services</h1> */}
          </Link>
        </div>
        {navItems.map(item => (
         <Link to={item.path}>
         <li
            key={item.id}
            className={`p-4 hover:bg-[#17182d] font-bold cursor-pointer duration-300 hover:text-lime-400 ${
              location.pathname === item.path ? 'text-lime-400' : ''
            }`}
            
          >
            {item.text}
          </li>
          </Link>  
        ))}
         <div className='pl-[16px] block lg:hidden mt-4'>
            <Link to="/job-application">
              <button className='bg-lime-400  rounded-[8px] px-4 py-2 text-black hover:bg-lime-500 sm:text-base text-sm active:scale-95'>
                Apply for Job
              </button>
            </Link>
          </div>
      </ul>

     <div className='lg:block hidden'>
        <Link to="/job-application">
          <button className='bg-lime-400  border-2 border-lime-400 rounded-2xl text-black px-3 py-2 md:text-base font-semibold hover:bg-transparent hover:text-lime-400 sm:text-base text-sm active:scale-95'>
            Apply For Job
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
