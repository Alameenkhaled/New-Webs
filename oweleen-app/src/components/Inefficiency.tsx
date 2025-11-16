import React from "react";

export const Inefficiency = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#10142A] dark:bg-[#10142A]">
      <div className="container mx-auto text-center">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest">
          This is why you're struggling
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          Faces of Inefficiency
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-400">
          Real estate companies are bleeding revenue through invisible
          inefficiencies
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-800/50 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
            <span className="material-icons-outlined text-red-500 text-3xl mb-4">
              error_outline
            </span>
            <h3 className="text-2xl font-bold text-white">
              Trapped Productivity
            </h3>
            <p className="mt-4 text-gray-400">
              55% of agent time is consumed by admin tasks—costing a typical
              50-agent brokerage{" "}
              <span className="font-bold text-primary">
                AED 6.75M annually
              </span>{" "}
              in lost productivity.
            </p>
            <ul className="mt-4 space-y-2 text-gray-500">
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span> 31,500 hours
                wasted per year
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span> Zero revenue
                generation
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span> Agent burnout and
                turnover
              </li>
            </ul>
          </div>
          <div className="bg-gray-800/50 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
            <span className="material-icons-outlined text-yellow-500 text-3xl mb-4">
              trending_down
            </span>
            <h3 className="text-2xl font-bold text-white">
              Conversion Crisis
            </h3>
            <p className="mt-4 text-gray-400">
              Industry-average{" "}
              <span className="font-bold text-primary">
                1.2% lead-to-deal conversion
              </span>{" "}
              means 98.8% of marketing spend is wasted on unqualfied leads who
              never transact.
            </p>
            <ul className="mt-4 space-y-2 text-gray-500">
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span> 80% of deals need
                5-12 follow-ups
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span> Agents
                overwhelmed by volume
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span> Revenue left on
                the table
              </li>
            </ul>
          </div>
          <div className="bg-gray-800/50 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
            <span className="material-icons-outlined text-yellow-500 text-3xl mb-4">
              lock_outline
            </span>
            <h3 className="text-2xl font-bold text-white">Illiquid Capital</h3>
            <p className="mt-4 text-gray-400">
              <span className="font-bold text-primary">
                Trillions in real estate assets
              </span>{" "}
              are locked in illiquid structures, limiting portfolio
              optimization and preventing fractional investment opportunities.
            </p>
            <ul className="mt-4 space-y-2 text-gray-500">
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span> 8-12 month
                transaction cycles
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span> High capital
                requirements
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span> Missed investment
                opportunities
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 bg-gray-800/50 dark:bg-gray-800/50 p-8 md:p-12 rounded-2xl border border-gray-700">
          <h3 className="text-3xl font-bold text-white">
            What Is This Costing YOUR Business?
          </h3>
          <p className="mt-2 text-gray-400">
            A typical 50-agent brokerage loses:
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            <div className="bg-gray-900/60 p-6 rounded-xl">
              <p className="text-3xl font-bold text-primary">AED 6.75M</p>
              <p className="text-gray-400">Lost Productivity</p>
            </div>
            <div className="bg-gray-900/60 p-6 rounded-xl">
              <p className="text-3xl font-bold text-primary">8-12 Mo</p>
              <p className="text-gray-400">Deal Cycles</p>
            </div>
            <div className="bg-gray-900/60 p-6 rounded-xl">
              <p className="text-3xl font-bold text-primary">98.8%</p>
              <p className="text-gray-400">Wasted Leads</p>
            </div>
            <div className="bg-gray-900/60 p-6 rounded-xl">
              <p className="text-3xl font-bold text-primary">?</p>
              <p className="text-gray-400">Your Lost Revenue</p>
            </div>
          </div>
          <a
            className="mt-10 inline-block bg-primary text-gray-900 px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            href="#"
          >
            See How We Fix This →
          </a>
        </div>
      </div>
    </section>
  );
};
