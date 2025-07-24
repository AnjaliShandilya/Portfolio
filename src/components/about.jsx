import { useEffect, useState, useRef } from "react";
import Footer from "./foter";
import Section from "./othersection";
import Nav from "./sticky";

const educationData = [
  {
    title: "Bachelor Of Computer Applications",
    institute: "Himachal Pradesh University (H.P.U Shimla)",
    duration: "2020 - 2023 | Completed",
  },
  {
    title: "XII (H.P Board) | Non Medical",
    institute: "Minerva Ghumarwin, Himachal Pradesh",
    duration: "2019 - 2020 | Completed",
  },
  {
    title: "X (H.P Board)",
    institute: "Minerva Ghumarwin, Himachal Pradesh",
    duration: "2017 - 2018   | Completed",
  },
];

export const EducationTimeline = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-black md:py-12 py-5">
      <h2 className="text-white text-center lg:text-6xl md:text-4xl text-3xl font-bold  md:mb-16 mb-7">Education</h2>

      <div className="relative border-l-4 md:text-xl text-lg py-4 border-purple-600 md:w-7/12  w-9/12 mx-auto pl-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`relative md:mb-16 mb-8 transition-all duration-500 ease-out opacity-0 ${
              visible ? "opacity-100 animate-floatUp" : ""
            }`}
            style={visible ? { animationDelay: `${index * 0.3}s` } : {}}
          >
            {/* Dot */}
            <span className="absolute left-[-11px] top-1.5 w-5 h-5 bg-black border-4 border-cyan-400 rounded-full"></span>

            {/* Content */}
            <div className="text-white ml-4">
              <h3 className="md:text-2xl text-base font-bold">{edu.title}</h3>
              <p className="text-sm font-semibold text-gray-300 mt-1">{edu.institute}</p>
              <p className="text-sm text-gray-400">{edu.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


 export const StatCard = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    const duration = 2000; // Total time for animation (ms)
    const stepTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-center ">
      <h1 className="lg:text-7xl md:text-5xl text-3xl   font-extrabold text-purple-600">{count}+</h1>
      <p className="lg:text-lg md:base mt-1">{label}</p>
    </div>
  );
};
const expirenceData = [
  {
    title: "Frontend Developer",
    institute: "RP Infocare PVT LTD",
    decription: "Designed complete UI sections from scratch using Figma; created consistent, user-friendly layouts.",
    duration: "Jan 2025 - June 2025 | Completed",
  },
  {
    title: "Frontend Developer",
    institute: "Excellence Technology",
    decription: "Worked on responsive web app designs in Figma, focusing on UX and visual consistency.",
    duration: "Jan 2023 - April 2023 | Completed",
  },
  {
    title: "Java Fullstack",
    institute: "Besant Technology",
    decription: "Built full-stack apps using Java, Spring Boot (backend) and React, HTML, CSS (frontend).",
    duration: "2024 - 2025 | Completed",
  },
  {
    title: "DSA",
    institute: "Apna College",
    decription: "Learned core DSA concepts and solved 150+ problems on LeetCode and GeeksforGeeks.",
    duration: "2024 | Completed",
  },
  {
    title: "Python and ML - Basic",
    institute: "SureTrust",
    decription: "Learned Python and basic ML concepts; worked with Scikit-learn, Pandas, and Matplotlib.",
    duration: "2023 | Completed",
  }
]


export const ExpirenceTimeline = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-black md:py-12 py-10">
      <h2 className="text-white text-center lg:text-6xl md:text-4xl font-bold   mb-5 md:mb-16 text-2xl">Expirence & Training Programs</h2>

      <div className="relative border-l-4  text-lg md:text-xl md:py-4 py-2 border-purple-600 w-9/12 md:w-7/12 mx-auto pl-6">
        {expirenceData.map((exp, index) => (
          <div
            key={index}
            className={`relative md:mb-16 mb-7 transition-all duration-500 ease-out opacity-0 ${
              visible ? "opacity-100 animate-floatUp" : ""
            }`}
            style={visible ? { animationDelay: `${index * 0.3}s` } : {}}
          >
            {/* Dot */}
            <span className="absolute left-[-11px] top-1.5 w-5 h-5 bg-black border-4 border-cyan-400 rounded-full"></span>

            {/* Content */}
            <div className="text-white ml-4">
              <h3 className="text-lg md:text-2xl font-bold">{exp.title}</h3>
              <p className="text-base font-semibold text-gray-300 mt-1">{exp.institute}</p>
              <p className="text-sm font-medium text-gray-300 mt-1">{exp.decription}</p>
              <p className="text-base text-gray-400">{exp.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


function About(){
  return(
    <>
    <div className="hidden md:flex md:pt-10 lg:pt-0"><Section/></div>
    <div className="md:p-12 p-6">
    <h2 className="text-3xl  md:text-4xl lg:text-5xl font-bold text-white text-center mt-[30px] md:mb-4 animate-slideUp">Driven by Curiosity, Powered by Code!</h2>
     <div className="bg-black text-white py-6 md:py-12 grid grid-cols-1 lg:grid-cols-3 lg:gap-3 md:grid-cols-2  w-full lg:items-center">
      <div className="  lg:mb-10 md:order-1 order-2 md:mt-0 mt-5 ml-3 md:ml-0 text-left items-center">
        <p className=" text-base">
          - Hello! I'm Anjali, a passionate full-stack developer and creative thinker,
          committed to building impactful and user-friendly web experiences. With a solid
          foundation in modern technologies and a deep interest in design systems, I aim
          to deliver clean and scalable solutions.
        </p>
        <p className="text-base">
          - I thrive in collaborative environments, constantly eager to explore new tools
          and frameworks. Whether it's debugging complex issues or brainstorming innovative
          features, I'm always ready to take on the challenge. Currently, I hold a Bachelor's
          in Computer Applications and continue to grow my skills every day.
        </p>
      </div>

      <div className="md:mt-3 ml-8 justify-center lg:order-2 order-1">
      
          <img
            src="/abt.png"
            alt="Anjali on beach"
            className="object-cover lg:h-[420px] w-[370px] rounded-3xl overflow-hidden shadow-xl border-4 border-purple-400"
          />
        
      </div>

      <div className=" order-3 items-center lg:space-y-10 mt-10  lg:mt-0 flex lg:grid md:col-span-2 lg:col-span-1 gap-5 md:justify-center">
        <StatCard target="300" label=" Problem Solved" />
      <StatCard target="8" label=" Projects Completed" />
      <StatCard target="1" label="Years of Experience" />
      </div>
    </div>
    <div className="p-9 pl-14 mt-5 bg-gray-900 rounded-xl">
      <p className="text-transparent text-white font-bold md:text-3xl text-xl" >Skills! </p>
      <p  className="text-transparent bg-clip-text bg-gradient-to-bl from-blue-900 to-pink-400  lg:pb-9 md:pb-4 pb-2 font-bold lg:text-6xl md:text-4xl text-2xl">Technical Skills</p>

      <div className=" grid grid-cols-5 md:pr-12 md:gap-4 md:grid-cols-9 gap-2 text-xl text-white w-11/12">
        <div className=" text-center md:text-xs text-[10px]"><div className="flex justify-center"><img className="lg:h-10 md:h-7 h-5"  src="/react.png" alt="lang"></img></div>React</div>
        <div className="  text-center md:text-xs text-[10px]"><div className="flex justify-center"><img className="lg:h-10 md:h-7 h-5" src="/js.png" alt="lang"></img></div>Javascript</div>
        <div className="text-center md:text-xs text-[10px]"><div className="flex justify-center"><img className="lg:h-10 md:h-7 h-5" src="/material.png" alt="lang"></img></div>MaterialUI</div>
        <div className="text-center md:text-xs text-[10px]"><div className="flex justify-center"><img className="lg:h-10 md:h-7 h-5" src="/redux.png" alt="lang"></img></div>Redux</div>
        <div className="text-center md:text-xs text-[10px]"><div className="flex justify-center"><img className="lg:h-10 md:h-7 h-5" src="/tailwind.png" alt="lang"></img></div>Tailwind</div>
        <div className="text-center md:text-xs text-[10px]"><div className="flex justify-center"><img className="lg:h-10 md:h-7 h-5" src="/next.png" alt="lang"></img></div>NextJs</div>
        <div className="text-center md:text-xs text-[10px]"><div className="flex justify-center"><img className="lg:h-10 md:h-7 h-5" src="/sql.png" alt="lang"></img></div>MySql</div>
        <div className="text-center md:text-xs text-[10px]"><div className="flex justify-center"><img className="lg:h-10 md:h-7 h-5" src="/java.png" alt="lang"></img></div>Java</div>
        <div className="text-center md:text-xs text-[10px]"><div className="flex justify-center"><img className="lg:h-10 md:h-7 h-5" src="/spring.png" alt="lang"></img></div>SpringBoot</div>
      </div>

      <h1 className=" my-5 text-xl md:text-3xl text-white font-medium">Other Skills</h1>
      <div className="md:w-10/12 grid grid-cols-3 md:grid-cols-4 md:gap-3 gap-1 lg:grid-cols-8">
        <div className="text-center md:text-sm text-[8px] text-white bg-gradient-to-tr from-pink-500 to-blue-500 py-2 col-span-2 rounded-full">Version Control System (Git)</div>
        <div className="text-center md:text-sm text-[8px]  text-white bg-gradient-to-tr from-pink-500 to-blue-500 py-2 rounded-full">User Interface</div>
        <div className="text-center md:text-sm text-[8px] text-white bg-gradient-to-tr from-pink-500 to-blue-500 py-2 rounded-full">Figma</div>
        <div className="text-center md:text-sm text-[8px] text-white bg-gradient-to-tr from-pink-500 to-blue-500 py-2 rounded-full">API integration</div>
        <div className="text-center md:text-sm text-[8px] text-white bg-gradient-to-tr from-pink-500 to-blue-500 py-2 rounded-full">DSA</div>
        <div className="text-center md:text-sm text-[8px] text-white bg-gradient-to-tr from-pink-500 to-blue-500 py-2 rounded-full">Firebase</div>
        <div className="text-center md:text-sm text-[8px] text-white bg-gradient-to-tr from-pink-500 to-blue-500 py-2 rounded-full">Canva</div>
      </div>
    </div>
    <ExpirenceTimeline/>
      <EducationTimeline/>
    </div>
    <div className="md:flex hidden">
    <Footer/></div>
    <Nav/>
    
    </>
  )
}
export default About;