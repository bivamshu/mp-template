<script lang="ts">
    import { Navbar, Footer } from '$lib/components';
  </script>

  <Navbar />

  <main class="min-h-screen bg-white text-slate-900 px-6 md:px-12 py-20">
    <div class="max-w-3xl mx-auto space-y-6">
      <a href="/" class="text-sm font-semibold text-blue-600 hover:underline">← Back to home</a>
      <h1 class="text-4xl font-black tracking-tight">Commitment Letter</h1>
      <p class="text-slate-600 font-medium leading-relaxed">
        Add your full commitment letter content here.
      </p>
    </div>
  </main>

  <Footer onPrivacyClick={() => {}} onTermsClick={() => {}} />
