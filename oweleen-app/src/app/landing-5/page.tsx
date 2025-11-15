import React from 'react';

const LandingPage5 = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster="https://images.unsplash.com/photo-1542252187-251f4ac34e54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfGFsbHx8fHx8fHx8fDE3MTk1ODk2ODN8&ixlib=rb-4.0.3&q=80&w=1080"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-dubai-buildings-4491-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>
      <div className="relative z-20 flex flex-col h-full">
        <header className="w-full absolute top-0 left-0 px-4 sm:px-10 lg:px-20 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4 text-white">
              <div className="size-6">
                {/* SVG Logo Placeholder */}
              </div>
              <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Oweleen</h2>
            </div>
            <nav className="hidden lg:flex items-center gap-9">
              <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">THE VISION</a>
              <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">PORTFOLIOS</a>
              <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">ECOSYSTEM</a>
              <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">THE FUTURE</a>
              <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">ABOUT US</a>
              <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">CONTACT US</a>
              <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">FAQ</a>
            </nav>
            <div className="flex items-center gap-2">
              <button className="hidden sm:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white/10 hover:bg-white/20 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors backdrop-blur-sm">
                <span className="truncate">Login/Sign Up</span>
              </button>
              <button className="lg:hidden flex items-center justify-center h-10 w-10 text-white">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <div className="flex flex-col gap-6 max-w-4xl">
            <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              Fractional Ownership. A Digital Twist.
            </h1>
            <h2 className="text-white/80 text-base sm:text-lg md:text-xl font-normal leading-normal max-w-2xl mx-auto">
              Real Estate for Everyone, One Digital Dirham at a Time.
            </h2>
            <div className="mt-4">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-primary/90 text-white text-base font-bold leading-normal tracking-[0.015em] mx-auto transition-transform hover:scale-105">
                <span className="truncate">ENTER THE MARKETPLACE</span>
              </button>
            </div>
          </div>
        </main>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 animate-bounce-slow">
          <span className="material-symbols-outlined">south</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage5;
