import { Component } from '@angular/core';
import { Language } from '../../services/language';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  constructor(public language: Language) {}

  get isArabic(): boolean {
    return this.language.isArabic;
  }
}
