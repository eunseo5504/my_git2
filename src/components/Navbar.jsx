import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md font-['Manrope'] tracking-tight leading-relaxed no-border bg-surface-container-low/30">
      <div className="flex justify-between items-center px-8 py-6 max-w-full mx-auto">
        <Link to="/" className="text-xl font-bold tracking-tighter text-stone-900 dark:text-stone-50">
          The Curator
        </Link>
        <div className="hidden md:flex items-center space-x-12">
          <Link to="/" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">홈</Link>
          <Link to="/services" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">서비스</Link>
          <Link to="/projects" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">프로젝트</Link>
          <Link to="/about" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">회사 소개</Link>
          <Link to="/client-portal" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">고객 포털</Link>
        </div>
        <Link to="/contact">
          <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-lg text-sm font-medium tracking-wide scale-101 hover:opacity-90 transition-transform">
            문의하기
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
