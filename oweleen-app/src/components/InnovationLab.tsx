"use client";
import React, { useState } from "react";
import Image from "next/image";

const innovations = [
  {
    year: "2020",
    date: "Q1 2020",
    category: "Market Research",
    title: '"Tokens and Towers" Publication',
    description:
      "Published foundational book on real estate tokenization, establishing a blueprint for the industry's digital transformation.",
    image: "/images/tt-book.png",
    featured: false,
  },
  {
    year: "2021",
    date: "Q3 2021",
    category: "PropTech Integrations",
    title: "Launch of Dubai PropTech Initiative",
    description:
      "Spearheaded the AED 90B initiative to digitize Dubai's real estate sector, focusing on blockchain and AI integration.",
    image: "/images/dubai-proptech.jpg",
    link: "View Case Study",
    featured: true,
  },
  {
    year: "2022",
    date: "Q2 2022",
    category: "Blockchain Solutions",
    title: "Atlanta Smart Token Project",
    description:
      "Led the first successful tokenization of a major commercial property in Atlanta, creating new fractional ownership opportunities.",
    featured: false,
  },
  {
    year: "2023",
    date: "Q4 2023",
    category: "PropTech Integrations",
    title: "AI Brokerage Platform Goes Live",
    description:
      "Launched a proprietary AI platform that automates 80% of brokerage admin tasks, tripling agent productivity for pilot partners.",
    featured: false,
  },
  {
    year: "2024",
    date: "Q1 2024",
    category: "Market Research",
    title: 'Research on "$952B Opportunity"',
    description:
      "Published a key research paper identifying over $952 billion in untapped value within global real estate markets, unlockable via digital assets.",
    image: "/images/952b-book.png",
    featured: false,
  },
];

const categories = [
  "All Innovations",
  "Blockchain Solutions",
  "PropTech Integrations",
  "Market Research",
];

export const InnovationLab = () => {
  const [activeCategory, setActiveCategory] = useState("All Innovations");

  const filteredInnovations =
    activeCategory === "All Innovations"
      ? innovations
      : innovations.filter((i) => i.category === activeCategory);
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#10142A] dark:bg-[#10142A]"
      id="innovation-lab"
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Innovation <span className="text-primary">Lab</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-400">
            A timeline of key milestones, project developments, and research
            breakthroughs shaping the future of real estate technology and
            blockchain.
          </p>
        </div>
        <div className="mt-12 mb-16 flex flex-wrap justify-center gap-2 md:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category
                  ? "bg-primary text-gray-900"
                  : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white"
              } px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-700 -translate-x-1/2"></div>
          <div className="space-y-12">
            {filteredInnovations.map((item, index) => (
              <React.Fragment key={index}>
                <div className="relative flex justify-center">
                  <div className="bg-primary text-gray-900 font-bold px-4 py-1 rounded-full z-10">
                    {item.year}
                  </div>
                </div>
                <div className="relative">
                  <div
                    className={`md:flex items-center ${
                      index % 2 === 0
                        ? "md:justify-end md:mr-[calc(50%+2rem)]"
                        : "md:ml-[calc(50%+2rem)]"
                    }`}
                  >
                    <div
                      className={`md:w-1/2 ${
                        index % 2 === 0 ? "md:pr-8 text-left md:text-right" : "md:pl-8"
                      }`}
                    >
                      <div
                        className={`inline-block bg-gray-700/50 text-xs px-3 py-1 rounded-full mb-2`}
                      >
                        {item.category}
                      </div>
                      <p className="text-gray-400">{item.date}</p>
                      <h3 className="text-2xl font-bold text-white mt-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 mt-2">{item.description}</p>
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={400}
                          height={200}
                          className="mt-4 rounded-lg w-full h-40 object-cover"
                        />
                      )}
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gray-700 border-2 border-primary z-10"></div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
