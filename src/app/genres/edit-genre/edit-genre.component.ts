import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from '../genre';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.scss'],
})
export class EditGenreComponent implements OnInit {
  genre!: Genre;

  constructor(
    private genreService: GenreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.getGenre(id);
    });
  }

  getGenre(id: number) {
    if (id === 0) {
      return (this.genre = this.genreService.initiateGenre());
    }
    return this.genreService
      .getGenre(id)
      .subscribe((genre) => (this.genre = genre));
  }

  saveGenre() {
    this.genreService
      .saveGenre(this.genre)
      .subscribe(() => this.router.navigate(['/genres']));
  }
}
