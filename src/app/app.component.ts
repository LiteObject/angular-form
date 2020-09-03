import { Component, NgZone } from '@angular/core';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form';
  showFiller = false;

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

constructor(zone: NgZone) {
  // this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));
}

  isSmallScreen(): boolean {
    return this.mediaMatcher.matches;
  }
}
