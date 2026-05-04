import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { Cta } from './components/cta/cta';
import { Footer } from './components/footer/footer';
import { ScrollTopComponent } from './components/scroll-top/scroll-top';
import { WhatsappFloatComponent } from './components/whatsapp-float/whatsapp-float';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Services, Cta, Footer, ScrollTopComponent, WhatsappFloatComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('redesign-landing');
}
