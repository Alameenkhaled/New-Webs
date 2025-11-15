import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogPage = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark">
      <Header />
      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex-1 px-4 sm:px-10 lg:px-20 py-10">
            <div className="mx-auto max-w-6xl">
              {/* Page Heading */}
              <div className="flex flex-wrap justify-between gap-3 p-4 mb-8">
                <h1 className="text-[#111318] dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em] w-full text-center">Insights &amp; Analysis: Stay Informed, Invest Smart.</h1>
              </div>
              {/* Featured Article */}
              <div className="mb-12">
                <h2 className="text-[#111318] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Article</h2>
                <div className="p-4 @container">
                  <div className="flex flex-col items-stretch justify-start rounded-xl shadow-sm bg-white dark:bg-background-dark/50 @3xl:flex-row @3xl:items-center">
                    <div className="w-full @3xl:w-3/5 bg-center bg-no-repeat aspect-video @3xl:aspect-[1.8] bg-cover rounded-t-xl @3xl:rounded-l-xl @3xl:rounded-tr-none" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNUVsGa_gwZj2k6YRrjB6xon8VTX9h4AWww4doT-l6Ms-KVk9ukXeN3inBEh1uEHisWsliiY5ay3a9J7KbgaWWT9Gn3QugMAXoEoXju-sl_qBqzFdQGnsYXFw8UE6NpuJLcSVE30ko4dqyT3IZz-oT4UDW6kcfXyO4go2PAGJ9K4GJ7KRHblB7QvPVsvnh_zWriGiTBrmSBMrfJy-jaTnIte24wUtqJKGA5ZsSIwkhyKyVwXe2J3xsV9zuo0qNQU_ToMcs1lIuBlI")' }}></div>
                    <div className="flex w-full @3xl:w-2/5 min-w-72 grow flex-col items-stretch justify-center gap-4 p-6 @xl:p-8">
                      <p className="text-primary text-sm font-bold">BLOCKCHAIN</p>
                      <p className="text-[#111318] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">The Future of Real Estate: How Blockchain is Revolutionizing Property Investment</p>
                      <p className="text-[#616f89] dark:text-white/60 text-base font-normal leading-normal">
                        Discover the transformative impact of blockchain technology on real estate transactions and how it's creating new opportunities for savvy investors.
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <p className="text-[#616f89] dark:text-white/60 text-sm font-normal leading-normal">August 24, 2024</p>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-medium leading-normal">
                          <span className="truncate">Read More</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Latest Articles Section */}
              <div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 pb-3 pt-5">
                  <h2 className="text-[#111318] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Latest Articles</h2>
                  {/* Search Bar */}
                  <div className="w-full md:w-auto md:max-w-xs">
                    <label className="flex flex-col min-w-40 h-12 w-full">
                      <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                        <div className="text-[#616f89] dark:text-white/60 flex border-none bg-[#f0f2f4] dark:bg-white/10 items-center justify-center pl-4 rounded-l-lg border-r-0">
                          <span className="material-symbols-outlined">search</span>
                        </div>
                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-[#111318] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] dark:bg-white/10 focus:border-none h-full placeholder:text-[#616f89] dark:placeholder:text-white/60 px-4 text-base font-normal leading-normal" placeholder="Search for topics..." value="" />
                      </div>
                    </label>
                  </div>
                </div>
                {/* Filters */}
                <div className="flex flex-wrap gap-2 px-4 py-4 border-b border-solid border-b-[#f0f2f4] dark:border-b-white/10 mb-8">
                  <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-primary text-white text-sm font-bold leading-normal">All</button>
                  <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-sm font-medium leading-normal hover:bg-primary/20 dark:hover:bg-white/20">Market Trends</button>
                  <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-sm font-medium leading-normal hover:bg-primary/20 dark:hover:bg-white/20">Blockchain</button>
                  <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-sm font-medium leading-normal hover:bg-primary/20 dark:hover:bg-white/20">Investment Guides</button>
                  <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-sm font-medium leading-normal hover:bg-primary/20 dark:hover:bg-white/20">Company News</button>
                </div>
                {/* Article Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                  {/* Card 1 */}
                  <div className="flex flex-col rounded-xl overflow-hidden shadow-sm bg-white dark:bg-background-dark/50">
                    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbv7C3dj8JQkJP55CQD3Mhr4hPc_dypXatdlUb3bsg85lXf55N-ij0KJephDZLHQ3aqXKHx-Ehk5e7h-K0GmnIHBI-LZb8_zCZoXenbTeq49z-0_1DNAvx8TjlqOy_ZPnCnIboCAEfunrFZSZ6kXfzgTJFhrermR95eEMe1Psgyz9YjwNmg1eTj8Qmjmy1JzD1YhkPldyBMa5_CyWfIB0-eyfqlUPmgvnzyEDPXJeomkRVu0n-Q4_slMrfJEUFK462K81Upi_sb1s")' }}></div>
                    <div className="flex flex-col gap-3 p-6 flex-grow">
                      <p className="text-primary text-xs font-bold">MARKET TRENDS</p>
                      <p className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Navigating the 2024 Real Estate Market: Trends to Watch</p>
                      <p className="text-[#616f89] dark:text-white/60 text-sm font-normal leading-normal flex-grow">An in-depth analysis of key trends shaping property investments this year.</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-[#616f89] dark:text-white/60 text-xs font-normal">August 15, 2024</p>
                        <a className="text-primary text-sm font-bold hover:underline" href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="flex flex-col rounded-xl overflow-hidden shadow-sm bg-white dark:bg-background-dark/50">
                    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCifW8Hc9m1sCBqfE0vSf0vowORjzIi4MrFjitjHKFl1fViJciruYkIMxaJEE7R2Q-znd-69ykML-vmbwqyeLCcSjZ2QgR9Nx2A1eaYWWxacExGUn-RrUXSHFMfIsskOPF8s1e4TMhMbPrjN5QCR-8jGTk8Dg3JqQFpplI0IlZ4b4d95vxUPixsJ4z8C2pPjLOD-dpSs_jx3l8eoFeKzEIUmhR8-EdmGwEk1UDjvFyEt3OWIVgQpL0mmx4NzFGJoL_crKq97HfjAJs")' }}></div>
                    <div className="flex flex-col gap-3 p-6 flex-grow">
                      <p className="text-primary text-xs font-bold">INVESTMENT GUIDES</p>
                      <p className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">A Beginner's Guide to Tokenized Real Estate</p>
                      <p className="text-[#616f89] dark:text-white/60 text-sm font-normal leading-normal flex-grow">Understand the basics of fractional ownership and how to start investing with Oweleen.</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-[#616f89] dark:text-white/60 text-xs font-normal">July 30, 2024</p>
                        <a className="text-primary text-sm font-bold hover:underline" href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className="flex flex-col rounded-xl overflow-hidden shadow-sm bg-white dark:bg-background-dark/50">
                    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBXrt3Ap9EfmJZpSA04bFHU-QpcLe8CZF887cH7k8jSTwEhqAthuGphFgG3kSbm7hDgF2arVz0xVRuyHhq9lz9pbVgwyf19jp9ytO_my4E7fFjcrT-619l10CQiuv97Vr1ozFGuXb4otWfykxu9AHkTWl5Fye5MkQtWTMMKZntjjD73TKSEV3BOvEqQ-2nOFQnBkTJeyL0clGuRSxknRVhzj8W6oI3RKyQUlRxTXklH7g_fFNZfUx6K06wAFTKI1zpLrXBokzVWIh8")' }}></div>
                    <div className="flex flex-col gap-3 p-6 flex-grow">
                      <p className="text-primary text-xs font-bold">COMPANY NEWS</p>
                      <p className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Oweleen Announces Strategic Partnership to Expand into European Markets</p>
                      <p className="text-[#616f89] dark:text-white/60 text-sm font-normal leading-normal flex-grow">Exciting developments as we grow our platform and offer new investment opportunities.</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-[#616f89] dark:text-white/60 text-xs font-normal">July 21, 2024</p>
                        <a className="text-primary text-sm font-bold hover:underline" href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Load More Button */}
                <div className="text-center mt-12">
                  <button className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 mx-auto bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/20 dark:hover:bg-white/20">
                    <span className="truncate">Load More</span>
                  </button>
                </div>
              </div>
            </div>
          </main>
          {/* Subscription CTA */}
          <section className="bg-white dark:bg-background-dark/50 py-16">
            <div className="mx-auto max-w-4xl px-4 text-center">
              <h2 className="text-[#111318] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">Get the latest insights delivered to your inbox.</h2>
              <p className="text-[#616f89] dark:text-white/60 mt-4 max-w-2xl mx-auto">Subscribe to our newsletter for exclusive analysis, investment tips, and company updates.</p>
              <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111318] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border-solid border border-[#f0f2f4] dark:border-white/20 bg-transparent h-12 placeholder:text-[#616f89] px-4 text-base font-normal leading-normal" placeholder="Enter your email address" type="email" />
                <button className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Subscribe</span>
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
