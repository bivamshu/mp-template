<script lang="ts">
    // Static dataset representing the structural pillars shown in the design
    const pillars = [
      {
        category: 'EDUCATION',
        title: "Bachelor's of Laws and Bachelor's of Business Management, Kathmandu University"
      },
      {
        category: 'BACKGROUND',
        title: 'LLB & BBM, Kathmandu University (2022)',
        highlighted: true // Central card features a distinct dark fill and a yellow accent bar
      },
      {
        category: 'FOCUS',
        title: 'Good Governance & Digital Transformation'
      }
    ];
  </script>
  
  <section class="relative w-full min-h-[75vh] flex items-center justify-center bg-[#1e5875] text-white py-20 md:py-28 px-6 md:px-12 overflow-hidden select-none">
    
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-[#164760] opacity-80 mix-blend-multiply"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
      <div class="absolute inset-0 flex items-center justify-center opacity-20 filter grayscale contrast-125 scale-105 pointer-events-none">
        <div class="w-full h-full bg-radial-gradient from-transparent to-slate-900/90"></div>
      </div>
    </div>
  
    <div class="relative z-10 max-w-7xl mx-auto w-full flex flex-col space-y-12">
      
      <div class="w-full flex flex-col items-start space-y-3">
        <div class="relative">
          <h2 class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight font-sans">
            Who is Sasmit?
          </h2>
          <span class="absolute -bottom-2 right-0 w-16 h-[3.5px] bg-yellow-400 rounded-full"></span>
        </div>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch pt-4">
        {#each pillars as pillar}
        <div 
            class="group relative flex flex-col justify-between p-8 md:p-10 rounded-sm min-h-[260px] transition-all duration-300 backdrop-blur-md border border-white/10 shadow-xl 
            {pillar.highlighted ? 'bg-slate-900/75 hover:bg-slate-900/85' : 'bg-white/10 hover:bg-white/15'}"
            >
            <div class="flex flex-col space-y-1">
              <span class="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                {pillar.category}
              </span>
            </div>
  
            <h3 class="text-xl md:text-2xl font-bold leading-snug tracking-wide text-white/95 group-hover:text-white transition-colors mt-6 flex-grow">
              {pillar.title}
            </h3>
  
            <div class="w-full pt-8">
                <span 
                  class="block h-[2px] w-8 rounded-full transition-all duration-300 group-hover:w-12 
                  {pillar.highlighted ? 'bg-yellow-400' : 'bg-white/40'}"
                ></span>
              </div>
          </div>
        {/each}
      </div>
  
    </div>
  </section>