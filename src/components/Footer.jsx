import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-stone-50 dark:bg-stone-950 font-['Manrope'] text-sm tracking-wide leading-loose w-full rounded-none tonal-shift bg-stone-100/50 dark:bg-stone-900/50 border-t border-stone-200/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20">
        <div className="flex flex-col gap-6">
          <div className="text-lg font-bold text-stone-900 dark:text-stone-50">The Curator</div>
          <p className="text-stone-500 dark:text-stone-400">
            우리는 보이지 않는 것을 보이게 하고, 평범한 것을 특별하게 만듭니다. 당신의 비전을 큐레이팅하세요.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-stone-900 dark:text-stone-50 mb-2">탐색</span>
          <Link to="/" className="text-stone-500 dark:text-stone-400 hover:text-amber-600 underline-offset-4 hover:underline transition-all">홈</Link>
          <Link to="/services" className="text-stone-500 dark:text-stone-400 hover:text-amber-600 underline-offset-4 hover:underline transition-all">서비스</Link>
          <Link to="/projects" className="text-stone-500 dark:text-stone-400 hover:text-amber-600 underline-offset-4 hover:underline transition-all">프로젝트</Link>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-stone-900 dark:text-stone-50 mb-2">법적 고지</span>
          <Link to="#" className="text-stone-500 dark:text-stone-400 hover:text-amber-600 underline-offset-4 hover:underline transition-all">이용약관</Link>
          <Link to="#" className="text-stone-500 dark:text-stone-400 hover:text-amber-600 underline-offset-4 hover:underline transition-all">개인정보처리방침</Link>
          <Link to="#" className="text-stone-500 dark:text-stone-400 hover:text-amber-600 underline-offset-4 hover:underline transition-all">쿠키 정책</Link>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-stone-900 dark:text-stone-50 mb-2">소셜</span>
          <a href="#" className="text-stone-500 dark:text-stone-400 hover:text-amber-600 underline-offset-4 hover:underline transition-all">인스타그램</a>
          <a href="#" className="text-stone-500 dark:text-stone-400 hover:text-amber-600 underline-offset-4 hover:underline transition-all">링크드인</a>
          <a href="#" className="text-stone-500 dark:text-stone-400 hover:text-amber-600 underline-offset-4 hover:underline transition-all">비핸스</a>
        </div>
      </div>
      <div className="px-12 py-8 border-t border-stone-200/10 text-stone-500 dark:text-stone-400 text-xs flex justify-between">
        <span>© 2024 The Curator. All rights reserved.</span>
        <div className="flex gap-6">
          <span className="opacity-80 hover:opacity-100 duration-200 cursor-pointer">KR</span>
          <span className="opacity-80 hover:opacity-100 duration-200 cursor-pointer">EN</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
