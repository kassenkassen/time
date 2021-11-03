import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private booksURL = 'api/books';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksURL);
  }

  getBook(id: number): Observable<Book> {
    if (id === 0) {
      return of(this.initializeBook());
    }
    return this.http.get<Book>(`${this.booksURL}/${id}`);
  }

  addBook(book: Book): Observable<any> {
    book.id = null;
    return this.http
      .post(this.booksURL, book)
      .pipe(tap((data) => console.log(`Add: ${data}`)));
  }

  updateBook(book: Book, headers: HttpHeaders): Observable<any> {
    return this.http
      .put(this.booksURL, book, { headers: headers })
      .pipe(tap((data) => console.log(`Update: ${data}`)));
  }

  saveBook(book: Book) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (book.id === 0) {
      return this.addBook(book);
    } else {
      return this.updateBook(book, headers);
    }
  }

  initializeBook() {
    return {
      id: 0,
      title: '',
      author: '',
      pages: 0,
      genreId: 1,
    };
  }
}
