

import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import './App.css';
import profile from './profile.webp';
import SocialMedia from './components/SocialMedia';


const HeroSection = () => {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scaleValue = Math.min(1 + scrollY / 1000, 2);

    const opacityValue = Math.max(1 - scrollY / 500, 0);

    setScale(scaleValue);
    setOpacity(opacityValue);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container min-h-screen max-w-screen-xl flex justify-center items-center overflow-hidden" >

      <div className='absolute max-w-screen-xl w-full bottom-[-30vh] h-[125vh] p-4 bg-stone-800
                      border-r-8 border-t-8 border-slate-500 rounded-sm overflow-hidden box-border text-left'
        style={{ transform: `scale(${scale})` }}></div>

      <div className={`z-10 fixed mx-auto box-border text-left overflow-hidden ${opacity > 0 ? '' : 'hidden'}`}
        style={{ opacity: opacity }}>
        {/* box container */}

        <div className="flex flex-col md:flex-row">
          {/* Left Side */}
          <div className="w-1/4 flex justify-end">
            <div className="">
              <img src={profile} className="w-64 bg-slate-300 rounded-lg p-4 border-r-4 border-b-4 border-solid border-orange-500" alt="Logo" />
              <SocialMedia />
            </div>
          </div>

          {/* Right Side */}
          <div className='w-3/4'>
            <div className='pl-24 border-box'>
              <div className='mt-4 mb-16'>
                <h1 className="text-base inline">Hi, my name is </h1>
                <br></br>
                <h1 className="text-4xl font-bold inline">Miguel Gutierrez</h1>
                <h1 className="text-4xl font-bold text-blue-300">I build high-quality web applications solutions.</h1>
              </div>

              <ul className='flex flex-inline items-center mb-8'>
                <button className="mb-2 mr-4">
                  <Link to="About Me" smooth={true} duration={500} className="text-blue-100 hover:bg-stone-900 border-b-2 border-r-2 border-orange-500 rounded-sm p-2">
                    About Me
                  </Link>
                </button>
                <button className="mb-2 mr-4">
                  <Link to="Work Experience" smooth={true} duration={500} className="text-blue-100 hover:bg-stone-900 border-b-2 border-r-2 border-orange-500 rounded-sm p-2">
                    Work Experience
                  </Link>
                </button>
                <button className="mb-2 mr-4">
                  <Link to="Projects" smooth={true} duration={500} className="text-blue-100 hover:bg-stone-900 border-b-2 border-r-2 border-orange-500 rounded-sm p-2">
                    Projects
                  </Link>
                </button>
                <li className="mb-2 mr-4">
                  <button className="bg-orange-600 text-white px-2 py-2 rounded-lg">Resume</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
