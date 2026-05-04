import { Component } from '@angular/core';
import { Language } from '../../services/language';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();

  constructor(public language: Language) {}

  get isArabic(): boolean {
    return this.language.isArabic;
  }
}
