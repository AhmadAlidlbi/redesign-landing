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

    this.observer = new IntersectionObserver(
      (entries) => {
        this.zone.run(() => { this.pdrOpen = entries[0].isIntersecting; });
      },
      { threshold: 0, rootMargin: '0px 0px -35% 0px' }
    );

    this.observer.observe(this.pdrSection.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
