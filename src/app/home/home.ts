import { Component } from '@angular/core';
import {Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  image = [
    '/img/about-img.webp',
    '/img/cars-img.webp'
  ];

  index = 0;

   get currentImage() {
    return this.image[this.index];
  }

  next() {
    this.index++;
    if (this.index >= this.image.length) {
      this.index = 0;
    }
  }

  prev() {
    this.index--;
    if (this.index < 0) {
      this.index = this.image.length - 1;
    }
  }
  constructor (private router : Router){}
  gotoMenu()
  {
    this.router.navigate(['/cars']);
  }
}
