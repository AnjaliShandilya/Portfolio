import { useState } from "react";
import Footer from "./foter";
import Section from "./othersection";
import Nav from "./sticky";

export default function Project() {
  const projectData = [
    { title: "Dating App", category: "UI/UX", description: "...", images: ["dating1.png", "dating2.png", "dating3.png", "dating4.png"] },
    { title: "Fitness App", category: "UI/UX", description: "...", images: ["dating1.png", "dating2.png", "dating3.png", "dating4.png"] },
    { title: "E-Commerce App", category: "UI/UX", description: "...", images: ["dating1.png", "dating2.png", "dating3.png", "dating4.png"] },
    { title: "Portfolio Website", category: "Featured", description: "...", images: ["dating1.png", "dating2.png", "dating3.png", "dating4.png"] },
    { title: "Agency Site", category: "Featured", description: "...", images: ["dating1.png", "dating2.png", "dating3.png", "dating4.png"] },
    { title: "Blog Platform", category: "Featured" , description: "...", images: ["dating1.png", "dating2.png", "dating3.png", "dating4.png"] },
    { title: "Avbhi", category: "Clients", description: "...", images: ["avbhi1.png", "avbhi2.png", "avbhi3.png", "avbhi4.png"] },
    { title: "POS System", category: "Clients", description: "...", images: ["skanda1.png", "skanda2.png", "skanda3.png", "skanda4.png"] },
    { title: "CRM Tool", category: "Clients", description: "...", images: ["dating1.png", "dating2.png", "dating3.png", "dating4.png"] },
    { title: "Weather App", category: "System", description: "...", images: ["dating1.png", "dating2.png", "dating3.png", "dating4.png"] },
    { title: "Chatbot UI", category: "System", description: "...", images: ["dating1.png", "dating2.png", "dating3.png", "dating4.png"] },
    { title: "Game Dashboard", category: "System", description: "...", images: ["dating1.png", "dating2.png", "dating3.png", "dating4.png"] },
  ];

  const [activeTab, setActiveTab] = useState("Featured");

  const filteredProjects = projectData.filter(
    (project) => project.category === activeTab
  );

  return (<>
  <div className="hidden md:flex md:pt-10 lg:pt-0"><Section/></div>
    <section className="bg-black text-white  py-12 lg:p-20  px-9 md:px-10" id="portfolio">
      <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>

      {/* Tab Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {["Featured", "UI/UX", "Clients", "System"].map((tab) => (
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
              <p className="text-gray-400 mb-4">{project.description}</p>
              <button className="text-sm text-blue-400 hover:underline">
                → Read more
              </button>
            </div>

            {/* Left/Right - Images */}
  <div className="lg:w-1/2 relative">
  {/* Decorative Bottom Layer (the shadow frame) */}
  <div className="absolute top-4 right-4 w-full h-full border-cyan-500 rounded-lg z-0 border-4" />

  {/* Main Card Layer */}
  <div className="relative z-10 p-4  rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
    <div className="grid grid-cols-2 overflow-x-auto gap-1">
      {project.images.map((img, i) => (
        <img
          key={i}
          src={`/images/${img}`}
          alt={`${project.title} screenshot ${i + 1}`}
          className=" rounded-lg object-contain"
        />
      ))}
    </div>
  </div>
</div>

          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-20">
        <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full">
          View All
        </button>
      </div>
    </section>
    <div className="md:flex hidden">
        <Footer/></div>
        <Nav/>
  </>
  );
}
