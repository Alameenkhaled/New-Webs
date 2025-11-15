import React from 'react';

const LandingPage7 = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 dark:border-gray-800/80 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between whitespace-nowrap px-4 py-3 md:px-6">
          <div className="flex items-center gap-4">
            <div className="text-primary size-7">
              {/* SVG Logo Placeholder */}
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Oweleen</h2>
          </div>
          <div className="hidden flex-1 justify-end gap-8 md:flex">
            <div className="flex items-center gap-9">
              <a className="text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary" href="#">Dashboard</a>
              <a className="text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary" href="#">Analytics</a>
              <a className="text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary" href="#">Settings</a>
              <a className="text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary" href="#">Help</a>
            </div>
            <div className="flex gap-2">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90">
                <span className="truncate">Log In</span>
              </button>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-800 text-text-light dark:text-text-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-gray-700">
                <span className="truncate">Sign Up</span>
              </button>
            </div>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMKJfXJHMFp66GkY7digBKaiVGVQmpQrfNFCfjXhUkBRp0ZUQ0ij4zcOovO0ueeANyAoZ6nD0AQeB7GQF_eUPE79ULZKVbp-V2wAHST5akYmy043UuFnbzW_Jzp6Jp3Ex_DhAM6qFJAwuaxMdOonkcrAJBwOt7UZ2Fd26Uru17KslAc-ztMtnfvVRDD3F6dPdlS6Jl-ghP5iC5w2NZBSuM2yLwJnrb_ZWo2benu_0NVi3mp9yQAtBHyfVmSneauI7orJ7iTAx679Q")' }}></div>
          </div>
          <button className="md:hidden rounded-lg p-2 hover:bg-gray-200 dark:hover:bg-gray-800">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>
      <main className="flex-grow">
        <section className="bg-background-light dark:bg-background-dark py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">Ascending Clarity</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-light dark:text-muted-dark">From a bright, clean interface to a darker, data-rich environment.</p>
          </div>
        </section>
        <section className="bg-background-dark py-16 text-text-dark md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">Proven Synergy. Tangible Results.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-dark">Our pilot tests demonstrate significant improvements across key metrics, validating the power of our integrated solutions.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 text-center">
                <h3 className="text-5xl font-black text-primary">+85%</h3>
                <p className="mt-2 text-base font-medium text-text-dark">Zignaly Wallet User Adoption</p>
              </div>
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 text-center">
                <h3 className="text-5xl font-black text-primary">+60%</h3>
                <p className="mt-2 text-base font-medium text-text-dark">O-Holiday Booking Increase</p>
              </div>
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 text-center">
                <h3 className="text-5xl font-black text-primary">+40%</h3>
                <p className="mt-2 text-base font-medium text-text-dark">RentalTech Efficiency Improvement</p>
              </div>
            </div>
            <div className="relative mt-12 overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-4 sm:p-6 md:mt-16">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <h4 className="text-lg font-bold">Performance Metrics Over Time</h4>
                <div className="flex items-center gap-2 rounded-lg bg-background-dark p-1 text-sm">
                  <button className="rounded-md px-3 py-1 font-medium text-text-dark bg-primary">Quarterly</button>
                  <button className="rounded-md px-3 py-1 font-medium text-muted-dark hover:bg-gray-800">Annually</button>
                </div>
              </div>
              <div className="relative mt-6 h-80">
                {/* SVG Chart Placeholder */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-gray-200/80 bg-white">
        <div className="container mx-auto px-4 pt-16 pb-12 text-center md:px-6 md:pt-24 md:pb-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-light md:text-5xl">Creating a Community for Investors.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-normal leading-normal text-muted-light">Join a vibrant ecosystem of innovators and investors, all dedicated to pushing the boundaries of what's possible. Oweleen is more than a platform; it's a community where ideas flourish and opportunities are born.</p>
          </div>
          <button className="mt-8 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 mx-auto bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90">
            <span className="truncate">ENTER THE MARKETPLACE</span>
          </button>
        </div>
        <div className="container mx-auto border-t border-gray-200/80 px-4 py-6 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-light">© 2024 Oweleen. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <a className="text-sm text-muted-light hover:text-primary" href="#">Legal &amp; Terms</a>
              <span className="text-sm text-muted-light">Made by <a className="font-medium text-text-light hover:text-primary" href="#">Oweleen Team</a></span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage7;
