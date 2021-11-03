import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Genre } from '../genre';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-details-genre',
  templateUrl: './details-genre.component.html',
  styleUrls: ['./details-genre.component.scss'],
})
export class DetailsGenreComponent implements OnInit, OnDestroy {
  genre!: Genre;
  sub: Subscription = new Subscription();

  constructor(
    private genreService: GenreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getGenre(id);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getGenre(id: number) {
    this.sub = this.genreService
      .getGenre(id)
      .subscribe((genre) => (this.genre = genre));
  }
}
