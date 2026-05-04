import { Injectable, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export type AppLanguage = 'en' | 'ar';

interface LanguageMeta {
  title: string;
  description: string;
  ogLocale: string;
}

const LANG_META: Record<AppLanguage, LanguageMeta> = {
  en: {
    title: 'Re-Design Kuwait | Paintless Dent Repair (PDR) Specialist',
    description:
      "Re-Design — Kuwait's paintless dent repair (PDR) specialist. Restore dents, door dings, and minor body damage without repainting. Send photos on WhatsApp for a fast estimate.",
    ogLocale: 'en_US',
  },
  ar: {
    title: 'ري ديزاين الكويت | متخصصون في إصلاح الطقات بدون صبغ PDR',
    description:
      'ري ديزاين متخصصون في إصلاح طقات وخفسات السيارات بتقنية PDR في الكويت بدون صبغ، مع الحفاظ على صبغ الوكالة وقيمة السيارة. أرسل صور الطقة عبر الواتساب.',
    ogLocale: 'ar_KW',
  },
};

@Injectable({
  providedIn: 'root',
})
export class Language {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  currentLang = signal<AppLanguage>('ar');

  constructor() {
    this.applyLanguage(this.currentLang());
  }

  get isArabic(): boolean {
    return this.currentLang() === 'ar';
  }

  switchLanguage(): void {
    const nextLang: AppLanguage = this.currentLang() === 'en' ? 'ar' : 'en';
    this.currentLang.set(nextLang);
    this.applyLanguage(nextLang);
  }

  private applyLanguage(lang: AppLanguage): void {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const data = LANG_META[lang];
    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:locale', content: data.ogLocale });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
  }
}
