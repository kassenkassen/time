import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { RouterModule } from '@angular/router';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DetailsBookComponent } from './details-book/details-book.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthorComponent } from './author/author.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BooksComponent,
    EditBookComponent,
    DetailsBookComponent,
    AuthorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'books', component: BooksComponent },
      { path: 'books/:id', component: DetailsBookComponent },
      { path: 'books/:id/edit', component: EditBookComponent },
    ]),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
    }),
    FormsModule,
  ],
  exports: [BooksComponent, FormsModule],
})
export class BooksModule {}
