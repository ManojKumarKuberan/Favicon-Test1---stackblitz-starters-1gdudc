import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App implements OnInit {
  name = 'Angular';

  ngOnInit() {
    const timestamp = new Date().getTime();
    const link =
      document.querySelector("link[rel~='icon']") ||
      document.createElement('link');
    // link.rel = 'icon';
    // link.href = `${'https://als-static.rewardstep.com/apple-gr/vars/default/favicon.ico'}?v=${timestamp}`;

    link.setAttribute('rel', 'icon');
    link.setAttribute(
      'href',
      `${'https://als-static.rewardstep.com/apple-gr/vars/ua/favicon.ico'}?v=${timestamp}`
    );
    document.getElementsByTagName('head')[0].appendChild(link);
  }
}

bootstrapApplication(App);
