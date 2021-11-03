import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.scss'],
})
export class DetailsBookComponent implements OnInit, OnDestroy {
  book!: Book;
  backgroundColor = '';
  sub: Subscription = new Subscription();

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getBook(id);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getBook(id: number) {
    this.sub = this.booksService
      .getBook(id)
      .subscribe((book) => (this.book = book));
  }

  back() {
    this.location.back();
  }

  onBackgroundChange(value: string) {
    this.backgroundColor = value;
  }
}
