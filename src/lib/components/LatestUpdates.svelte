<script lang="ts">
    // Static dataset representing the localized card text
    const updates = [
      {
        category: 'NEWS',
        date: 'FEBRUARY 19, 2026',
        title: 'Voters offer critical feedback and blessings to Sasmit during constituency matches.'
      },
      {
        category: 'NEWS',
        date: 'FEBRUARY 15, 2026',
        title: 'Sasmit releases manifesto in three languages, prioritizing comprehensive education reforms.'
      },
      {
        category: 'NEWS',
        date: 'FEBRUARY 12, 2026',
        title: 'Regular public hearings announced by Pokhrel, unveiling a strategic 60-program 5-year roadmap.'
      }
    ];
  
    // Svelte 5 state to track which card is active on mobile screens
    let currentIndex = $state(0);
  
    function nextSlide() {
      if (currentIndex < updates.length - 1) {
        currentIndex += 1;
      } else {
        currentIndex = 0; // Loop back to the start
      }
    }
  
    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex -= 1;
      } else {
        currentIndex = updates.length - 1; // Loop to the end
      }
    }
  </script>
  
  <section class="w-full bg-[#0046b8] text-white py-16 md:py-24 px-6 md:px-12 select-none overflow-hidden">
    <div class="max-w-7xl mx-auto w-full flex flex-col space-y-12">
      
      <div class="w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div class="flex flex-col space-y-2">
          <div class="flex items-center space-x-2">
            <span class="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
            <span class="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/80">
              LIVE UPDATES
            </span>
          </div>
          <h2 class="text-4xl md:text-5xl font-black tracking-tight">
            Latest Updates
          </h2>
        </div>
  
        <a 
          href="/news" 
          class="inline-flex items-center space-x-2 text-xs font-bold tracking-widest uppercase hover:opacity-80 transition-opacity border-b-2 border-white pb-1 w-fit"
        >
          <span>VIEW ALL NEWS</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
  
      <div class="w-full overflow-hidden">
        <div 
          class="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-transform duration-500 ease-out-quad"
          style="transform: translateX(-{currentIndex * 100}%); gap: {currentIndex > 0 ? '0px' : '1.5rem'};"
        >
          {#each updates as item, i}
            <article 
              class="min-w-full md:min-w-0 group relative bg-white/5 border border-white/10 rounded-lg p-6 md:p-8 flex flex-col justify-between min-h-[220px] hover:bg-white/10 transition-all duration-300 cursor-pointer shadow-md scroll-ml-6 snap-start"
              class:opacity-40={currentIndex !== i && typeof window !== 'undefined' && window.innerWidth < 768}
            >
              <div class="w-full flex items-center justify-between text-[11px] font-bold tracking-wider text-white/60 mb-6">
                <span>{item.category}</span>
                <span>{item.date}</span>
              </div>
  
              <h3 class="text-lg md:text-xl font-bold leading-snug tracking-wide text-white/95 group-hover:text-white transition-colors flex-grow">
                {item.title}
              </h3>
            </article>
          {/each}
        </div>
      </div>
  
      <div class="w-full flex items-center justify-center space-x-6 pt-6">
        <button 
          onclick={prevSlide}
          class="h-11 w-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all text-white/80 hover:text-white"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
  
        <div class="flex items-center space-x-2">
          {#each updates as _, idx}
            <span 
              class="h-1 transition-all duration-300 rounded-full {currentIndex === idx ? 'w-6 bg-yellow-400' : 'w-1.5 bg-white/30'}"
            ></span>
          {/each}
        </div>
  
        <button 
          onclick={nextSlide}
          class="h-11 w-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all text-white/80 hover:text-white"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
  
    </div>
  </section>