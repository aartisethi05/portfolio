import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('running on init');
    particlesJS.load(
      'particles-js',
      'assets/data/particlesjs-config.json',
      function () {
        console.log('callback - particles.js config loaded');
      }
    );
    console.log('screen width', screen.width);
    if (screen.width <= 600) {
      const navbar = document.querySelector('.navbar');
      document.querySelector('.nav-btn').addEventListener('click', () => {
        navbar.classList.toggle('show');
      });
      navbar.addEventListener('click', () => {
        navbar.classList.toggle('show');
      });
    }
  }
}
