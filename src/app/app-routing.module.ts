import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsGenreComponent } from './genres/details-genre/details-genre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { GenreComponent } from './genres/genre.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'genres', component: GenreComponent },
  { path: 'genres/:id', component: DetailsGenreComponent },
  { path: 'genres/:id/edit', component: EditGenreComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
