import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Genre } from './genre';
import { GenreService } from './genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss'],
})
export class GenreComponent implements OnInit, OnDestroy {
  genres: Genre[] = [];
  sub: Subscription = new Subscription();

  constructor(private genreService: GenreService) {}

  ngOnInit(): void {
    this.getGenres();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getGenres() {
    this.sub = this.genreService
      .getGenres()
      .subscribe((genres) => (this.genres = genres));
  }
}
