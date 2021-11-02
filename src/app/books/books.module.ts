import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { RouterModule } from '@angular/router';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DetailsBookComponent } from './details-book/details-book.component';

@NgModule({
  declarations: [BooksComponent, EditBookComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'books', component: BooksComponent },
      { path: 'books/:id', component: DetailsBookComponent },
      { path: 'books/:id/edit', component: EditBookComponent },
    ]),
  ],
  exports: [BooksComponent],
})
export class BooksModule {}
