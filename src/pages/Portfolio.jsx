import React from 'react';

const Portfolio = () => {
  return (
    <main className="pt-32 pb-24 px-8 md:px-12 lg:px-20 max-w-[1920px] mx-auto">
      {/* Header Section */}
      <header className="mb-16 max-w-3xl">
        <span className="text-secondary font-semibold tracking-[0.2em] text-sm mb-4 block">PORTFOLIO</span>
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-8">
          공간에 <span className="text-secondary">숨</span>을 불어넣다
        </h1>
        <p className="text-on-surface-variant text-lg leading-relaxed font-light">
          우리는 단순한 건축을 넘어 삶의 서사를 큐레이팅합니다. 빛과 그림자, 텍스처와 비례가 어우러진 The Curator의 독창적인 프로젝트 갤러리를 만나보세요.
        </p>
      </header>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center gap-8 mb-20 border-b border-outline-variant/10 pb-6">
        <button className="group relative py-2">
          <span className="text-on-surface font-semibold tracking-wide">All Projects</span>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary scale-x-100 transition-transform"></div>
        </button>
        <button className="group relative py-2">
          <span className="text-on-surface-variant group-hover:text-on-surface transition-colors font-medium tracking-wide">Architecture</span>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform"></div>
        </button>
        <button className="group relative py-2">
          <span className="text-on-surface-variant group-hover:text-on-surface transition-colors font-medium tracking-wide">Interior</span>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform"></div>
        </button>
        <button className="group relative py-2">
          <span className="text-on-surface-variant group-hover:text-on-surface transition-colors font-medium tracking-wide">Landscape</span>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform"></div>
        </button>
      </div>

      {/* Masonry Grid (Approximated with CSS Columns for simplicity in React, or just standard grid as in design) */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {/* Project Item 1 */}
        <article className="break-inside-avoid relative group overflow-hidden bg-surface-container-low rounded-xl">
          <img
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdgW-DMu8yJBB6N0f1HOUSpcKKMgWvW55BVPwVLjSKIk5JN6fXVORWccYAWe7epXDKQEXIDbkjxY3eTt2uPrRlp2xuFLpy1-6hoMje-VWdtvJGPPEDxSiIOMdBrcJBF0U5BmD6141rtgCgrl7tPitATmtZfuq92gKRAoCFhnE37nuZ_EmOsLUL5SKE3cTqOXsGIedhyFIoRNXj197cghNuvp3NFoFS6rdhpYsK9VlIjPs37PRgwll2kcpoTmFSedNVRTv_aXEbA0M"
            alt="The Monolith Pavilion"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
            <span className="text-secondary text-xs font-bold tracking-widest mb-2 uppercase">Architecture</span>
            <h3 className="text-white text-2xl font-bold mb-4">The Monolith Pavilion</h3>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span>Read More</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
        </article>

        {/* Project Item 2 */}
        <article className="break-inside-avoid relative group overflow-hidden bg-surface-container-low rounded-xl">
          <img
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxF-XANRWcprmb9fuFG4NYLh_9C3LGTkqjriQ8MMEdmIyvpikhbh1SNJ-udOWcZ0yZREYHQ564Z8pyi_DvfIPp7DnsYhwwf9Apal8YTTYKUWBkwJY2EMm-m2ZZC5v8IOlaa0BXKWmk2MkKoUYh7lhcVx1rrGdrem8KE1EenqNfRgf7HTdNFAxUVJGbroJ486ES6mEVG_1_nKe7GDr-YflngiU2esCwupBS7bEr8gmwMUwi-8ROwpSoEiRgKAx1UJXxpJrELaBbz1o"
            alt="Serene Silence Residence"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
            <span className="text-secondary text-xs font-bold tracking-widest mb-2 uppercase">Interior</span>
            <h3 className="text-white text-2xl font-bold mb-4">Serene Silence Residence</h3>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span>Read More</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
        </article>

        {/* Project Item 3 */}
        <article className="break-inside-avoid relative group overflow-hidden bg-surface-container-low rounded-xl">
          <img
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxdKTsQ9q9U7MmTTYGMU2y6hCTkPDffs5_g_rG-cCtv4SDHJE8YcjmwvMonc9yP3TCuagcI9L1OEO0PhvgQjFruTpFfE7WUw2ncTHIiy9dhQtIpNyVvkRHUyDZiuOPZB4tlDIOEBYHp7E9cXiaMlX4vvGlq2myMDgjTUvoma7-P8Jy89zS4PylfEBmEDck-8eWIu4To1XaD5mfrn-NdnA7Ea2KIbHSpBEaO5RKFhxax4xKLrvBj4IUTLC_HniHeBwqMfq6_t3Zbns"
            alt="Ether Garden"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
            <span className="text-secondary text-xs font-bold tracking-widest mb-2 uppercase">Landscape</span>
            <h3 className="text-white text-2xl font-bold mb-4">Ether Garden</h3>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span>Read More</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
        </article>

        {/* Project Item 4 */}
        <article className="break-inside-avoid relative group overflow-hidden bg-surface-container-low rounded-xl">
          <img
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu98f1PTNzGWBe8q7G0WZdx3MByis6FuqxzaRgbaTqrR-AC9oQy1Lw8tluuRw7KIKjWw5SQ8T4iB7MINyZHxmp6162CXjiaTEO-ZlfCxmVGYd9Y1uXgigqs-6NWEEDqaQNOraG34x8Fq0oQMZz-q2m7i4phXqL-abo-CvjcJj6Pbe1B-D1yBQ1YcpNmqV4IopDtotcHIU7sB3msO7ollkx_8MvvGyI7hvy0Ouv9jigBZRqttQUP5JujHJjsr67s2pxXPXwLn45u2E"
            alt="Prism Corporate Center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
            <span className="text-secondary text-xs font-bold tracking-widest mb-2 uppercase">Architecture</span>
            <h3 className="text-white text-2xl font-bold mb-4">Prism Corporate Center</h3>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span>Read More</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
        </article>

        {/* Project Item 5 */}
        <article className="break-inside-avoid relative group overflow-hidden bg-surface-container-low rounded-xl">
          <img
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsR8Bsm_zkozJKPk3CHwS7x-qszsP9Kp7mggjmFA6eqw14zEeYmOyakJAZaVG0ElsQ-raX8H3Al3GusWR95YH4C7hP_HM4XfEl9YzeQLriSL05_gOgt6-BINwAmiNZzaY0NSUCKqZw_kv7ivzbS3Z1doyAfJUH-AA8X6yrLy-GPP0HWT7338Rv4manupkxhhiBC-VAF-CL1aWg7D2e7COXbHsK1t7-_RXz-gtzYaaaYzWm9yImBWFwME9myrT8ROc6KpdYW0aBYPg"
            alt="The Velvet Loft"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
            <span className="text-secondary text-xs font-bold tracking-widest mb-2 uppercase">Interior</span>
            <h3 className="text-white text-2xl font-bold mb-4">The Velvet Loft</h3>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span>Read More</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
        </article>

        {/* Project Item 6 */}
        <article className="break-inside-avoid relative group overflow-hidden bg-surface-container-low rounded-xl">
          <img
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT1Aqu5SoRXzhEyZvXG-9-u596DJmJYyX_NetCVGutSN8QiG0UNpOJL4Y2uRayETJffKv-wLvnGKDHCL-DxkZa8usG0efLT9C8rg3EXr5b_C52bT_UiqvuVFg6-HmngSHd5DZTEKBiNP-KgcnqpNUJ2IUdKE1zSdEyjse4sKuTMQq8d7p6vRs-7mUs36liqPbAIdz7--bw96xzIaV3fIEd3SgzsraP01gK8va8SUfKZzKF3HenSIgquwEcuw8dQdeDPztu8DAJWY0"
            alt="Aura Waterscape"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
            <span className="text-secondary text-xs font-bold tracking-widest mb-2 uppercase">Landscape</span>
            <h3 className="text-white text-2xl font-bold mb-4">Aura Waterscape</h3>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span>Read More</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
        </article>
      </div>

      {/* Load More Section */}
      <div className="mt-24 text-center">
        <button className="px-10 py-4 border-2 border-outline-variant hover:border-secondary hover:text-secondary transition-all font-semibold tracking-widest text-sm uppercase rounded-lg">
          View All Projects
        </button>
      </div>
    </main>
  );
};

export default Portfolio;
