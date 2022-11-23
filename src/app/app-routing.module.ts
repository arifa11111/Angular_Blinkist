import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ModalComponent } from './modal/modal.component';
import { MyLibraryComponent } from './my-library/my-library.component';

const appRoutes: Routes = [
  { path: '' ,component:HomeComponentComponent},
  { path: 'library' ,component:MyLibraryComponent},
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
