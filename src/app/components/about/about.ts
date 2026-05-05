import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild, NgZone } from '@angular/core';
import { Language } from '../../services/language';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements AfterViewInit, OnDestroy {
  pdrOpen = false;

  @ViewChild('pdrSection') pdrSection!: ElementRef<HTMLElement>;

  private observer?: IntersectionObserver;

  constructor(public language: Language, private zone: NgZone) {}

  get isArabic(): boolean {
    return this.language.isArabic;
  }

  togglePdr(): void {
    this.pdrOpen = !this.pdrOpen;
  }

  ngAfterViewInit(): void {
    if (!this.pdrSection) return;

    // Skip the first callback — IntersectionObserver always fires once
    // synchronously on observe() with the current state. We only want to
    // react when the user actually scrolls the element into view.
    let initialFired = false;

    this.observer = new IntersectionObserver(
      (entries) => {
        if (!initialFired) {
          initialFired = true;
          return;
        }
        if (entries[0].isIntersecting) {
          this.zone.run(() => { this.pdrOpen = true; });
          this.observer?.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -25% 0px' }
    );

    this.observer.observe(this.pdrSection.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
