import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genre } from '../genre';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-details-genre',
  templateUrl: './details-genre.component.html',
  styleUrls: ['./details-genre.component.scss'],
})
export class DetailsGenreComponent implements OnInit {
  genre!: Genre;

  constructor(
    private genreService: GenreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getGenre(id);
  }

  getGenre(id: number) {
    this.genreService.getGenre(id).subscribe((genre) => (this.genre = genre));
  }
}
