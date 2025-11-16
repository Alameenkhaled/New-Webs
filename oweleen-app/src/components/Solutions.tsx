"use client";
import React, { useState } from "react";

const solutionsData = [
  {
    id: 1,
    title: "Asset Tokenization",
    description: "Unlock Liquidity & Global Capital",
    icon: "token",
    color: "blue",
    metrics: [
      { label: "Efficiency Gain", value: "+70%", icon: "trending_up" },
      { label: "Cost Savings", value: "~15%" },
      { label: "Market Adoption", value: "2.5x YoY" },
    ],
    features: [
      "Fractional Ownership",
      "Smart Contract Automation",
      "Global Investor Access",
    ],
  },
  {
    id: 2,
    title: "AI-Powered Brokerage",
    description: "Automate Operations & Boost Sales",
    icon: "smart_toy",
    color: "purple",
    metrics: [
      { label: "Efficiency Gain", value: "+80%", icon: "trending_up" },
      { label: "Cost Savings", value: "~30%" },
      { label: "Lead Conversion", value: "+200%" },
    ],
    features: [
      "Automated Lead Nurturing",
      "AI-driven Market Analysis",
      "Intelligent Task Management",
    ],
  },
  {
    id: 3,
    title: "Predictive Analytics",
    description: "Data-Driven Market Domination",
    icon: "data_thresholding",
    color: "green",
    metrics: [
      { label: "Efficiency Gain", value: "+60%", icon: "trending_up" },
      { label: "Cost Savings", value: "~20%" },
      { label: "Market Adoption", value: "3x YoY" },
    ],
    features: [
      "Market Trend Prediction",
      "Asset Performance Forecasting",
      "Risk Assessment",
    ],
  },
];

export const Solutions = () => {
  const [selected, setSelected] = useState([1, 2]);

  const toggleSolution = (id: number) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const selectedSolutions = solutionsData.filter((s) => selected.includes(s.id));

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background-dark"
      id="solutions"
    >
      <div className="container mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-800 text-gray-300 px-4 py-1.5 rounded-full text-sm font-medium">
            <span className="material-symbols-outlined text-primary text-base">
              hub
            </span>
            <span>INTERACTIVE SOLUTIONS PLATFORM</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Intelligent <span className="text-primary">Solutions</span>{" "}
            Ecosystem
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-400">
            An interactive dashboard showcasing our AI and Blockchain solutions.
            Select solutions to compare them side-by-side, view performance
            data, and understand how each transforms your real estate
            operations.
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {solutionsData.map((solution) => (
              <div
                key={solution.id}
                className={`group cursor-pointer bg-gray-900/60 p-6 rounded-xl border-2 ${
                  selected.includes(solution.id)
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-gray-700 hover:border-primary/50"
                } transition-all duration-300`}
                onClick={() => toggleSolution(solution.id)}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`bg-${solution.color}-900/50 p-3 rounded-lg`}
                  >
                    <span
                      className={`material-symbols-outlined text-${solution.color}-400 text-3xl`}
                    >
                      {solution.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {solution.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {solution.description}
                    </p>
                  </div>
                  <div
                    className={`ml-auto flex items-center justify-center w-6 h-6 rounded-full ${
                      selected.includes(solution.id)
                        ? "bg-primary"
                        : "bg-gray-700 group-hover:bg-primary/50"
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-base ${
                        selected.includes(solution.id)
                          ? "text-gray-900"
                          : "text-gray-400 group-hover:text-white"
                      }`}
                    >
                      {selected.includes(solution.id) ? "check" : "add"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-center">
              <button className="bg-gray-700/50 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600/50 transition-colors w-full flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">
                  compare_arrows
                </span>
                Compare Selected ({selected.length})
              </button>
            </div>
          </div>
          <div className="lg:col-span-2 bg-gray-800/50 p-1 rounded-2xl border border-gray-700">
            <div className="bg-gray-900/40 rounded-t-xl py-4 px-6 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">
                Solution Comparison
              </h3>
              <button className="flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/30 transition-colors">
                <span className="material-symbols-outlined text-base">
                  bookmark_add
                </span>{" "}
                Save Comparison
              </button>
            </div>
            <div className="overflow-x-auto">
              <div
                className={`grid grid-cols-1 ${
                  selectedSolutions.length > 1 ? "md:grid-cols-2" : ""
                } divide-x divide-gray-700 min-w-[600px]`}
              >
                {selectedSolutions.map((solution) => (
                  <div key={solution.id} className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`bg-${solution.color}-900/50 p-3 rounded-lg mt-1`}
                      >
                        <span
                          className={`material-symbols-outlined text-${solution.color}-400 text-2xl`}
                        >
                          {solution.icon}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {solution.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium mb-2">
                        Key Metrics
                      </p>
                      <div className="space-y-3">
                        {solution.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="flex justify-between items-center bg-gray-900/60 p-3 rounded-lg"
                          >
                            <span>{metric.label}</span>{" "}
                            <span className="font-bold text-primary flex items-center gap-1">
                              {metric.icon && (
                                <span className="material-symbols-outlined text-green-400 text-lg">
                                  {metric.icon}
                                </span>
                              )}
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium mb-2">
                        Core Features
                      </p>
                      <ul className="space-y-2 text-sm">
                        {solution.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2"
                          >
                            <span className="material-symbols-outlined text-primary text-base mt-0.5">
                              check_circle
                            </span>{" "}
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4">
                      <a
                        className="inline-flex items-center text-primary font-semibold text-sm hover:underline"
                        href="#"
                      >
                        View Full Dashboard{" "}
                        <span className="material-symbols-outlined text-base ml-1">
                          arrow_right_alt
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
