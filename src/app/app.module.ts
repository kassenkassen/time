import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { MenuComponent } from './menu/menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GenreComponent } from './genres/genre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { DetailsGenreComponent } from './genres/details-genre/details-genre.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    GenreComponent,
    EditGenreComponent,
    DetailsGenreComponent,
  ],
  imports: [BrowserModule, BooksModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
