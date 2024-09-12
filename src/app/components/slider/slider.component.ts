import { Component, Input, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie';
import { AsyncPipe, DatePipe, NgClass, NgStyle } from '@angular/common';
import { MediaQueryService } from '../../services/media-query.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [AsyncPipe, DatePipe, NgClass, NgStyle],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  #mediaService = inject(MediaQueryService);
  isMobile = toSignal(this.#mediaService.mediaQuery('max', 'sm'));

  @Input() dataObs!: Observable<Movie[]>;
  @Input() imagesBaseUrl = '';
  public slideIndex = 0;

  ngOnInit() {
    setInterval(() => {
      if (this.slideIndex < 19) {
        this.slideIndex++;
      } else {
        this.slideIndex = 0;
      }
    }, 7500);
  }

  slideLeft() {
    if (this.slideIndex <= 0) {
      return;
    }
    this.slideIndex--;
  }

  slideRight() {
    if (this.slideIndex >= 19) {
      return;
    }
    this.slideIndex++;
  }
}
