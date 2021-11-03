import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.scss'],
})
export class DetailsBookComponent implements OnInit {
  book!: Book;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getBook(id);
  }

  getBook(id: number) {
    this.booksService.getBook(id).subscribe((book) => (this.book = book));
  }

  back() {
    this.location.back();
  }
}
