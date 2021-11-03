import { Component, OnInit } from '@angular/core';
import { Genre } from './genre';
import { GenreService } from './genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss'],
})
export class GenreComponent implements OnInit {
  genres: Genre[] = [];

  constructor(private genreService: GenreService) {}

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres() {
    this.genreService.getGenres().subscribe((genres) => (this.genres = genres));
  }
}
