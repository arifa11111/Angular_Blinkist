import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyLibraryComponent } from "./my-library/my-library.component";

const appRoutes: Routes = [
  {
    path: "mylibrary", component: MyLibraryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
