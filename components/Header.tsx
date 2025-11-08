
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TargetIcon } from './icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-dark-secondary/80 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <TargetIcon className="h-8 w-8 text-brand-primary group-hover:animate-spin" />
            <span className="text-2xl font-extrabold text-light-primary tracking-tight">RUB CORE AIRSOFT</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#about" className="text-gray-300 hover:text-brand-primary transition-colors duration-200 font-semibold">About Us</Link>
            <Link to="/#events" className="text-gray-300 hover:text-brand-primary transition-colors duration-200 font-semibold">Events</Link>
            <Link to="/#gallery" className="text-gray-300 hover:text-brand-primary transition-colors duration-200 font-semibold">Gallery</Link>
            <Link to="/#contact" className="text-gray-300 hover:text-brand-primary transition-colors duration-200 font-semibold">Contact</Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-brand-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-dark-tertiary">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <Link to="/#about" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-brand-primary block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
            <Link to="/#events" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-brand-primary block px-3 py-2 rounded-md text-base font-medium">Events</Link>
            <Link to="/#gallery" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-brand-primary block px-3 py-2 rounded-md text-base font-medium">Gallery</Link>
            <Link to="/#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-brand-primary block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;