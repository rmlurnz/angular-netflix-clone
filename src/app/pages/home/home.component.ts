import { Component, inject } from '@angular/core';
import { MoviesService, imagesBaseUrl } from '../../services/movies.service';
import { MoviesScrollerComponent } from '../../components/movies-scroller/movies-scroller.component';
import { map } from 'rxjs/operators';
import { SliderComponent } from '../../components/slider/slider.component';
import { NgClass } from '@angular/common';
import { MediaQueryService } from '../../services/media-query.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MoviesScrollerComponent, SliderComponent, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  #mediaService = inject(MediaQueryService);
  isMobile = toSignal(this.#mediaService.mediaQuery('max', 'sm'));
  private moviesService = inject(MoviesService);
  public imagesBaseUrl = imagesBaseUrl;
  public popularMovies$ = this.moviesService
    .fetchMoviesByType('popular')
    .pipe(map((data) => data.results));
  public topRatedMovies$ = this.moviesService
    .fetchMoviesByType('top_rated')
    .pipe(map((data) => data.results));
  public nowPlayingMovies$ = this.moviesService
    .fetchMoviesByType('now_playing')
    .pipe(map((data) => data.results));
}
