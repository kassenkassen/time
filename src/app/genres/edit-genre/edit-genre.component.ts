import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Genre } from '../genre';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.scss'],
})
export class EditGenreComponent implements OnInit, OnDestroy {
  genre!: Genre;
  sub: Subscription = new Subscription();

  constructor(
    private genreService: GenreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub.add(
      this.route.paramMap.subscribe((params) => {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.getGenre(id);
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getGenre(id: number) {
    if (id === 0) {
      return (this.genre = this.genreService.initiateGenre());
    }
    return this.sub.add(
      this.genreService.getGenre(id).subscribe((genre) => (this.genre = genre))
    );
  }

  saveGenre() {
    this.sub.add(
      this.genreService
        .saveGenre(this.genre)
        .subscribe(() => this.router.navigate(['/genres']))
    );
  }
}
