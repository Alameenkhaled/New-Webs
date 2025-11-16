import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-background.jpg')",
          opacity: 0.1,
        }}
      ></div>
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center bg-gray-800/50 text-xs px-3 py-1 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
            ARCHITECT OF DUBAI'S AED 90B PROPTECH INITIATIVE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Turn Real Estate Complexity Into{" "}
            <span className="text-primary">Competitive Advantage</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
            I help real estate leaders, developers, and brokerages deploy AI and
            blockchain to increase asset values by 20-40%, reduce operational
            costs by 30-50%, and dominate their markets.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              className="bg-primary text-gray-900 px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              href="#"
            >
              Book Free Strategy Session
            </a>
            <a
              className="bg-gray-700/50 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600/50 transition-colors"
              href="#"
            >
              See Solutions
            </a>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-white">167%</p>
              <p className="text-sm text-gray-400">Revenue Growth</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">$545M</p>
              <p className="text-sm text-gray-400">Asset Monetized</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">420%</p>
              <p className="text-sm text-gray-400">ROI Achieved</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            alt="Portrait of the real estate technology expert"
            className="rounded-2xl shadow-2xl w-full max-w-md"
            src="/images/portrait.png"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};
