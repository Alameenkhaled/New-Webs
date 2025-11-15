import React from 'react';

const LandingPage6 = () => {
  return (
    <div className="overflow-x-hidden" id="wrapper">
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
                <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Marketplace</a>
                <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">About Us</a>
                <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">How It Works</a>
                <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Learn</a>
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
      <section className="bg-gradient-to-b from-background-light to-background-dark py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-gray-900 dark:text-white text-4xl sm:text-5xl font-bold tracking-tighter leading-tight mb-6">
              A World Where Real Estate Isn't an Exclusive Club.
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl leading-relaxed">
              Oweleen is dismantling the old guard. By tokenizing high-value properties, we're not just offering investment opportunities; we're architecting a new, inclusive financial ecosystem. Our platform makes coveted real estate assets liquid, accessible, and transparently traded, empowering a new generation of investors.
            </p>
          </div>
          <div className="flex justify-center items-center h-96">
            <img alt="3D animation of a luxury villa deconstructing into glowing digital cubes" className="w-full max-w-md h-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS-PvbKMU3BiqzTp32OGYXsbIGhlDZ36V89BtRtrn1SXqv8vQOXh3eYnCo-gDE_Bhmd0GCg8kpS1rNFTzW-_WJqUzxdgj4VS-iI6-Fd4JGO7uQwIcw6LULnqGdm2sphZyaBqmwiY_9yvZifqKTrxMdEJ_7ByI-TGP2CZf7jGwPIR4Bvf_FN2ECGV_IyLda5C3PjCm5x_uusmPZXsN8CClVh2gQYth84tUKL5wO8P4ABqY-Zi4xtWde_zaPEDTSwoLfidZvB3C1p-I" />
          </div>
        </div>
      </section>
      <section className="bg-background-dark py-20 sm:py-32 overflow-hidden">
        <div className="max-w-none mx-auto">
          <div className="pl-4 sm:pl-6 lg:pl-8">
            <h2 className="text-white text-4xl sm:text-5xl font-bold tracking-tighter leading-tight mb-4">Our Portfolios</h2>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl">Diversified investment portfolios tailored to your financial ambitions and values.</p>
          </div>
          <div className="mt-16">
            <div className="horizontal-scrolling-wrapper pl-4 sm:pl-6 lg:pl-8 space-x-8">
              <div className="flex-shrink-0 w-[300px] h-[450px] sm:w-[350px] sm:h-[525px] rounded-xl overflow-hidden relative group">
                <img alt="Digital matrix and abstract code visuals" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFvtnZogey5VNAG_U94x8_u1Bvilu_uKj6E-rUcFlE7q4yMWySXZEUntgGg_Dd0w9XJ72GSB-XfxbpTz4xE_FzENKadpDwjBfiQARQ9W_bsEXtzUTs7-4mZyWu2oNT18_anyxY6IkwRfqolutPtCy_m_oPDH7sLM_vvJQGcdEnUtCl0mWyaraug4gVHOab_SwQfOq5983NnKUkAbHvEsPtUoYoyBDiiTRkXFObX9jBbAwm7zne7Z0BxgTQntRphTp3dwfK_Eu8qps" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-white text-3xl font-bold uppercase tracking-[0.2em] glitch-text" data-text="ALPHA">ALPHA</h3>
                  <p className="text-white/80 mt-2">High-risk, high-reward ventures into emerging digital real estate markets.</p>
                </div>
              </div>
              <div className="flex-shrink-0 w-[300px] h-[450px] sm:w-[350px] sm:h-[525px] rounded-xl overflow-hidden relative group">
                <img alt="Community gathering in a modern, sustainable co-living space" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtYGxlBpVIkLIdcpIYbOU57d9bJ9vYiXz_B0HEnYE62HWwLtAresjFCs5hfNpHSPYlE4X0P856DQDM1PQaDeom6R5_935if5T-c5fO6qtsq85-RS3uCOssXAjpiHzbssqnyLOZwpf4Sx40sSycfkyxNJap7vFgocxVyNMqv-0YUCkCwQ58ojfDS22f_Ul_JOPVQCCwKvD0SSyOevP-i-vyNSt-h0qC3SEDPgJD7NJLVoSIEqEhXzezDhV76LsC0FK-CrQQLd-8SDc" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-white text-3xl font-bold">Impact Portfolio</h3>
                  <p className="text-white/80 mt-2">Invest in properties that generate social and environmental good alongside financial returns.</p>
                </div>
              </div>
              <div className="flex-shrink-0 w-[300px] h-[450px] sm:w-[350px] sm:h-[525px] rounded-xl overflow-hidden relative group">
                <img alt="Sleek, metallic interior of a luxury skyscraper penthouse" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6KprlmTeqixP-CDlLLOoIBSkFjDHZnIKUrKxbms8nqV0quyHQ4ji-Unan2vznUbFdG6kqYgg1aRuc7btrerAPZk1uMPfAes80huG8-GfjixYT9KLN_otc9RfsYhvozydD09dxVsNdvogsPD7_VHZsrcTWtl6-ArrNd1hsYcQbalq0reak-UqIa6fgbHjqco6SVqiBrfHXZmGREVgpSdBY_S8Pi76w1IWhoaJIrOQQqO6THOPgtDodKWpddnI9R3jFv9ZP8UQGeRE" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-white text-3xl font-bold">Diamond Portfolio</h3>
                  <p className="text-white/80 mt-2">Premium, iconic real estate in the world's most sought-after locations.</p>
                </div>
              </div>
              <div className="flex-shrink-0 w-[300px] h-[450px] sm:w-[350px] sm:h-[525px] rounded-xl overflow-hidden relative group">
                <img alt="Lush vertical gardens on a futuristic eco-friendly building" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqQdMGJImA7jD053SKE6WX6F0suyFu4E7ZdfRK0ci7dFXeX8b0KUXMY_oGmWp6i0UKaGGTHu4J1R9O_3qfxRDBiGhosw07Kl2su4_vpX7I3Y8E_NTtMjLwD5eiTKJblaucG_704EnNRMM_zHxpt0plktwzT28s7NArd5cWr8aPt1nIJDIXF2iKNCe-o1-MZvMf90B1dM2b_R68J2l9AlbVXLgwgVLVimo5-Spws1i9Qktbvs_YsOaSPurTSb9LyG1bPWgwEe7zk7A" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-white text-3xl font-bold">Green Finance</h3>
                  <p className="text-white/80 mt-2">Sustainable properties certified for energy efficiency and environmental design.</p>
                </div>
              </div>
              <div className="flex-shrink-0 w-[300px] h-[450px] sm:w-[350px] sm:h-[525px] rounded-xl overflow-hidden relative group mr-4 sm:mr-6 lg:mr-8">
                <img alt="Sun-drenched, modern family home with a pool" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5aVFJe_6tAPd6lq5fR7LGkpiimq1O9TWp7Vb53xz966mRwcVTOh_IvgpZm7rdeknu0uq8S3Gc9HZVD4X50GuaqNK85mxeDma5Ms38jkAdeyXLKR9u_2HCd94OcP6JpmUvTgYEC20Ckj56uOb8kP0-BgtgDMfpXkQgrvOQy_OwgjCnblFwGpgvBs0-K6D7UzerProyM46BJPkKzWPqlpHOnzk2gKyLFFtzXIlQb-JWbAn4h6qALsLnubAr-rfvvAKeIH4hY5y8oUU" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-white text-3xl font-bold">H. Homes Portfolio</h3>
                  <p className="text-white/80 mt-2">Curated selection of high-yield residential properties for long-term growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage6;
