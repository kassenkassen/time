import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from './genre';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  private genreURL = 'api/genres';

  constructor(private http: HttpClient) {}

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.genreURL);
  }

  getGenre(id: number): Observable<Genre> {
    return this.http.get<Genre>(`${this.genreURL}/${id}`);
  }

  addGenre(genre: Genre): Observable<Genre> {
    return this.http.post<Genre>(this.genreURL, genre);
  }

  updateGenre(genre: Genre): Observable<Genre> {
    return this.http.put<Genre>(this.genreURL, genre);
  }

  saveGenre(genre: Genre) {
    if (genre.id === 0) {
      return this.addGenre(genre);
    }
    return this.updateGenre(genre);
  }

  initiateGenre() {
    return {
      id: 0,
      name: '',
    };
  }
}
