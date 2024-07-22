

import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import './App.css';
import profile from './profile.webp';
import SocialMedia from './components/SocialMedia';
import pdf from './Resume.pdf';

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

  const HeroButton = ({ text }) => {
    return (
      <button className="mb-8 mr-4">
        <Link to={text} smooth={true} duration={500}
          className='
          hover:bg-orange-300 hover:text-stone-900 hover:py-3 border-r-8 border-b-8 border-stone-900 
          rounded-lg p-2
          text-xl
          text-stone-700
          bg-orange-200'>
          {text}
        </Link>
      </button>
    )
  }

  return (
    <div className="container min-h-screen max-w-screen-xl bg-stone-700 md:bg-stone-400 md:bg-none pt-12 md:pt-96">

      <div className='z-10 hidden md:block absolute max-w-screen-xl w-full bottom-[-30vh] h-[125vh] bg-stone-800
                      border-r-8 border-t-8 border-orange-500 rounded-lg overflow-hidden box-border text-left'
        style={{ transform: `scale(${scale})` }}></div>

      <div className={`z-20 fixed md:w-[80%] lg:w-3/5 md:left-[10%] lg:left-[20%] border-box text-left overflow-hidden ${opacity > 0 ? '' : 'hidden'}`}
        style={{ opacity: opacity }}>
        {/* box container */}

        <div className="flex flex-col-reverse ml-4 mr-2 md:flex-row">
          {/* Left Side */}
          <div className="md:w-1/4 flex flex-row-reverse md:flex-col justify-end md:justify-center items-center">
            <img src={profile} className="
                    mx-8
                    md:mx-0
                    h-48
                    md:h-auto
                    md:w-48
                    bg-slate-300
                    rounded-lg                    
                    mt-4
                    md:p-4
                    border-r-4
                    border-b-4
                    border-solid
                    border-orange-500"
              alt="Logo" />
            <div className="w-12 md:w-44 lg:w-48">
              <SocialMedia />
            </div>
          </div>

          {/* Right Side */}
          <div className='w-full my-16 md:w-3/4 text-left md:pl-12'>
            <div className='md:pl-4 border-box'>
              <div className='md:mt-4 md:mb-8'>
                <h1 className="text-base inline">Hi, my name is </h1>
                <br></br>
                <h1 className="text-4xl font-bold inline">Miguel Gutierrez</h1>
                <h1 className="text-4xl font-bold text-blue-300">I build high-quality software solutions.</h1>
              </div>

              <ul className='flex flex-inline items-center mb-8 flex-wrap mt-8'>
                <HeroButton text="About Me" />
                <HeroButton text="Work Experience" />
                <HeroButton text="Projects" />
                <button className="mb-8 mr-4">
                  <a href={pdf} target="_blank" rel="noopener noreferrer"
                    className='hover:bg-orange-700 border-r-8 border-b-8 border-stone-950 
                      hover:py-3
                      rounded-lg p-2
                      text-xl
                      text-orange-100 
                      bg-orange-600'>
                    Resume
                  </a>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
