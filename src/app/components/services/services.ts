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
      titleEn: 'Paintless Dent & Accident Repair',
      titleAr: 'تعديل الطقات والحوادث بدون صبغ',
      descriptionEn:
        'Repair suitable dents and accident marks without repainting while preserving the original factory paint.',
      descriptionAr: 'تعديل الطقات وآثار الحوادث المناسبة بدون صبغ مع الحفاظ على صبغ الوكالة.',
    },
    {
      icon: '02',
      titleEn: 'Large & Small Dents',
      titleAr: 'إصلاح الطقات كبيرة وصغيرة',
      descriptionEn:
        'Repair solutions for both large and small dents depending on the damage condition and panel accessibility.',
      descriptionAr:
        'حلول إصلاح للطقات الكبيرة والصغيرة حسب حالة الضرر وإمكانية الوصول للمنطقة المتضررة.',
    },
    {
      icon: '03',
      titleEn: 'Correction of Other Workshop Work',
      titleAr: 'تصحيح عمل ورشة أخرى',
      descriptionEn:
        'Correction service for previous workshop repairs that require extra precision, careful handling, and a stronger focus on final quality.',
      descriptionAr:
        'خدمة تصحيح لأعمال ورش أخرى تحتاج دقة أعلى ومعالجة احترافية للوصول إلى جودة أفضل.',
    },
    {
      icon: '04',
      titleEn: 'Protection',
      titleAr: 'الحماية',
      descriptionEn:
        "Protection services to help preserve the vehicle's exterior finish and reduce future damage.",
      descriptionAr:
        'خدمات حماية تساعد في الحفاظ على مظهر السيارة الخارجي وتقليل آثار الاستخدام مستقبلاً.',
    },
    {
      icon: '05',
      titleEn: 'Interior Insulation',
      titleAr: 'العوازل الداخلية',
      descriptionEn:
        'Interior insulation solutions designed to improve comfort and reduce unwanted noise and heat.',
      descriptionAr: 'حلول عوازل داخلية لتحسين الراحة وتقليل الإزعاج والحرارة داخل السيارة.',
    },
    {
      icon: '06',
      titleEn: 'Paint & Bodywork',
      titleAr: 'الصبغ والحدادة',
      descriptionEn:
        'Professional paint and bodywork services for damaged vehicle panels with clean finishing and accurate repair.',
      descriptionAr: 'خدمة صبغ وحدادة احترافية لإصلاح أجزاء السيارة المتضررة بتشطيب نظيف ودقيق.',
    },
  ];

  constructor(public language: Language) {}

  get isArabic(): boolean {
    return this.language.isArabic;
  }
}
