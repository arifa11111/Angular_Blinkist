import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { FinishedBarComponent } from './finished-bar/finished-bar.component';
import { ReadnowBarComponent } from './readnow-bar/readnow-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './banner/banner.component';
import { MyLibraryComponent } from './my-library/my-library.component';
import { AppRoutingModule } from './app-routing.module';
import { BooksComponent } from './my-library/books/books.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    ModalComponent,
    BookComponent,
    BookListComponent,
    BookDetailComponent,
    FinishedBarComponent,
    ReadnowBarComponent,
    BannerComponent,
    MyLibraryComponent,
    BooksComponent,
    HomeComponentComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
