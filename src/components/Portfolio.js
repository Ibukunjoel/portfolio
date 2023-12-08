import React from "react";
import PortfolioCard from "./Portfolio-card";
import sabi from "../assets/images/ibukun.jpg"

const Portfolio = () => {
  const portfolios = [
    { 
      name:"SABI NETWORKS",
      details: "This is an ISP online platform, created to solve realtime connection issues. It provides interface for new prospects to find relevant details requuired before subscribing.",
      stacks: ["React", "Tailwind CSS"],
      githublink: "",
      sitelink: "",
      siteImage: sabi,
    },
    { 
      name:"SABI NETWORKS",
      details: "This is an ISP online platform, created to solve realtime connection issues. It provides interface for new prospects to find relevant details requuired before subscribing.",
      stacks: ["React", "Tailwind CSS"],
      githublink: "",
      sitelink: "",
      siteImage: sabi,
    },
    { 
      name:"SABI NETWORKS",
      details: "This is an ISP online platform, created to solve realtime connection issues. It provides interface for new prospects to find relevant details requuired before subscribing.",
      stacks: ["React", "Tailwind CSS"],
      githublink: "",
      sitelink: "",
      siteImage: sabi,
    },
    { 
      name:"SABI NETWORKS",
      details: "This is an ISP online platform, created to solve realtime connection issues. It provides interface for new prospects to find relevant details requuired before subscribing.",
      stacks: ["React", "Tailwind CSS"],
      githublink: "",
      sitelink: "",
      siteImage: sabi,
    }
  ]
  return (
    <div id="projects" className="flex justify-center items-center flex-col bg-[#f5f5f5] py-24">
      <div className="lg:w-[1020px] text-center lg:text-left px-2 lg:px-0">
      <h5 className="text-blue-600 text-xl lg:text-2xl font-bold mb-3">PORTFOLIO</h5>
      <h3 className="text-gray-700 text-xl lg:text-2xl font-bold">Every project is a one-of-a-kind development.</h3>
      </div>
      
      <PortfolioCard className="flex justify-center items-center flex-col" portfolios={portfolios}/>
    </div>
  );
};

export default Portfolio;
