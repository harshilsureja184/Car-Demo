import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cars',
  imports: [RouterLink , RouterOutlet],
  templateUrl: './cars.html',
  styleUrl: './cars.css',
})
export class Cars {
  protected imgUrl = "img/cars-img.webp";
}
