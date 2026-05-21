// src/lib/i18n/index.ts

export type Language = 'en' | 'ne';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      biography: 'Biography',
      directives: '9 Core Initiatives',
      diary: 'Minister’s Diary',
      connect: 'Submit Grievance',
    },
    hero: {
      tagline: 'Transparency Through Action',
      title: 'Sasmit Pokharel',
      subtitle: 'Minister for Education, Science, and Technology, Government of Nepal. Working toward a predictable academic calendar, structural school reforms, and accessible digital education.',
      viewDirectives: 'Track My Progress',
      writeToMinister: 'Connect Directly',
    }
  },
  ne: {
    nav: {
      home: 'गृहपृष्ठ',
      biography: 'जीवनी',
      directives: '९ मुख्य प्राथमिकता',
      diary: 'मन्त्रीको डायरी',
      connect: 'गुनासो पठाउनुहोस्',
    },
    hero: {
      tagline: 'कार्य मार्फत पारदर्शिता',
      title: 'सस्मित पोखरेल',
      subtitle: 'माननीय शिक्षा, विज्ञान तथा प्रविधि मन्त्री, नेपाल सरकार। भरपर्दो शैक्षिक क्यालेन्डर, विद्यालय सुधार, र डिजिटल शिक्षाको रूपान्तरणमा प्रतिबद्ध।',
      viewDirectives: 'कार्य प्रगति हेर्नुहोस्',
      writeToMinister: 'सिधा सम्पर्क',
    }
  }
} as const;