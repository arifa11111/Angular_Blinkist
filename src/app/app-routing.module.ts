import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ModalComponent } from './modal/modal.component';

const appRoutes: Routes = [
  { path: '' ,component:HomeComponentComponent},
  { path: 'bookdetails' ,component:BookDetailComponent},
  { path: 'dropdown' ,component:ModalComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
