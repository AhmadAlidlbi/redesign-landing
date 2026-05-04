import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

if (location.hash) {
  history.replaceState(null, '', location.pathname + location.search);
}

window.scrollTo(0, 0);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
