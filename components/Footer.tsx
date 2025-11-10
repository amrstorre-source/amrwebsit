
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-gray-400 py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Selfigo. جميع الحقوق محفوظة.</p>
        <p className="text-sm mt-1">شريكك الاستراتيجي للنمو الذكي</p>
      </div>
    </footer>
  );
};

export default Footer;
