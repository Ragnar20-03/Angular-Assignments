import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologyComponent } from './technology/technology.component';
import { AppComponent } from './app.component';
import { WrongPageComponent } from './wrong-page/wrong-page.component';

const routes: Routes = [
  {path:'Technologies' , component:TechnologyComponent},
  {path:'books' , component:BooksComponent},
  {path:'' , component:AppComponent},
  {path:'**',component:WrongPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
