import React from "react";
import PortfolioCard from "./Portfolio-card";
import midasoluem from "../assets/midasoluem.png";
import aptive from "../assets/aptive.png";
import rebrivo from "../assets/rebrivo.png";
import simplyrecipes from "../assets/simplyrecipes.png";



const Portfolio = () => {
  const portfolios = [
    { 
      name:"Midas Oleum",
      details: "A corporate website for an oil and gas company, showcasing their engineering services, consultancy, equipment supply/lease, manpower supply, and chemical sales offerings.",
      stacks: ["React", "Tailwind CSS"],
      githublink: "https://github.com/Ibukunjoel/midasoleum",
      sitelink: "https://midasoleum.netlify.app/",
      siteImage: midasoluem,
    },
    { 
      name:"Aptive",
      details: "An ISP (Internet Service Provider) online platform built to solve real-time connection issues. It gives new prospects an interface to explore plans and find the details they need before subscribing.",
      stacks: ["React", "Tailwind CSS"],
      githublink: "https://github.com/Ibukunjoel/aptive-react",
      sitelink: "https://aptive-react-app.netlify.app/",
      siteImage: aptive,
    },
    { 
      name:"Rebrivo",
      details: "A business marketplace platform that connects buyers and sellers of companies — whether it's a registered company with zero operations, a struggling business, or a successful one looking to exit.",
      stacks: ["React", "Tailwind CSS"],
      githublink: "https://github.com/Ibukunjoel/rebrivo_waitlist",
      sitelink: "https://rebrivo.netlify.app/",
      siteImage: rebrivo,
    },
    { 
      name:"Simply Recipes",
      details: "A responsive recipe-sharing website featuring categorized dishes (Beef, Breakfast, Carrots, Food) with prep and cook times, individual recipe pages, tags, and an about/contact section.",
      stacks: ["React", "Tailwind CSS"],
      githublink: "https://github.com/Ibukunjoel/Simply-recipes",
      sitelink: "https://simply-recipes-responsive-website.netlify.app/",
      siteImage: simplyrecipes,
    }
];
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
