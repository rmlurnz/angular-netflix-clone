import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { DetailComponent } from './pages/detail/detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'detail/:movieId',
    component: DetailComponent,
  },
];
