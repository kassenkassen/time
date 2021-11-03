import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
})
export class EditBookComponent implements OnInit {
  book!: Book;

  pageTitle = '';

  constructor(
    private bookService: BooksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.getBook(id);
    });
  }

  getBook(id: number) {
    this.bookService
      .getBook(id)
      .subscribe((book) => this.onBookRetrieved(book));
  }

  onBookRetrieved(book: Book) {
    this.book = book;

    if (book.id === 0) {
      this.pageTitle = 'Add Book';
    } else {
      this.pageTitle = `Edit Book ${book.title}`;
    }
  }

  saveBook() {
    this.bookService
      .saveBook(this.book)
      .subscribe(() => this.router.navigate(['books']));
  }
}
