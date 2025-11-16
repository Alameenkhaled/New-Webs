import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const LegalPage = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <Header />
      <div className="relative flex min-h-screen w-full flex-col">
        <main className="container mx-auto flex-grow px-4 py-8 md:px-6 md:py-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            <aside className="w-full lg:w-64 lg:sticky lg:top-24 lg:self-start">
              <nav className="flex flex-col gap-2">
                <a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20" href="#terms-of-service">
                  <span className="text-muted-light dark:text-muted-dark group-hover:text-primary">Terms of Service</span>
                </a>
                <a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20" href="#privacy-policy">
                  <span className="text-muted-light dark:text-muted-dark group-hover:text-primary">Privacy Policy</span>
                </a>
                <a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20" href="#cookie-policy">
                  <span className="text-muted-light dark:text-muted-dark group-hover:text-primary">Cookie Policy</span>
                </a>
                <a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20" href="#disclaimer">
                  <span className="text-muted-light dark:text-muted-dark group-hover:text-primary">Disclaimer</span>
                </a>
                <a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20" href="#risk-disclosure">
                  <span className="text-muted-light dark:text-muted-dark group-hover:text-primary">Risk Disclosure</span>
                </a>
              </nav>
            </aside>
            <div className="flex-1">
              <div className="mb-8 border-b border-gray-200/80 dark:border-gray-800/80 pb-6">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div className="flex min-w-72 flex-col gap-2">
                    <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">Legal &amp; Terms</h1>
                    <p className="text-muted-light dark:text-muted-dark text-base font-normal leading-normal">Last Updated: October 26, 2023</p>
                  </div>
                </div>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
                <section id="terms-of-service">
                  <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] md:text-3xl">Terms of Service</h2>
                  <div className="mt-4 space-y-4 text-base font-normal leading-relaxed text-text-light dark:text-text-dark/90">
                    <p>Welcome to Oweleen. These terms and conditions outline the rules and regulations for the use of Oweleen's Website. By accessing this website we assume you accept these terms and conditions. Do not continue to use Oweleen if you do not agree to take all of the terms and conditions stated on this page.</p>
                    <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: 'Client', 'You' and 'Your' refers to you, the person log on this website and compliant to the Company’s terms and conditions.</p>
                    <p>We employ the use of cookies. By accessing Oweleen, you agreed to use cookies in agreement with the Oweleen's Privacy Policy. Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website.</p>
                  </div>
                </section>
                <section id="privacy-policy">
                  <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] md:text-3xl">Privacy Policy</h2>
                  <div className="mt-4 space-y-4 text-base font-normal leading-relaxed text-text-light dark:text-text-dark/90">
                    <p>Your privacy is important to us. It is Oweleen's policy to respect your privacy regarding any information we may collect from you across our website. We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
                    <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification. We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
                  </div>
                </section>
                <section id="cookie-policy">
                  <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] md:text-3xl">Cookie Policy</h2>
                  <div className="mt-4 space-y-4 text-base font-normal leading-relaxed text-text-light dark:text-text-dark/90">
                    <p>This is the Cookie Policy for Oweleen, accessible from our main website. We use cookies to improve your experience on our site. This policy explains what cookies are, how we use them, the types of cookies we use, and how you can manage your cookie preferences.</p>
                    <p>Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site. You have the right to choose whether or not to accept cookies. However, they are an important part of how our services work, so you should be aware that if you choose to refuse or remove cookies, this could affect the availability and functionality of the services.</p>
                  </div>
                </section>
                <section id="disclaimer">
                  <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] md:text-3xl">Disclaimer</h2>
                  <div className="mt-4 space-y-4 text-base font-normal leading-relaxed text-text-light dark:text-text-dark/90">
                    <p>The information provided by Oweleen on our website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
                    <p>Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.</p>
                  </div>
                </section>
                <section id="risk-disclosure">
                  <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] md:text-3xl">Risk Disclosure</h2>
                  <div className="mt-4 space-y-4 text-base font-normal leading-relaxed text-text-light dark:text-text-dark/90">
                    <p>The services offered by Oweleen may involve significant risk and are not suitable for all users. You should not engage in any activity through our platform unless you understand the nature of the transactions you are entering into and the extent of your exposure to risk. You should also be satisfied that the transaction is suitable for you in light of your circumstances and financial position.</p>
                    <p>Past performance is not indicative of future results. The value of investments can go down as well as up, and you may not get back the amount you invested. We do not provide investment advice and any observations we may make are not intended to be and should not be taken as investment advice.</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default LegalPage;
