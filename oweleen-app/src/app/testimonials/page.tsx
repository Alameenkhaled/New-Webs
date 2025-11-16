import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const TestimonialsPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <Header />
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Hero Section */}
          <div className="px-4 py-16 sm:px-6 lg:px-8 flex justify-center">
            <div className="layout-content-container flex flex-col max-w-4xl flex-1 text-center items-center">
              <h1 className="text-text-light dark:text-text-dark tracking-tight text-4xl md:text-5xl font-bold leading-tight">Real Voices. Real Results. Our Community Speaks.</h1>
              <p className="mt-4 max-w-2xl text-subtext-light dark:text-subtext-dark text-lg font-normal leading-relaxed">Discover the impact Oweleen has had on our community. Read stories from early investors and pilot program participants who are shaping the future with us.</p>
            </div>
          </div>
          {/* Featured Testimonial Carousel */}
          <div className="px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex overflow-x-auto snap-x snap-mandatory [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden py-8">
              <div className="flex items-stretch gap-8 mx-auto">
                <div className="flex h-full flex-col gap-6 text-center bg-card-light dark:bg-card-dark rounded-xl p-8 shadow-sm w-full max-w-sm sm:max-w-md snap-center flex-shrink-0">
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex self-center w-20 h-20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLpIFQQYwzkxKE8iZ3H4Nq3Fhut7JMV42gTOyj-YXfPti_yw8H9TE8EMPtzh_HbtcRanas3oM550RV7cQ4Jxb8g20JWD6dK2z5sWk3eRXTsLK8MaXAHkB4fAmspqGG_8T0ImsOdMUCvtYFpJl2gO3hF1LK3Q8fJt1Sxubg4N8x5fa_PmS0DqAyw9bTPZtiBEnXWmXU3GpqDtbkwg4IzXtfBdDXhBIsh8eTAXiy-D3OIIOrzBJmguSsrfQk9AqVRrA2wpLA4pI8FkU")' }}></div>
                  <div>
                    <p className="text-text-light dark:text-text-dark text-lg font-medium leading-relaxed">"Oweleen transformed my investment strategy. The clarity and data provided are unparalleled. It's a must-have tool for any serious investor."</p>
                    <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal mt-4">Sarah L., Early Investor</p>
                  </div>
                </div>
                <div className="flex h-full flex-col gap-6 text-center bg-card-light dark:bg-card-dark rounded-xl p-8 shadow-sm w-full max-w-sm sm:max-w-md snap-center flex-shrink-0">
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex self-center w-20 h-20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCR9Jf6w4SqzjPMwFfVRDomuYCO4qKTgxk2Z_kiVN45psUkPmYNLnTfyJfCuvIL7tJozAEzNYfSFMGM9mKYWoVXEHtRJmMLoEzrDMPQj80TwPwIIocVSV6PzwtYMhQqsHXTZyjw8vGsDOZnUVVVn_DyXeqyTGln8KKelvvMCTXPF8WbpaKTBxOCpqPCVxSnjoQY11h84ha7mF4SVZMVfakLgNgvuiMBCsV7bVv0wwL9KDDPi0olbtqmqjzIdVUP5W_D3osYw9D3D9A")' }}></div>
                  <div>
                    <p className="text-text-light dark:text-text-dark text-lg font-medium leading-relaxed">"Joining the pilot program was a game-changer. The platform is not only powerful but also incredibly intuitive and easy to navigate."</p>
                    <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal mt-4">Mark Chen, Pilot Program Participant</p>
                  </div>
                </div>
                <div className="flex h-full flex-col gap-6 text-center bg-card-light dark:bg-card-dark rounded-xl p-8 shadow-sm w-full max-w-sm sm:max-w-md snap-center flex-shrink-0">
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex self-center w-20 h-20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCP7rUVfnNEepaaEvS4cSZPO7wcdSTBDn31jmpfO9z_EHcAQ6dL5HYv0QVYM1q-zq5-w0sNF7s08bHaedcGgMGpEiX-45kh3Q1VUlCgClqpkmhTZVUHVK9ajtE3DeQzFWZkerEBN4nWepScjQ4rC9XTzNvRpGrgNoc9uuxVO_BO4xXaO-1YYMA9TM-6jZWKN3YEes6Q9yHAHzUMIgmAcrBOLUHLOAh4TWjd0gDMcIQ_parmFZs_jS5CexbNZReDXstwqps4ECY2V30")' }}></div>
                  <div>
                    <p className="text-text-light dark:text-text-dark text-lg font-medium leading-relaxed">"The community and support at Oweleen are just as valuable as the financial insights. It feels like we're all building the future together."</p>
                    <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal mt-4">Emily Rodriguez, Community Member</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Video Testimonials Section */}
          <div className="px-4 py-16 sm:px-6 lg:px-8 flex justify-center">
            <div className="layout-content-container flex flex-col max-w-5xl flex-1">
              <h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-tight text-center pb-8">See the Impact in Action</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-cover bg-center flex flex-col rounded-xl justify-center items-center aspect-video group" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdcTE_dcj8glg8zVn4mDwL2H6eEj0QwjnDpmpZWzAOywCaWTEJemplmEan2c68nGh9tO-zFluBdvgkpE2lY9qSc8lM-EBzftIz7z9o_0HL963a2f-cbK36kAmVgy-TzS8AaLpZBf5jfr9p6krqhj9VXWjroFkAwtVfDj8X6MqsijWL9HcwL078Dy7I378GF8_GEC679OXbtz_uCh7MHSfN_kxI6AKN39ILONmgHU6DFZyp6LFyrA1leaPZUroCdJADWwOMSP5PjKg")' }}>
                  <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                    <span className="material-symbols-outlined text-white text-4xl">play_arrow</span>
                  </div>
                </div>
                <div className="bg-cover bg-center flex flex-col rounded-xl justify-center items-center aspect-video group" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3qiSabQ_cbNR6oz-NkpuzIhzDjJpI-CWcUedUw4sREwP-VhzUDIgn0avTz1U6JCwis7Cy3bbBtVNhvemI54roDambZ0VT6EkR8WF2DD3icaCxRhdK1y7Lich0xluDIhHQTd0t3iLpja_ITQ3kGAqYxVUO9jSz2JmLeaZ1OGPuxm2B6RYT8av8fc17cNqkgJuKBuzgi0SxRdC1jTO8cc9hXl70Al4NUqkzDk5Zs_UK20rlliY0ctRCIWPrXCnAZE2t1zywWuwJduc")' }}>
                  <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                    <span className="material-symbols-outlined text-white text-4xl">play_arrow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Success Story Cards */}
          <div className="px-4 py-16 sm:px-6 lg:px-8 flex justify-center">
            <div className="layout-content-container flex flex-col max-w-5xl flex-1">
              <h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-tight text-center pb-8">In-depth Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark">An Investor's Journey</h3>
                  <p className="text-subtext-light dark:text-subtext-dark mt-2 flex-grow">Follow the story of how an early investor leveraged Oweleen's analytics to achieve a 25% portfolio growth in their first six months.</p>
                  <a className="text-primary font-semibold mt-4 inline-flex items-center gap-2 group" href="#">Read Full Story <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span></a>
                </div>
                <div className="flex flex-col bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark">From Beta to Pro</h3>
                  <p className="text-subtext-light dark:text-subtext-dark mt-2 flex-grow">A pilot program participant shares their experience, from initial feedback to becoming a power user of the platform.</p>
                  <a className="text-primary font-semibold mt-4 inline-flex items-center gap-2 group" href="#">Read Full Story <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span></a>
                </div>
                <div className="flex flex-col bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark">Community-Driven Innovation</h3>
                  <p className="text-subtext-light dark:text-subtext-dark mt-2 flex-grow">Discover how feedback from our community members directly led to the development of our most popular new features.</p>
                  <a className="text-primary font-semibold mt-4 inline-flex items-center gap-2 group" href="#">Read Full Story <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span></a>
                </div>
              </div>
            </div>
          </div>
          {/* Call to Action Section */}
          <div className="px-4 py-16 sm:px-6 lg:px-8 flex justify-center">
            <div className="layout-content-container flex flex-col max-w-4xl flex-1 text-center items-center">
              <h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-tight">Ready to Start Your Own Success Story?</h2>
              <p className="mt-4 max-w-2xl text-subtext-light dark:text-subtext-dark text-lg font-normal leading-relaxed">Join a growing community of forward-thinking investors and help shape the future of finance.</p>
              <div className="mt-8 flex gap-4">
                <button className="bg-primary text-white font-semibold py-3 px-6 rounded-lg shadow-sm hover:opacity-90 transition-opacity">
                  Join Our Growing Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
