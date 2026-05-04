import { Component } from '@angular/core';
import { Language } from '../../services/language';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  constructor(public language: Language) {}

  get isArabic(): boolean {
    return this.language.isArabic;
  }
}
