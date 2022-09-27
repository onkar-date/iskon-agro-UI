import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Iskon Agro';
  windowScrolled = false;
  constructor() { }
  
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });
  }

  onScroll(): void {
    document.getElementById('toolbar')?.scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  
}
