import React from 'react';

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#2D3748] px-4 md:px-10 py-3">
      <div className="flex items-center gap-4">
        <div className="size-6 text-[#00F0FF]">
          {/* SVG Logo Placeholder */}
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Oweleen</h2>
      </div>
      <div className="hidden md:flex flex-1 justify-end items-center gap-8">
        <div className="flex items-center gap-9">
          <a className="text-white text-sm font-medium leading-normal hover:text-[#00F0FF] transition-colors" href="/dashboard">Dashboard</a>
          <a className="text-white text-sm font-medium leading-normal hover:text-[#00F0FF] transition-colors" href="#">Portfolio</a>
          <a className="text-white text-sm font-medium leading-normal hover:text-[#00F0FF] transition-colors" href="#">Community</a>
        </div>
        <div className="flex gap-2">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#2D3748] text-white hover:bg-[#00F0FF]/20 transition-colors gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <span className="material-symbols-outlined text-white text-xl">notifications</span>
          </button>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#2D3748] text-white hover:bg-[#00F0FF]/20 transition-colors gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <span className="material-symbols-outlined text-white text-xl">settings</span>
          </button>
        </div>
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-[#00F0FF]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSRAY8k7PljcxlWqjAZ2JeoGi9ESTJtZ7VqUlfuDJMxXtkIz3RMCozAtLkbArTKPpjRPFRjYwziTWPl08ygIMvaYRnLcZlYYs3OOb7BevIp7Lf2-kUo9wVhtNXos6nyntdcWeur9tsE1aDsZiejdPql3YRljDtdD8XCUTkuqHRXkx6tXSNm7LKM5Udzi6HCWVm8gAyKK9hGGTXzyxIwg1fGKlhpHefF5VaOegs_LG1zgus7Uo-6zCck1QvQSixcdIJ2M40NXXJP5s")' }}></div>
      </div>
    </header>
  );
};

export default DashboardHeader;
