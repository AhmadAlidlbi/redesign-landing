import { Component, HostListener, OnDestroy } from '@angular/core';
import { Language } from '../../services/language';
import { Theme } from '../../services/theme';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnDestroy {
  isMenuOpen = false;

  navLinks = [
    { id: 'hero',     en: 'Home',     ar: 'الرئيسية'    },
    { id: 'about',    en: 'About',    ar: 'من نحن'       },
    { id: 'services', en: 'Services', ar: 'الخدمات'     },
    { id: 'contact',  en: 'Contact',  ar: 'تواصل معنا'  },
  ];

  constructor(public language: Language, public theme: Theme) {}

  get isArabic(): boolean {
    return this.language.isArabic;
  }

  get isLight(): boolean {
    return this.theme.isLight;
  }

  switchLanguage(): void {
    this.language.switchLanguage();
  }

  toggleTheme(): void {
    this.theme.toggle();
  }

  toggleMenu(): void {
    this.setMenu(!this.isMenuOpen);
  }

  closeMenu(): void {
    this.setMenu(false);
  }

  private setMenu(open: boolean): void {
    this.isMenuOpen = open;
    document.body.classList.toggle('body--lock', open);
  }

  @HostListener('document:touchstart', ['$event'])
  onDocumentTouch(event: TouchEvent): void {
    if (this.isMenuOpen && !(event.target as Element).closest('.navbar')) {
      this.closeMenu();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isMenuOpen) {
      this.closeMenu();
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (this.isMenuOpen && window.innerWidth > 820) {
      this.closeMenu();
    }
  }

  ngOnDestroy(): void {
    document.body.classList.remove('body--lock');
  }
}
