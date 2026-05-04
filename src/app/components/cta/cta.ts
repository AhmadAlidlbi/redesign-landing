import { Component } from '@angular/core';
import { Language } from '../../services/language';

@Component({
  selector: 'app-cta',
  imports: [],
  templateUrl: './cta.html',
  styleUrl: './cta.scss',
})
export class Cta {
  constructor(public language: Language) {}

  get isArabic(): boolean {
    return this.language.isArabic;
  }
}
