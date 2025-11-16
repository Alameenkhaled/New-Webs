import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const FAQPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <Header />
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex flex-1 justify-center py-10 md:py-20 px-4">
            <div className="layout-content-container flex flex-col w-full max-w-4xl flex-1 gap-8 md:gap-12">
              <section className="flex flex-col gap-3 text-center">
                <h1 className="text-gray-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Frequently Asked Questions</h1>
                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg font-normal leading-normal max-w-2xl mx-auto">
                  Have a question? We're here to help. Find answers to common queries about our services, technology, and your account below.
                </p>
              </section>
              <section className="px-4 py-3">
                <label className="flex flex-col min-w-40 h-14 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
                    <div className="text-gray-500 dark:text-gray-400 flex bg-white dark:bg-background-dark items-center justify-center pl-4 rounded-l-xl border-y border-l border-gray-200 dark:border-gray-800">
                      <span className="material-symbols-outlined">search</span>
                    </div>
                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-background-dark h-full placeholder:text-gray-500 dark:placeholder:text-gray-500 px-4 text-base font-normal leading-normal border-y border-r border-gray-200 dark:border-gray-800" placeholder="Search for answers..." value="" />
                  </div>
                </label>
              </section>
              <section className="flex justify-center gap-3 p-3 overflow-x-auto">
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 dark:bg-primary/30 px-5 text-primary dark:text-white">
                  <p className="text-sm font-medium leading-normal">General</p>
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-5">
                  <p className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal">Investment</p>
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-5">
                  <p className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal">Technology</p>
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-5">
                  <p className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal">Account & Security</p>
                </button>
              </section>
              <section className="flex flex-col p-4">
                <details className="flex flex-col border-b border-b-gray-200 dark:border-b-gray-800 py-3 group">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                    <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">What is Oweleen?</p>
                    <div className="text-gray-700 dark:text-gray-400 group-open:rotate-180 transition-transform duration-300">
                      <span className="material-symbols-outlined">expand_more</span>
                    </div>
                  </summary>
                  <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-open:max-h-screen">
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed pt-2 pb-2">
                      Oweleen is a cutting-edge platform designed to simplify and democratize investment opportunities. We leverage technology to provide accessible, transparent, and efficient financial services to a broad range of users.
                    </p>
                  </div>
                </details>
                <details className="flex flex-col border-b border-b-gray-200 dark:border-b-gray-800 py-3 group" open>
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                    <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">How do I create an account?</p>
                    <div className="text-gray-700 dark:text-gray-400 group-open:rotate-180 transition-transform duration-300">
                      <span className="material-symbols-outlined">expand_more</span>
                    </div>
                  </summary>
                  <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-screen group-open:max-h-screen">
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed pt-2 pb-2">
                      To create an account, click the 'Sign Up' button in the top-right corner of the page. You will be prompted to enter your email address and create a password. Follow the on-screen instructions to complete your profile setup.
                    </p>
                  </div>
                </details>
                <details className="flex flex-col border-b border-b-gray-200 dark:border-b-gray-800 py-3 group">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                    <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">What investment options are available?</p>
                    <div className="text-gray-700 dark:text-gray-400 group-open:rotate-180 transition-transform duration-300">
                      <span className="material-symbols-outlined">expand_more</span>
                    </div>
                  </summary>
                  <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-open:max-h-screen">
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed pt-2 pb-2">
                      We offer a diverse range of investment options, including stocks, bonds, ETFs, and alternative investments. Our platform provides detailed information on each option to help you make informed decisions that align with your financial goals.
                    </p>
                  </div>
                </details>
                <details className="flex flex-col border-b border-b-gray-200 dark:border-b-gray-800 py-3 group">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                    <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">Is my data secure?</p>
                    <div className="text-gray-700 dark:text-gray-400 group-open:rotate-180 transition-transform duration-300">
                      <span className="material-symbols-outlined">expand_more</span>
                    </div>
                  </summary>
                  <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-open:max-h-screen">
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed pt-2 pb-2">
                      Absolutely. We prioritize the security of your data with industry-standard encryption, multi-factor authentication, and regular security audits. Your personal and financial information is protected at all times.
                    </p>
                  </div>
                </details>
                <details className="flex flex-col border-b-0 border-b-gray-200 dark:border-b-gray-800 py-3 group">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                    <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">How can I contact support?</p>
                    <div className="text-gray-700 dark:text-gray-400 group-open:rotate-180 transition-transform duration-300">
                      <span className="material-symbols-outlined">expand_more</span>
                    </div>
                  </summary>
                  <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-open:max-h-screen">
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed pt-2 pb-2">
                      Our support team is available 24/7. You can reach us through the "Contact Us" page, via email at support@oweleen.com, or by using the live chat feature on our website.
                    </p>
                  </div>
                </details>
              </section>
              <section className="flex flex-col items-center justify-center gap-4 rounded-xl bg-gray-100 dark:bg-gray-900/50 p-8 mt-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Still have questions?</h3>
                <p className="text-gray-600 dark:text-gray-400">Can't find the answer you're looking for? Our team is here to help.</p>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 mt-2">
                  <span className="truncate">Contact Us</span>
                </button>
              </section>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
