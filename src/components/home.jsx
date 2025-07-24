import Footer from "./foter.jsx";
import Section from "./othersection.jsx";
import TypeWriter from "./typewrite.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (<>
  <div className="hidden lg:flex">
    <Section/>
  </div>
  
   <div className="flex flex-wrap md:gap-6 w-full lg:h-full h-screen  sm:px-10 items-center lg:items-start text-center md:text-left font-orbitron overflow-hidden md:px-6 px-7 lg:px-20 lg:pt-10" >
      {/* LEFT SIDE CONTENT */}
      <div className="flex-[1.5] w-full md:w-auto md:space-y-2 lg:pt-10 relative z-10 md:pb-16 ">
        <p className="text-transparent bg-clip-text bg-white font-extrabold text-2xl md:text-3xl ">
          Hey, I'm
        </p>

        <TypeWriter
          className="text-transparent bg-clip-text bg-gradient-to-bl from-blue-900 to-pink-500 font-bold text-[40px] md:text-6xl  "
          text=" Anjali Shandilya"
          speed={20}
        />

        {/* BADGES */}
        <div className="flex mb-3 items-center justify-start xs:justify-center   sm:justify-center md:justify-start  md:items-start  w-full md:w-auto z-10 gap-2" >
          <div className="bg-gradient-to-br from-blue-200 to-pink-200 text-blue-600 text-[9px] md:text-[13px] font-semibold  py-1 rounded-xl hover:scale-105 transition-transform duration-200 ease-in-out px-1">
            <i className="fas fa-code mr-1"></i>Full-stack Developer
          </div>
          <div className="bg-gradient-to-br from-blue-200 to-pink-200 text-blue-600 text-[9px] md:text-[13px] font-semibold  py-1 rounded-xl hover:scale-105 transition-transform duration-200 ease-in-out px-1">
            <i className="fa-solid fa-square-poll-vertical mr-1"></i>Driven by results
          </div>
          <div className="bg-gradient-to-br from-blue-200 to-pink-200 text-blue-600 text-[9px] md:text-[13px] font-semibold  py-1 rounded-xl hover:scale-105 transition-transform duration-200 ease-in-out px-1">
            <i className="fa-solid fa-chart-line mr-1"></i>1+ Experience
          </div>
        </div>

        {/* DESCRIPTION */}
        <div
          className="text-white font-medium text-[10px] md:text-base font-sans max-w-2xl py-2 md:py-4"
          >"Experienced Full-Stack Developer building fast, scalable apps with Next.js, React, TypeScript, and Tailwind.
            Focused on delivering production-grade solutions with pixel-perfect UI, clean architecture, and performance-first thinking. Let’s connect"</div>

        {/* BUTTONS */}
        <div className="lg:flex flex-wrap gap-4 mt-5 hidden">
          <button
            onClick={() => window.open("/resume.pdf", "_blank")}
            className="bg-blue-600 text-white px-4 py-2 rounded border-2 border-transparent hover:border-blue-700 font-semibold hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            Resume <i className="fa-solid fa-file-arrow-down ml-2"></i>
          </button>

          <Link
            to="/connect"
            className="bg-blue-600 text-white px-4 py-2 rounded border-2 border-transparent hover:border-blue-700 font-semibold hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            Contact <i className="fa-regular fa-user ml-2"></i>
          </Link>
        </div>

        <div  className=" grid grid-cols-2 xs:grid-cols-3 md:flex lg:hidden  gap-3 my-3 w-full text-[14px] md:text-base z-10">
           <Link
            to="/home"
             className="bg-[#0f0f0f] p-3 col-span-2 tracking-wide rounded-md  justify-start border-2 border-transparent hover:border-purple-500 active:border-purple-500"
          ><div className=" relative text-left  p-12 "><div className="absolute bottom-0 right-0"> 
            <i className="fa-solid fa-house-user bottom-0 right-0 absolute text-white bg-black rounded-full p-2"></i></div><p className="text-white absolute top-0 left-0">home</p></div>
          </Link>
           <Link
            to="/about"
              className="bg-[#0f0f0f] p-3  tracking-wide rounded-md  justify-start border-2 border-transparent hover:border-purple-500 active:border-purple-500"
          ><div className=" relative text-left  p-12 "><div className="absolute bottom-0 right-0"> 
            <i className="fa-solid fa-user bottom-0 right-0 absolute text-white bg-black rounded-full p-2"></i></div><p className="text-white absolute top-0 left-0">about me</p></div>
          </Link>
           <Link
            to="/project"
           className="bg-[#0f0f0f] p-3  tracking-wide rounded-md  justify-start border-2 border-transparent hover:border-purple-500 active:border-purple-500"
          ><div className=" relative text-left p-12 "><div className="absolute bottom-0 right-0"> 
            <i className="fa-solid fa-list-check bottom-0 right-0 absolute text-white bg-black rounded-full p-2"></i></div><p className="text-white absolute top-0 left-0">projects</p></div>
          </Link>
           <Link
            to="/acheive"
              className="bg-[#0f0f0f] p-3  tracking-wide rounded-md  justify-start border-2 border-transparent hover:border-purple-500 active:border-purple-500"
          ><div className=" relative text-left p-12 "><div className="absolute bottom-0 right-0"> 
            <i className="fa-solid fa-trophy bottom-0 right-0 absolute text-white bg-black rounded-full p-2"></i></div><p className="text-white absolute top-0 left-0">Achievements</p></div>
          </Link>
          <Link
            to="/connect"
             className="bg-[#0f0f0f] p-3  tracking-wide rounded-md  justify-start border-2 border-transparent hover:border-purple-500 active:border-purple-500"
          ><div className=" relative text-left  p-12 "><div className="absolute bottom-0 right-0"> 
            <i className="fa-solid fa-address-book bottom-0 right-0 absolute text-white bg-black rounded-full p-2"></i></div><p className="text-white absolute top-0 left-0">contact</p></div>
          </Link>
          
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4 text-white text-2xl m-auto w-5/12 md:w-full md:pt-3">
          <a
            href="https://github.com/AnjaliShandilya"
            target="_blank"
            rel="contact"
            className=" hover:scale-125 transition-transform duration-200 ease-in-out"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/anjalishandilya333/"
            target="_blank"
            rel="contact"
            className="hover:scale-125 transition-transform duration-200 ease-in-out"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/anjalishandilya333/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-200 ease-in-out"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="mailto:anjalishandilya333@gmail.com"
            className="hover:scale-125 transition-transform duration-200 ease-in-out"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE (only on large screens) */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 h-full lg:w-4/12 peer opacity-30 lg:hover:opacity-60 transition duration-100 lg:z-10 z-1 overflow-hidden">
  <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>
  <img src="/photo.jpeg" className="h-full w-full object-cover" />
</div>

</div> 
</>
  );
}
