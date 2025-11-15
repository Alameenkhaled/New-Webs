'use client';
import React, { useState } from 'react';
import NewsletterModal from './NewsletterModal';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer className="w-full border-t border-gray-200/80 bg-white">
        <div className="container mx-auto px-4 pt-16 pb-12 text-center md:px-6 md:pt-24 md:pb-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-light md:text-5xl">Creating a Community for Investors.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-normal leading-normal text-muted-light">Join a vibrant ecosystem of innovators and investors, all dedicated to pushing the boundaries of what's possible. Oweleen is more than a platform; it's a community where ideas flourish and opportunities are born.</p>
          </div>
          <button onClick={() => setShowModal(true)} className="mt-8 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 mx-auto bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90">
            <span className="truncate">ENTER THE MARKETPLACE</span>
          </button>
        </div>
        <div className="container mx-auto border-t border-gray-200/80 px-4 py-6 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-light">© 2024 Oweleen. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <a className="text-sm text-muted-light hover:text-primary" href="/legal">Legal &amp; Terms</a>
              <span className="text-sm text-muted-light">Made by <a className="font-medium text-text-light hover:text-primary" href="#">Oweleen Team</a></span>
            </div>
          </div>
        </div>
      </footer>
      <NewsletterModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Footer;
