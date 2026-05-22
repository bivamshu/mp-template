<script lang="ts">
    import { Navbar, HeroText, HeroVisuals, CandidateIntro, LatestUpdates } from '$lib/components';
	import WhoIsSasmit from '$lib/components/WhoIsSasmit.svelte';
  </script>
  
  <main class="relative w-full min-h-screen bg-[#0d2d3a] flex flex-col justify-between overflow-hidden">
    
    <div class="absolute inset-0 z-0 bg-gradient-to-tr from-[#091f29] via-[#113a4b] to-[#1a4a5e] opacity-95">
      <div class="absolute inset-0 mix-blend-overlay opacity-25 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-slate-900 to-black"></div>
    </div>
  
    <Navbar />
  
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 items-end flex-grow gap-8">
      <div class="lg:col-span-7">
        <HeroText />
      </div>
      <div class="lg:col-span-5">
        <HeroVisuals />
      </div>
    </div>
  
    <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-0"></div>
  </main>
  
 
  
  <LatestUpdates />
  <CandidateIntro />
  <LatestUpdates />
  <WhoIsSasmit />