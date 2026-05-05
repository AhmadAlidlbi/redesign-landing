import { Injectable, signal } from '@angular/core';

export type AppTheme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class Theme {
  private readonly KEY = 'rd-theme';

  currentTheme = signal<AppTheme>(this.load());

  constructor() {
    this.apply(this.currentTheme());
  }

  get isLight(): boolean {
    return this.currentTheme() === 'light';
  }

  toggle(): void {
    const next: AppTheme = this.isLight ? 'dark' : 'light';
    this.currentTheme.set(next);
    this.apply(next);
    try { localStorage.setItem(this.KEY, next); } catch { /* */ }
  }

  private load(): AppTheme {
    try {
      return (localStorage.getItem(this.KEY) as AppTheme) ?? 'dark';
    } catch {
      return 'dark';
    }
  }

  private apply(theme: AppTheme): void {
    document.documentElement.setAttribute('data-theme', theme);
  }
}
