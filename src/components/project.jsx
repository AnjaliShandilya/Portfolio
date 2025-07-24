import { useState } from "react";
import Footer from "./foter";
import Section from "./othersection";
import Nav from "./sticky";

export default function Project() {
  const projectData = [
    {
  title: "Portal Website",
  category: "Featured",
  description: "SkillHire is a role-based job portal built with React, ShadcnUI, and TailwindCSS. It features secure Clerk authentication, Supabase integration, and real-time application tracking. Recruiters can post and manage jobs while users search, apply, and track status seamlessly.",
  images: ["portal1.png", "portal2.png", "portal3.png", "portal4.png"],
  liveLink: "https://skill-hire-as.vercel.app/"
  },
  { title: "To-Do List", category: "Featured", 
  description: "A simple yet interactive task manager built using HTML, CSS, and JavaScript Supports adding, deleting, and marking tasks as complete for daily productivity.", 
  images: ["to-do1.png", "to-do2.png", "to-do3.png"],
  liveLink: "https://anjalishandilya.github.io/To-do-List/" },
  { title: "Amazon Clone", 
    category: "UI/UX", 
    description: "A sleek frontend clone of Amazon built using HTML, CSS, and JavaScript, replicating the homepage, product listings, and responsive navigation.Includes interactive cart features, product hover effects, and a modern layout closely resembling the real Amazon interface.", 
    images: ["clone1.png", "clone2.png", "clone3.png", "clone4.png"],
    liveLink: "https://anjalishandilya.github.io/Amazone-Clone/"
  },
  { title: "LoveScore Checker", category: "UI/UX", 
    description: "A fun and engaging app built with HTML, CSS, and JavaScript to check love compatibility Users enter two names to get a playful love percentage based on a simple logic formula.", 
    images: ["score1.png", "score2.png", "score4.png", "score3.png"],
    liveLink: "https://anjalishandilya.github.io/Love-Score/" 
  },
  { title: "Game App", category: "UI/UX", 
    description: "A classic game built with HTML, CSS, and JavaScript where users play against the computer Includes real-time score tracking, interactive UI, and randomized computer choices for each round.", 
    images: ["game1.png","game3.png","game2.png","game4.png"],
    liveLink: "https://anjalishandilya.github.io/Rock-Paper-Scissor-Game/"
  },
  { title: "Weather Site", category: "UI/UX", 
    description: "A responsive HTML, CSS, and JavaScript app that displays real-time weather, temperature, humidity, wind speed, and local time using live API. Features dynamic background videos that change based on current weather conditions (rain, sun, clouds, snow) for an immersive experience.", 
    images: ["weather1.png", "weather2.png", "weather3.png"],
    liveLink: "https://anjalishandilya.github.io/Weather-App/"
  },
  { title: "Client Website(Frontend)", category: "Clients", 
    description: "Developed a professional multi-page website including Home, Services, About, and Contact sections. Built using HTML, CSS, and JavaScript with responsive, user-friendly UI.Created during my role as a Frontend Developer for a client project.", 
    images: ["avbhi1.png", "avbhi2.png", "avbhi3.png", "avbhi4.png"],
    liveLink:"https://avibsoft.vercel.app/"
  },
  { title: "Client Website(Frontend)", category: "Clients", 
    description: "Designed and built a fully responsive website with pages like Home, Services, About, and Contact.Focused on clean layout, consistent styling, and smooth navigation using HTML, CSS, and JavaScript.Completed as part of a real client project during my frontend development role.", 
    images: ["skanda1.png", "skanda2.png", "skanda3.png", "skanda4.png"],
    liveLink:"https://skanda-pi.vercel.app/"
  },
  { title: "Client(Tour-travel)", category: "Clients", 
    description: "Developed a responsive travel site with sections like Home, Services, Packages, About, and Contact. Designed to showcase travel packages with an intuitive layout and engaging UI. using HTML, CSS, and JavaScript during my role as a frontend developer.", 
    images: ["tour1.png", "tour2.png", "tour3.png", "tour4.png"],
  liveLink:"https://skysafarisln.vercel.app/"
 },
  ];

  const [activeTab, setActiveTab] = useState("Featured");

  const filteredProjects =
    activeTab === "All"
      ? projectData
      : projectData.filter((project) => project.category === activeTab);

  return (
    <>
      <div className="hidden md:flex md:pt-10 lg:pt-0"><Section /></div>
      <section className="bg-black text-white py-9 mb-10 px-9 md:px-10" id="portfolio">
         <h2 className="text-2xl  md:text-4xl lg:text-5xl font-bold text-white text-center mt-[30px] md:mb-4 animate-slideUp ">Bringing Ideas to Life Through Design & Code</h2>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-2 md:gap-4 my-12">
          {["All", "Featured", "UI/UX", "Clients"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                  : "border border-gray-500 text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="space-y-20">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-8 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Left/Right - Text */}
              <div className="lg:w-1/2">
                <h4 className="text-blue-400 uppercase mb-2">
                  Project {index + 1}
                </h4>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-2">{project.description}</p>
                     {project.liveLink && (<a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300 transition">
               🔗 Live Demo</a>
              )}

              </div>

              {/* Left/Right - Images */}
              <div className="lg:w-1/2 relative">
                {/* Decorative Bottom Layer (the shadow frame) */}
                <div className="absolute top-4 right-4 w-full h-full border-cyan-500 rounded-lg z-0 border-4" />

                {/* Main Card Layer */}
                <div className="relative z-10 p-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                  <div className="grid grid-cols-2 gap-1">
                    {project.images.map((img, i) => (
                      <img
                        key={i}
                        src={`/images/${img}`}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="rounded-xl object-cover w-full"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>
      <div className="md:flex hidden">
        <Footer />
      </div>
      <Nav />
    </>
  );
}
