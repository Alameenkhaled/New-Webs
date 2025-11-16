'use client';
import React, { useState } from 'react';

const NewsletterModal = ({ showModal, setShowModal }: { showModal: boolean; setShowModal: (show: boolean) => void }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="relative flex w-full max-w-lg flex-col overflow-hidden rounded-xl bg-background-light dark:bg-background-dark shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
        <div className="absolute top-0 right-0 p-3 z-10">
          <button onClick={() => setShowModal(false)} className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>
        <div className="flex flex-col items-center p-8 sm:p-12">
          <h1 className="font-display text-[#212529] dark:text-white tracking-light text-[32px] font-bold leading-tight text-center pb-3 pt-6">Stay Ahead. Join the Oweleen Community.</h1>
          <p className="font-display text-gray-800 dark:text-gray-300 text-base font-normal leading-normal pb-8 pt-1 text-center max-w-md">
            Get exclusive market insights, new investment opportunities, and platform updates delivered straight to your inbox.
          </p>
          <div className="flex w-full max-w-sm flex-col items-stretch gap-4">
            <div className="flex w-full flex-col">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="font-display text-[#212529] dark:text-gray-200 text-base font-medium leading-normal pb-2">Email Address</p>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg font-display text-[#212529] dark:text-white dark:bg-background-dark/50 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white focus:border-primary h-14 placeholder:text-[#6C757D] p-[15px] text-base font-normal leading-normal transition-all" placeholder="Enter your email" value="" />
              </label>
            </div>
            <div className="flex w-full">
              <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-5 flex-1 bg-primary text-black text-base font-bold leading-normal tracking-[0.015em] transition-all hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5">
                <span className="truncate">Subscribe</span>
              </button>
            </div>
          </div>
          <p className="font-display text-[#6C757D] dark:text-gray-500 text-sm font-normal leading-normal pt-4 px-4 text-center">
            We respect your privacy. Read our <a className="underline hover:text-primary" href="/legal">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;
