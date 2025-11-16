import React from "react";
import Image from "next/image";

const awards = [
  {
    title: "Highest Number of Transactions – DLD (2017)",
    description: "Recognized for exceptional sales performance in a competitive market.",
    image: "/images/dld-2017.png",
  },
  {
    title: "Real Estate Excellence Award – DLD (2018)",
    description: "Honored for industry leadership and client service excellence.",
    image: "/images/dld-2018.png",
  },
];

export const Awards = () => {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-background-dark/80"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Awards & <span className="text-primary">Recognitions</span>
          </h2>
        </div>
        <div className="mt-12 space-y-4">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-white">{award.title}</h3>
                  <p className="text-gray-400 mt-1">{award.description}</p>
                </div>
                <span className="material-icons-outlined text-primary">
                  arrow_forward_ios
                </span>
              </div>
              {award.image && (
                <Image
                  alt={award.title}
                  className="mt-4 rounded-lg w-full h-auto"
                  src={award.image}
                  width={800}
                  height={400}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
