<script lang="ts">
    // Dataset representing media interviews with references to relevant figures
    const videos = [
      {
        platform: 'YOUTUBE • RECENT',
        description: 'We will deliver visibly impactful results within 100 days of a government led by the RaSaPa," said Sasmit...',
        thumbnailColor: 'bg-slate-800'
      },
      {
        platform: 'YOUTUBE • RECENT',
        description: 'Sasmit, who worked closely with Balen, explains why Balen avoids questions',
        thumbnailColor: 'bg-slate-700'
      },
      {
        platform: 'YOUTUBE • RECENT',
        description: 'RAPID FIRESIDE with SASMIT POKHAREL | FIRESIDE CLIP',
        thumbnailColor: 'bg-slate-900'
      }
    ];
  
    // Tracker index for responsive viewport behavior
    let currentIndex = $state(0);
  
    function nextSlide() {
      if (currentIndex < videos.length - 1) {
        currentIndex += 1;
      } else {
        currentIndex = 0;
      }
    }
  
    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex -= 1;
      } else {
        currentIndex = videos.length - 1;
      }
    }
  </script>
  
  <section class="w-full bg-[#0046b8] text-white py-20 px-6 md:px-12 select-none overflow-hidden border-t border-white/10">
    <div class="max-w-7xl mx-auto w-full flex flex-col space-y-12">
      
      <div class="w-full flex flex-col items-center text-center space-y-2">
        <span class="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/80">
          INTERVIEWS & DISCUSSIONS
        </span>
        <div class="relative">
          <h2 class="text-4xl md:text-5xl font-black tracking-tight">
            Media Coverage
          </h2>
          <span class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-yellow-400 rounded-full"></span>
        </div>
      </div>
  
      <div class="relative w-full group">
        
        <button 
          onclick={prevSlide}
          class="absolute left-0 top-1/3 -translate-y-1/2 -ml-4 z-20 h-11 w-11 rounded-full border border-white/10 bg-black/20 backdrop-blur-sm hidden md:flex items-center justify-center hover:bg-black/40 transition-all"
          aria-label="Previous video"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
  
        <div class="w-full overflow-hidden">
          <div 
            class="flex md:grid md:grid-cols-3 gap-6 transition-transform duration-500 ease-out"
            style="transform: translateX(-{currentIndex * 100}%);"
          >
            {#each videos as video, idx}
              <div class="min-w-full md:min-w-0 flex flex-col space-y-4">
                <div class="relative aspect-video w-full {video.thumbnailColor} rounded-md overflow-hidden border border-white/10 shadow-lg flex items-center justify-center cursor-pointer group/card">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                  
                  <div class="h-14 w-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center z-20 transition-transform duration-300 group-hover/card:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white ml-0.5">
                      <path fill-rule="evenodd" d="Play icon path mapping container v1" clip-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" />
                    </svg>
                  </div>
                </div>
  
                <div class="flex flex-col space-y-1 text-left px-1">
                  <span class="text-[10px] font-bold tracking-wider text-white/50">{video.platform}</span>
                  <p class="text-sm font-bold leading-snug text-white/90 hover:text-white transition-colors cursor-pointer line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            {/each}
          </div>
        </div>
  
        <button 
          onclick={nextSlide}
          class="absolute right-0 top-1/3 -translate-y-1/2 -mr-4 z-20 h-11 w-11 rounded-full border border-white/10 bg-black/20 backdrop-blur-sm hidden md:flex items-center justify-center hover:bg-black/40 transition-all"
          aria-label="Next video"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
  
      <div class="w-full flex items-center justify-center space-x-2 pt-2 md:hidden">
        {#each videos as _, idx}
          <span 
            class="h-1 transition-all duration-300 rounded-full {currentIndex === idx ? 'w-6 bg-yellow-400' : 'w-1.5 bg-white/30'}"
          ></span>
        {/each}
      </div>
  
    </div>
  </section>