"use client";
import React, { useState } from "react";
import Image from "next/image";

const articles = [
  {
    category: "PropTech",
    date: "Oct 26, 2023",
    title:
      "A Love Letter to My First Investment Property, The Call That Changed Everything",
    description:
      "Discover the hidden costs plaguing the Dubai property market and how technology can create transparency and efficiency.",
    image: "/images/article-1.jpg",
    link: "https://www.linkedin.com/pulse/love-letter-my-first-investment-property-call-changed-almajali-kzxbf/?trackingId=eXCVaCnaSJaHEpTha320qQ%3D%3D",
  },
  {
    category: "Market Analysis",
    date: "Oct 15, 2023",
    title:
      "The More You Spend, The More You Lose: Why Your Marketing Budget is Driving Your Top Brokers Away",
    description:
      "An analysis of the factors making Dubai an attractive hub for global real estate investment and technological innovation.",
    image: "/images/article-2.jpg",
    link: "https://www.linkedin.com/pulse/more-you-spend-lose-why-your-marketing-budget-driving-almajali-houbf/?trackingId=P68C%2FLh9WFjE%2BeUGrBNS5w%3D%3D",
  },
  {
    category: "Blockchain",
    date: "Sep 28, 2023",
    title:
      "The Borderless Property Market: Why Dubai is Poised to Be the Global Hub for Real Estate Tokenization",
    description:
      "Exploring how AI-powered autonomous agents can handle administrative tasks, allowing your team to focus on closing deals.",
    image: "/images/article-3.jpg",
    link: "https://www.linkedin.com/pulse/borderless-property-market-why-dubai-poised-global-hub-almajali-h5p9f/?trackingId=nI9r1%2FS04NeEZPpcPXyEcg%3D%3D",
  },
];

const articleCategories = ["All", "Blockchain", "PropTech", "Market Analysis"];

export const Articles = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark"
      id="articles"
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Recent Articles <span className="text-primary">&amp; Analysis</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Stay ahead of the curve with the latest insights on PropTech,
            blockchain applications, and market-shifting trends in the real
            estate industry.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {articleCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category
                  ? "bg-primary text-gray-900"
                  : "bg-gray-200 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600/50"
              } px-4 py-2 rounded-full text-sm font-semibold`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <a
              key={index}
              className="group block bg-white dark:bg-[#10142A] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt={article.title}
                className="w-full h-48 object-cover"
                src={article.image}
                width={400}
                height={200}
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {article.date} • {article.category}
                </p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-snug">
                  {article.title}
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                  {article.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-primary font-semibold">
                  <span>Read More</span>
                  <span className="material-symbols-outlined ml-1">
                    arrow_right_alt
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
