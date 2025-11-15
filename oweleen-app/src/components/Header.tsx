import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 px-4 md:px-10 lg:px-20 xl:px-40 py-3 bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex items-center gap-4 text-gray-900 dark:text-white">
        <div className="size-6 text-primary">
          {/* SVG Logo Placeholder */}
        </div>
        <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Oweleen</h2>
      </div>
      <nav className="hidden md:flex flex-1 justify-end items-center gap-8">
        <div className="flex items-center gap-9">
          <a className="text-gray-900 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="/">Home</a>
          <a className="text-gray-900 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="/about">About Us</a>
          <a className="text-gray-900 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#">Services</a>
          <a className="text-primary dark:text-primary text-sm font-bold leading-normal" href="/faq">FAQ</a>
          <a className="text-gray-900 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="/contact">Contact</a>
        </div>
        <div className="flex gap-2">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Login</span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90">
            <span className="truncate">Sign Up</span>
          </button>
        </div>
      </nav>
      <button className="md:hidden text-gray-900 dark:text-white">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
};

export default Header;
