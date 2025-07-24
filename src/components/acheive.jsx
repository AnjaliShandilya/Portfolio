import React, { useRef, useEffect, useState } from "react";
import Footer from "./foter";
import Section from "./othersection";
import Nav from "./sticky";

 export function WhatSetsMeApart() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const points = [
    "Quick to adapt and always eager to learn emerging technologies.",
    "Collaborative team player with strong communication skills.",
    "Analytical thinker who enjoys solving real-world problems.",
    "Organized and reliable with excellent time management.",
    "Open to feedback and focused on continuous improvement.",
    "Creative mindset with a passion for clean and user-friendly design.",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div ref={sectionRef} className="md:my-10 my-6 lg:my-12">
      <h1 className=" text-2xl md:text-4xl text-white font-semibold my-10 text-center">What Sets Me Apart</h1>
      <ul className="text-white">
        {points.map((text, i) => (
          <li
            key={i}
            className={`lg:text-xl md:text-lg text-[10px] m-auto bg-gray-900 w-10/12 text-center py-4  rounded-2xl mt-2 md:mt-5 opacity-0 ${
              isVisible ? "animate-floatUp" : ""
            }`}
            style={isVisible ? { animationDelay: `${i * 0.3}s` } : {}}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}



export default function Achievements(){
  return(<>
  <div className="hidden md:flex md:pt-10 lg:pt-0"><Section/></div>
  <div><h1 className="lg:text-5xl md:text-4xl text-2xl font-bold text-white text-center py-3 md:py-[50px] animate-slideUp md:px-6 px-3 lg:px-10">Creating Possibilities, Conquering Challenges!</h1>
  <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7 sm:grid-cols-1 md:w-11/12 w-10/12 m-auto lg:py-8 py-4">
    <div className="h-80 border-2 border-white rounded-3xl w-11/12 px-3 hover:border-purple-500 md:hover:-translate-y-4"> <img src="/leetcode.png" className="w-10/12 m-auto h-32 mt-5 rounded-3xl cover mb-7"></img>
    <a href="https://leetcode.com/u/AnjaliShandilya/" target="_blank" className="font-medium text-2xl  md:text-left md:p-3 p-1 text-white hover:underline">Leetcode Profiel</a>
    <p className="text-base text-white py-2 text-center">AnjaliShandilya</p>
    <p className="text-base text-blue-400 md:py-2 py-1 text-center">100+ Problems Solved</p>
    </div>
    <div className="h-80 border-2 border-white rounded-3xl w-11/12 px-3 hover:border-purple-500 md:hover:-translate-y-4"> <img src="/hacker.png" className="w-10/12 m-auto h-32 mt-5 rounded-3xl cover mb-7"></img>
    <a href="https://www.hackerrank.com/profile/anjalishandilya2" target="_blank" className="font-medium text-2xl text-left p-3 text-white hover:underline">Hackrank Profiel</a>
    <p className="text-base text-white py-2 text-center">@anjalishandilya2</p>
    <p className="text-base text-blue-400 py-2 text-center">100+ Problems Solved</p>
    </div>
    <div className="h-80 border-2 border-white rounded-3xl w-11/12 px-3 hover:border-purple-500 md:hover:-translate-y-4"> <img src="/codeforce.png" className="w-10/12 m-auto h-32 mt-5 rounded-3xl cover mb-7"></img>
    <a href="https://codeforces.com/profile/anjalishandilya333" target="_blank" className="font-medium text-2xl text-left p-2 text-white hover:underline">Codeforce Profiel</a>
    <p className="text-base text-white py-2 text-center">anjalishandilya333</p>
    <p className="text-base text-blue-400 py-2 text-center">100+ Problems Solved</p>
    </div>
    <div className="h-80 border-2 border-white rounded-3xl w-11/12 px-3 hover:border-purple-500 md:hover:-translate-y-4"> <img src="/codechef.png" className="w-10/12 m-auto h-32 mt-5 rounded-3xl cover mb-7"></img>
    <a href="https://www.codechef.com/users/anjali_shady" target="_blank" className="font-medium text-2xl text-left p-3 text-white md:hover:underline">Codechef Profiel</a>
    <p className="text-base text-white py-2 text-center">anjali_shady</p>
    <p className="text-base text-blue-400 py-2 text-center">100+ Problems Solved</p>
    </div>

    </div>
    
  </div>
  <WhatSetsMeApart/>
    <div className="md:flex hidden">
    <Footer/></div>
    <Nav/>
  </>)
}