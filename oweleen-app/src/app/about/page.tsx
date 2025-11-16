import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const AboutUsPage = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#1A1A2E] dark:text-[#E0E0E0]">
      <Header />
      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex-1">
            {/* Hero Section */}
            <section className="px-4 py-16 sm:px-6 lg:px-8 xl:px-0">
              <div className="max-w-4xl mx-auto">
                <div className="@container">
                  <div className="flex flex-col gap-8 px-4 py-10 @[864px]:flex-row @[864px]:items-center">
                    <div className="flex flex-col gap-6 text-center @[864px]:text-left @[864px]:w-1/2">
                      <div className="flex flex-col gap-2">
                        <h1 className="text-[#111318] dark:text-white text-4xl font-bold leading-tight tracking-tighter @[480px]:text-5xl">
                          Our Vision: Real Estate, Reimagined.
                        </h1>
                        <h2 className="text-slate-600 dark:text-slate-300 text-sm font-normal leading-normal @[480px]:text-base">
                          Oweleen is revolutionizing real estate investment through blockchain, AI, and tokenization. We're on a mission to democratize the market, making it transparent, accessible, and rewarding for everyone.
                        </h2>
                      </div>
                      <button className="flex self-center @[864px]:self-start min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-wide @[480px]:text-base">
                        <span className="truncate">Explore Investment Opportunities</span>
                      </button>
                    </div>
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-1/2"
                      style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBHEs6pHs4lWUIBj1aBDdH8MA0GyTa8Mtr-GH5RjkTdXhPtPck16_5k6JC6jjk-wyub9RhEc9P2KjK_rWcZNwBH1mYsk2-YyQZyOSrTBpceUTvZkHR6mItvfygG5-_r0Jy4UgiyUp6Ald9GXQlQIKPyQPvLuNGtiHJnLBVPe5J-5sNf-ERpPYLPmhUgW09sQtRxGS-7V_8nkPOydSLF3OlSvubYhoVgISgWPcSCQ4qbB6ESPhQNtEH0uLyPgoYTRQZM-o7D1iLUn8k")' }}
                    ></div>
                  </div>
                </div>
              </div>
            </section>
            {/* Transition to Dark Section */}
            <div className="bg-gradient-to-b from-background-light to-[#161625] dark:from-background-dark dark:to-[#161625]">
              {/* Team Section */}
              <section className="px-4 py-16 sm:px-6 lg:px-8 xl:px-0">
                <div className="max-w-4xl mx-auto">
                  <div className="layout-content-container flex flex-col flex-1">
                    <h2 className="text-[#111318] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center">The Minds Behind the Mission</h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 p-4">
                      <div className="group relative bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-[3/4] overflow-hidden" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkbwQjfhQiVPQS0su2yLW4Y10a5ktqiNc12jUg0N6F80h5WgKUu8_4i8vg-IXLxedEzG1EJ5AFyOZofQbi6nVpGLxjHQ0gWSSVI9UbbSB8GCBqTCscdwTlDWBYhVQJJKZIF5rX23O6FD60jrMsNR-pTBaE0ebZY1b8LsYePWdCusQvLeFeZuKaBvoQRQ25hPMy5ysd9t0Gq3-eHWDjzPJjm8GTtm1sVDMM2dhwpfMS6YUBQzyh8_tHTGVoiCOFKbaa8C89bZawjMY")' }}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                          <p className="text-white text-base font-bold leading-tight line-clamp-3">Alex Chen</p>
                          <p className="text-white/80 text-sm">CEO & Founder</p>
                        </div>
                      </div>
                      <div className="group relative bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-[3/4] overflow-hidden" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAq_ceyBkIbLt1Q9pmh_aaQooKst-YonMaPtz4tPYhgt64YYRGgfWedHnTBz5yGz5pZIb7E8Kh3g9xxdm1C6Q7OSPsxaQB7JcgkeapfltS9OdGtaZYptq4VvPBGU2FSxXTRUBgHGL_q7D5EeaXLg73RspiNCrqeu8dJndgLVaP_Ql7GQnyAsj0LlWSjH1VHpoSLtsezpiak_KpqqIucyCB7LglixRWyhDHoW3RDuR96zSXXbvUyRCbx6Ony0_mXTd0E7TpsvrtNjd8")' }}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                          <p className="text-white text-base font-bold leading-tight line-clamp-3">Brenda Smith</p>
                          <p className="text-white/80 text-sm">Head of Blockchain</p>
                        </div>
                      </div>
                      <div className="group relative bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-[3/4] overflow-hidden" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBk-ZUvUd4GnI2G1Zayzt3EFLuQ64QRklvhlRunknFYm6ljRGAgf4jbwAUWfaOf0Id7ZdZXk8sfcKyDCWQIvQcM2kpIkFbbuN1F_kO9FS-l_C7hkR_s9qN5Kz-CT_t33oqQUd94mRHrD8Aklc7gYEVELXAsBjRuNnFCWYzez9MklgNY7_KezF4_g2THicg9BH1LvHYHEgGH4RhJLBK4DK48Mx9a-PPBWeCn3eGJR5ZJM2A52llVpEWM6DeptD_FA6L4yZO-LSVWjcY")' }}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                          <p className="text-white text-base font-bold leading-tight line-clamp-3">Carlos Gomez</p>
                          <p className="text-white/80 text-sm">Lead AI Engineer</p>
                        </div>
                      </div>
                      <div className="group relative bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-[3/4] overflow-hidden" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqUlpXd_Q4DdB43OfEOz_QXFrDMoOdOZTsl1-OmCK6ey6m3t1HrlhDFtDFw5LKfUfPdGvCsGBU4VJ3n86z_tMU8XjB9717Df_Nk3nnOTXPcVRG_l0AcEnHwJzC-wBf65ArBR2TdJKP6aj2bAjhsawkHwOaF7BkycwIlcPgmN_-KBJRUjkxaR1Sclmw2pLD-hTJZCVAQKRdmQRz2rQVRpFE7Ty44eR9jlv7jVgK5K3wrFzo5gCXlOMJEbJEK3cYePMGh3vvewKb9WU")' }}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                          <p className="text-white text-base font-bold leading-tight line-clamp-3">Dana White</p>
                          <p className="text-white/80 text-sm">Chief Marketing Officer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Technology Section */}
              <section className="px-4 py-16 sm:px-6 lg:px-8 xl:px-0 bg-[#161625] text-[#E0E0E0]">
                <div className="max-w-4xl mx-auto">
                  <div className="layout-content-container flex flex-col flex-1">
                    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center">The Technology That Powers Us</h2>
                    <div className="flex flex-col p-4 gap-3">
                      <details className="flex flex-col rounded-lg border border-white/20 bg-white/5 px-[15px] py-[7px] group" open>
                        <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                          <p className="text-white text-sm font-medium leading-normal">Blockchain Technology</p>
                          <div className="text-white group-open:rotate-180 transition-transform">
                            <span className="material-symbols-outlined">expand_more</span>
                          </div>
                        </summary>
                        <p className="text-slate-400 text-sm font-normal leading-normal pb-2">
                          Our platform is built on a secure and transparent blockchain, ensuring every transaction is immutable and verifiable, providing unparalleled trust for our investors.
                        </p>
                      </details>
                      <details className="flex flex-col rounded-lg border border-white/20 bg-white/5 px-[15px] py-[7px] group">
                        <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                          <p className="text-white text-sm font-medium leading-normal">Artificial Intelligence</p>
                          <div className="text-white group-open:rotate-180 transition-transform">
                            <span className="material-symbols-outlined">expand_more</span>
                          </div>
                        </summary>
                        <p className="text-slate-400 text-sm font-normal leading-normal pb-2">
                          Leveraging AI, we analyze market trends and property data to identify high-potential investments, providing you with data-driven insights to maximize your returns.
                        </p>
                      </details>
                      <details className="flex flex-col rounded-lg border border-white/20 bg-white/5 px-[15px] py-[7px] group">
                        <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                          <p className="text-white text-sm font-medium leading-normal">Asset Tokenization</p>
                          <div className="text-white group-open:rotate-180 transition-transform">
                            <span className="material-symbols-outlined">expand_more</span>
                          </div>
                        </summary>
                        <p className="text-slate-400 text-sm font-normal leading-normal pb-2">
                          We convert real estate assets into digital tokens, enabling fractional ownership. This allows you to invest in high-value properties with any amount, making real estate accessible to all.
                        </p>
                      </details>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* CTA Section */}
            <section className="bg-[#161625] text-white px-4 py-20 sm:px-6 lg:px-8 xl:px-0">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Reshape Real Estate?</h2>
                <p className="mt-4 text-slate-300">Join our community and be a part of the future of real estate investment.</p>
                <div className="mt-8 flex justify-center">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-wide">
                    <span className="truncate">Explore Investment Opportunities</span>
                  </button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
