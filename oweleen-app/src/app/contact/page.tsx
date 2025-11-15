import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactUsPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <Header />
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex-1 px-4 sm:px-10 md:px-20 lg:px-40 py-16 lg:py-24">
            <div className="mx-auto max-w-7xl">
              {/* Page Heading Component */}
              <div className="text-center mb-12">
                <h1 className="text-gray-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Get In Touch. Let's Build the Future Together.</h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-normal mt-4 max-w-3xl mx-auto">
                  We're excited to hear from you. Whether you have a question about our services, a project proposal, or just want to say hello, please feel free to reach out using the form below.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                {/* Contact Form */}
                <div className="lg:col-span-3 bg-white dark:bg-background-dark/50 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                  <form action="#" className="space-y-6" method="POST">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Full Name Field */}
                      <label className="flex flex-col">
                        <p className="text-base font-medium leading-normal pb-2 text-gray-800 dark:text-gray-200">Full Name</p>
                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 h-14 placeholder:text-gray-500 p-4 text-base font-normal leading-normal transition-shadow" name="name" placeholder="Enter your full name" type="text" />
                      </label>
                      {/* Work Email Field */}
                      <label className="flex flex-col">
                        <p className="text-base font-medium leading-normal pb-2 text-gray-800 dark:text-gray-200">Work Email</p>
                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 h-14 placeholder:text-gray-500 p-4 text-base font-normal leading-normal transition-shadow" name="email" placeholder="you@company.com" type="email" />
                      </label>
                    </div>
                    {/* Subject Field */}
                    <label className="flex flex-col">
                      <p className="text-base font-medium leading-normal pb-2 text-gray-800 dark:text-gray-200">Subject</p>
                      <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 h-14 placeholder:text-gray-500 p-4 text-base font-normal leading-normal transition-shadow" name="subject" placeholder="How can we help?" type="text" />
                    </label>
                    {/* Message Textarea */}
                    <label className="flex flex-col">
                      <p className="text-base font-medium leading-normal pb-2 text-gray-800 dark:text-gray-200">Your Message</p>
                      <textarea className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 min-h-36 placeholder:text-gray-500 p-4 text-base font-normal leading-normal transition-shadow" placeholder="Tell us about your project..."></textarea>
                    </label>
                    <button className="w-full flex items-center justify-center rounded-lg h-14 px-6 bg-primary text-white text-base font-bold tracking-[0.015em] hover:bg-primary/90 transition-colors" type="submit">
                      Send Message
                    </button>
                  </form>
                </div>
                {/* Contact Details & Socials */}
                <div className="lg:col-span-2 space-y-12">
                  {/* Contact Info */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Other Ways to Connect</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 size-12 bg-primary/10 dark:bg-primary/20 text-primary rounded-lg flex items-center justify-center">
                          <span className="material-symbols-outlined">mail</span>
                        </div>
                        <div>
                          <p className="font-bold text-gray-800 dark:text-gray-200">Email</p>
                          <a className="text-gray-600 dark:text-gray-400 hover:text-primary" href="mailto:contact@oweleen.com">contact@oweleen.com</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 size-12 bg-primary/10 dark:bg-primary/20 text-primary rounded-lg flex items-center justify-center">
                          <span className="material-symbols-outlined">call</span>
                        </div>
                        <div>
                          <p className="font-bold text-gray-800 dark:text-gray-200">Phone</p>
                          <a className="text-gray-600 dark:text-gray-400 hover:text-primary" href="tel:+1234567890">+1 (234) 567-890</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 size-12 bg-primary/10 dark:bg-primary/20 text-primary rounded-lg flex items-center justify-center">
                          <span className="material-symbols-outlined">location_on</span>
                        </div>
                        <div>
                          <p className="font-bold text-gray-800 dark:text-gray-200">Address</p>
                          <p className="text-gray-600 dark:text-gray-400">123 Future Drive, Tech City, 45678</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Social Media */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Follow Our Journey</h3>
                    <div className="flex items-center gap-4">
                      <a className="flex size-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary/10 hover:dark:bg-primary/20 hover:text-primary transition-colors" href="#">
                        <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 21.999v-5.694c0-2.793-1.122-3.957-3.376-3.957-1.576 0-2.348.83-2.736 1.636h-.039v-1.38H12v8.395h3.999v-4.9c0-1.29.248-2.54 1.83-2.54 1.554 0 1.577 1.47 1.577 2.62v4.82h3.999zM7.004 9.382H3.001V22h4.003V9.382zm2.002-5.38a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path></svg>
                      </a>
                      <a className="flex size-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary/10 hover:dark:bg-primary/20 hover:text-primary transition-colors" href="#">
                        <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.5 20.33 8.79c0-.19 0-.38-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path></svg>
                      </a>
                      <a className="flex size-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary/10 hover:dark:bg-primary/20 hover:text-primary transition-colors" href="#">
                        <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.085-.62-.054-1.348.09-1.972.193-.865.92-3.882.92-3.882s-.23-.46-.23-1.14c0-1.07.62-1.87 1.4-1.87.66 0 1-.49.9-1.07-.02-.27-.17-.67-.25-.92-.1-.28-.08-.37.15-.55.27-.2.65-.8.98-1.03.38-.27.48-.52.34-1-.13-.44-.45-1.33-.61-1.84-.19-.58.09-.7.42-.48.95.66 1.46 2.19 1.46 3.41 0 1.94-1.21 3.42-2.88 3.42-1.13 0-1.95-.87-1.7-1.93.16-.67.48-1.37.68-1.85.23-.52.31-.7.21-1.13-.15-.62-.64-1.46-1.57-1.46-1.41 0-2.55 1.47-2.55 3.3 0 1.22.42 2.22 1 2.87-.12.48-.42 1.63-.53 2.06-.15.58-.58 1.12-1.02 1.52.26 3.32 2.69 5.8 5.75 5.8 3.51 0 6.33-2.6 6.33-6.52 0-3.1-2.12-5.41-5.11-5.41-1.97 0-3.37 1.41-3.37 3.06 0 .7.25 1.22.56 1.62.1.12.11.21.08.34-.08.38-.27.94-.31 1.12-.05.21-.11.28-.26.17-.67-.47-1.1-1.45-1.1-2.42 0-2 1.47-4.14 4.43-4.14 2.5 0 4.26 1.83 4.26 4.41 0 2.94-1.62 5.1-3.9 5.1-1.16 0-1.8-.93-1.54-2.04.3-.96.88-2.1.88-2.84 0-.87-.46-1.59-1.42-1.59-.97 0-1.68.99-1.68 2.24 0 .84.3 1.44.3 1.44s-1.28 5.4-1.5 6.34c-.26 1.09-1.44 2.4-1.44 2.4 0 0 .54 2.14.71 2.7.27.87.63.98.63.98a7.53 7.53 0 005.81-2.02c1.9-2.11 1.15-5.51.92-6.53z" fillRule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
