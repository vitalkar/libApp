import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {BookListService} from './book-list.service';
import {FormsModule} from '@angular/forms';
import {StrCleanPipe} from './strClean.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddBookComponent} from './add-book/add-book.component';
import{BooklistComponent} from './booklist/booklist.component';


@NgModule({
  declarations: [
    AppComponent,
    StrCleanPipe,
    AddBookComponent,
    BooklistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [BookListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
