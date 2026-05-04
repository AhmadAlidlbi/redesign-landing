import { Component } from '@angular/core';
import { Language } from '../../services/language';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services = [
    {
      icon: '01',
      titleEn: 'Door Dings',
      titleAr: 'طقات الأبواب',
      descriptionEn: 'Clean repair for small door impacts and parking dents without repainting.',
      descriptionAr: 'إصلاح الطقات البسيطة الناتجة عن الأبواب أو المواقف بدون صبغ.',
    },
    {
      icon: '02',
      titleEn: 'Minor Dents',
      titleAr: 'الخفسات البسيطة',
      descriptionEn: 'Precise paintless dent repair for suitable dents on vehicle panels.',
      descriptionAr: 'إصلاح دقيق للخفسات المناسبة على أجزاء السيارة مع الحفاظ على الصبغ.',
    },
    {
      icon: '03',
      titleEn: 'Body Line Dents',
      titleAr: 'خفسات خطوط البدي',
      descriptionEn: 'Professional handling for dents located on sharper body lines.',
      descriptionAr: 'معالجة احترافية للخفسات الموجودة على خطوط البدي الحادة.',
    },
    {
      icon: '04',
      titleEn: 'Photo Estimate',
      titleAr: 'تقييم عبر الصور',
      descriptionEn: 'Send clear photos on WhatsApp to receive an initial repair estimate.',
      descriptionAr: 'أرسل صور واضحة عبر الواتساب للحصول على تقييم مبدئي للحالة.',
    },
  ];

  constructor(public language: Language) {}

  get isArabic(): boolean {
    return this.language.isArabic;
  }
}
