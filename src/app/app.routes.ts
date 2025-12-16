import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Cars } from './cars/cars';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Terms } from './terms/terms';

export const routes: Routes = [

  { path: 'home', component: Home },
  { path: 'cars', component: Cars },
  {
    path: 'cars',
    loadChildren: () => import('./cars/cars.routes').then(m => m.routes)
  },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'terms', component: Terms },
  { path: '', redirectTo: 'home', pathMatch: "full" }
];
