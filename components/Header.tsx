
import React, { useState } from 'react';

const LogoIcon: React.FC = () => (
    <svg className="w-8 h-8 text-secondary" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z" />
    </svg>
);


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#features', label: 'ما يميزنا' },
    { href: '#personas', label: 'حلول حسب العميل' },
    { href: '#roi', label: 'العائد على الاستثمار' },
    { href: '#faq', label: 'الأسئلة الشائعة' },
    { href: '#contact', label: 'تواصل معنا' },
  ];

  return (
    <header className="bg-primary/95 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2 rtl:space-x-reverse">
            <LogoIcon />
            <span className="text-2xl font-bold text-white">Selfigo</span>
          </a>
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-200 hover:text-secondary transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-200 hover:text-secondary transition-colors duration-300 text-center py-2 bg-primary rounded-md">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
