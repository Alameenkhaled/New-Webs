import React from 'react';
import DashboardHeader from '@/components/DashboardHeader';

const DashboardPage = () => {
  return (
    <div className="font-display bg-[#0A0E1A] text-[#E2E8F0]">
      <DashboardHeader />
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-full max-w-[1280px] flex-1">
              <main className="flex-1 mt-8">
                {/* PageHeading */}
                <div className="flex flex-wrap justify-between items-center gap-4 p-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Welcome, Prospective User</p>
                    <p className="text-[#E2E8F0]/70 text-base font-normal leading-normal">This is a conceptual view of your future dashboard. Sign up for the full experience.</p>
                  </div>
                  {/* ButtonGroup */}
                  <div className="flex flex-wrap gap-3">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#00F0FF] text-[#0A0E1A] text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
                      <span className="truncate">Invest Now</span>
                    </button>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2D3748] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#00F0FF]/20 transition-colors">
                      <span className="truncate">View Transactions</span>
                    </button>
                  </div>
                </div>
                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 mt-4">
                  {/* Main Column (Portfolio) */}
                  <div className="lg:col-span-2 flex flex-col gap-6">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2 rounded-xl p-6 bg-[#2D3748]/50 border border-[#2D3748]">
                        <p className="text-[#E2E8F0]/70 text-base font-medium leading-normal">Total Portfolio Value</p>
                        <p className="text-white tracking-tight text-4xl font-bold leading-tight text-glow">$125,430.80</p>
                      </div>
                      <div className="flex flex-col gap-2 rounded-xl p-6 bg-[#2D3748]/50 border border-[#2D3748]">
                        <p className="text-[#E2E8F0]/70 text-base font-medium leading-normal">24h Change</p>
                        <p className="text-[#00F0FF] tracking-tight text-4xl font-bold leading-tight text-glow">+$1,203.45</p>
                        <p className="text-[#00F0FF] text-base font-medium leading-normal">+1.8%</p>
                      </div>
                    </div>
                    {/* Portfolio Performance Chart */}
                    <div className="flex flex-col gap-4 p-6 rounded-xl bg-[#2D3748]/50 border border-[#2D3748]">
                      <div className="flex justify-between items-center">
                        <p className="text-white text-lg font-medium leading-normal">Portfolio Performance</p>
                        <div className="flex gap-1 text-sm bg-[#0A0E1A] p-1 rounded-md border border-[#2D3748]">
                          <button className="px-2 py-1 rounded">1D</button>
                          <button className="px-2 py-1 rounded bg-[#00F0FF]/20 text-[#00F0FF]">1W</button>
                          <button className="px-2 py-1 rounded">1M</button>
                          <button className="px-2 py-1 rounded">1Y</button>
                        </div>
                      </div>
                      <div className="flex min-h-[250px] flex-1 flex-col">
                        <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 472 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z" fill="url(#paint0_linear_area_chart)"></path>
                          <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#00F0FF" strokeLinecap="round" strokeWidth="3"></path>
                          <defs>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_area_chart" x1="236" x2="236" y1="1" y2="149">
                              <stop stopColor="#00F0FF" stopOpacity="0.3"></stop>
                              <stop offset="1" stopColor="#00F0FF" stopOpacity="0"></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    {/* My Assets Table */}
                    <div className="flex flex-col gap-4 p-6 rounded-xl bg-[#2D3748]/50 border border-[#2D3748]">
                      <h3 className="text-white text-lg font-medium leading-normal">My Assets</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left">
                          <thead>
                            <tr className="text-[#E2E8F0]/70 text-sm border-b border-[#2D3748]">
                              <th className="py-3 px-2 font-medium">Asset</th>
                              <th className="py-3 px-2 font-medium text-right">Price</th>
                              <th className="py-3 px-2 font-medium text-right">24h Change</th>
                              <th className="py-3 px-2 font-medium text-right hidden sm:table-cell">24h Volume</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-[#2D3748] hover:bg-[#00F0FF]/10">
                              <td className="py-4 px-2 flex items-center gap-3">
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdV9j3rosxZy2qxHFKPSrMChw5LAeU3CxT7EhEc5H0rSDW3mJ9eVsfHggjgSZSB0QKveeXl38Du4JJsiNDVdJPzGCArro00EWB8vRhquNfm-l2AmqGHAfGoU6PknsTlqlK6W5vexq1VZJGDO6eL3Q-RecR2Lp5TVjuY2QY2LkTDWYzKMX9xC5SHEgv3DN57jTS2EdDpSuWfMb8JVYhfGMlznPqiAS2_I3yq4HCZScbnXgQwXXmAUv4IX_A5iTZAyp8yskaxH2zsfs")' }}></div>
                                <div>
                                  <p className="font-bold">Bitcoin</p>
                                  <p className="text-sm text-[#E2E8F0]/70">BTC</p>
                                </div>
                              </td>
                              <td className="py-4 px-2 text-right font-medium">$68,123.45</td>
                              <td className="py-4 px-2 text-right font-medium text-[#00F0FF]">+2.1%</td>
                              <td className="py-4 px-2 text-right font-medium hidden sm:table-cell">$45.6B</td>
                            </tr>
                            <tr className="border-b border-[#2D3748] hover:bg-[#00F0FF]/10">
                              <td className="py-4 px-2 flex items-center gap-3">
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBkCXceo0hKXknFBULBW1N9sdo0TvbKJTC8EjMh1dsFIZx_f9pVNcF3Zmxe2LUvdYc7lub6vDbvdf8s0A4sz66UfdI2hWm45OV8htqWGGNSIiZz5mhXnjKt-uBvAJvJKSc3LIEkX9iiFqsGX62fTQGY_9IjJFk6JEOh-Pq7w_1MfF5C39L_UGOJk6-nYNac5ryz-f9YVI65pLh3Up1G3J6raRU_zbhzyZI7YiO_g9VYH1Ayw_A0VkQY-vPj2hhPK1_wW_JJbRNwkuA")' }}></div>
                                <div>
                                  <p className="font-bold">Ethereum</p>
                                  <p className="text-sm text-[#E2E8F0]/70">ETH</p>
                                </div>
                              </td>
                              <td className="py-4 px-2 text-right font-medium">$3,540.12</td>
                              <td className="py-4 px-2 text-right font-medium text-[#00F0FF]">+0.8%</td>
                              <td className="py-4 px-2 text-right font-medium hidden sm:table-cell">$21.2B</td>
                            </tr>
                            <tr className="hover:bg-[#00F0FF]/10">
                              <td className="py-4 px-2 flex items-center gap-3">
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 p-1 bg-white" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_GApIRGC5xaoQgngiW7vPwjkTCA-eakbGRuMDCOBVvo2mfDLHvV3ASihbug2UQctwuvvntx4ORgCCN3fJgo-VDpxvef4ZYn4OfZJ_7yQzzksYue-lgnjgQ5zG7igUfOf0PeP_wjpgf9JCnvzNrglsd4HmQ8rqatVwCxhqvhHtUtxpLGu5hnylrZpnzSXw38gDvUmQEpxAWPvNp9L_cioCo6hsDKQzWXMvvtBw3bjtFY9vWPzJ62cDLBoaA2mvZqo2taZG9GnHvhc")' }}></div>
                                <div>
                                  <p className="font-bold">Oweleen Token</p>
                                  <p className="text-sm text-[#E2E8F0]/70">OWL</p>
                                </div>
                              </td>
                              <td className="py-4 px-2 text-right font-medium">$2.78</td>
                              <td className="py-4 px-2 text-right font-medium text-red-500">-1.2%</td>
                              <td className="py-4 px-2 text-right font-medium hidden sm:table-cell">$1.5M</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* Side Column */}
                  <div className="lg:col-span-1 flex flex-col gap-6">
                    {/* Asset Allocation Chart */}
                    <div className="flex flex-col gap-4 p-6 rounded-xl bg-[#2D3748]/50 border border-[#2D3748]">
                      <h3 className="text-white text-lg font-medium leading-normal">Asset Allocation</h3>
                      <div className="flex justify-center items-center my-4 min-h-[200px] relative">
                        <svg className="w-48 h-48" viewBox="0 0 36 36">
                          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#00F0FF" strokeDasharray="60, 100" strokeWidth="3"></path>
                          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#8A2BE2" strokeDasharray="30, 100" strokeDashoffset="-60" strokeWidth="3"></path>
                          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#00CED1" strokeDasharray="10, 100" strokeDashoffset="-90" strokeWidth="3"></path>
                        </svg>
                        <div className="absolute flex flex-col items-center">
                          <span className="text-3xl font-bold">$125k</span>
                          <span className="text-sm text-[#E2E8F0]/70">Total Value</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#00F0FF]"></span>Crypto</span>
                          <span className="font-medium">60%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#8A2BE2]"></span>Stocks</span>
                          <span className="font-medium">30%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#00CED1]"></span>ETFs</span>
                          <span className="font-medium">10%</span>
                        </div>
                      </div>
                    </div>
                    {/* Community Hub */}
                    <div className="flex flex-col gap-4 p-6 rounded-xl bg-[#2D3748]/50 border border-[#2D3748]">
                      <h3 className="text-white text-lg font-medium leading-normal">Trending in the Community</h3>
                      <div className="flex flex-col gap-4">
                        <div className="p-4 rounded-lg bg-[#0A0E1A] hover:bg-[#00F0FF]/10 cursor-pointer">
                          <p className="font-bold">What's your long-term Bitcoin price prediction?</p>
                          <p className="text-sm text-[#E2E8F0]/70 mt-1">24 replies • 120 upvotes</p>
                        </div>
                        <div className="p-4 rounded-lg bg-[#0A0E1A] hover:bg-[#00F0FF]/10 cursor-pointer">
                          <p className="font-bold">Analysis of the upcoming Oweleen protocol upgrade</p>
                          <p className="text-sm text-[#E2E8F0]/70 mt-1">8 replies • 85 upvotes</p>
                        </div>
                        <div className="p-4 rounded-lg bg-[#0A0E1A] hover:bg-[#00F0FF]/10 cursor-pointer">
                          <p className="font-bold">Share your top ETF picks for 2024</p>
                          <p className="text-sm text-[#E2E8F0]/70 mt-1">42 replies • 210 upvotes</p>
                        </div>
                      </div>
                      <a className="text-center text-[#00F0FF] font-bold text-sm mt-2" href="#">View All Discussions</a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
