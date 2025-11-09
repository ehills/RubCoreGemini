import { HashLink } from 'react-router-hash-link';
import sevensImage from '../assets/sevens.jpg';
import React from 'react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-secondary border-t border-dark-tertiary">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
             <div className="flex items-center space-x-3">
                <img src={sevensImage} alt="Rub Core Airsoft Logo" className="h-8 w-8 rounded-full" />
                <span className="text-2xl font-extrabold text-light-primary tracking-tight">RUB CORE AIRSOFT</span>
             </div>
            <p className="text-gray-400 text-base">The premier airsoft club for enthusiasts of all levels.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-brand-primary">
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-primary">
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-primary">
                <span className="sr-only">YouTube</span>
                <YoutubeIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Quick Links</h3>
                <ul className="mt-4 space-y-4">
                  <li><HashLink smooth to="/#about" className="text-base text-gray-400 hover:text-brand-primary">About</HashLink></li>
                  <li><HashLink smooth to="/#events" className="text-base text-gray-400 hover:text-brand-primary">Events</HashLink></li>
                  <li><HashLink smooth to="/#gallery" className="text-base text-gray-400 hover:text-brand-primary">Gallery</HashLink></li>
                  <li><HashLink smooth to="/#contact" className="text-base text-gray-400 hover:text-brand-primary">Contact</HashLink></li>
                </ul>
              </div>
            
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact</h3>
                 <ul className="mt-4 space-y-4">
                  <li><p className="text-base text-gray-400">romeouniformbravo@gmail.com</p></li>
                  <li><p className="text-base text-gray-400">Wellington, New Zealand</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-dark-tertiary pt-8 text-center">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} RuB Core. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;