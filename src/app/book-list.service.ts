import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class BookListService {

  public newBookSubject = new Subject<any>();

  constructor(private http: Http) {

  }


  //fetch a book list via http request
  fetchBookList(){
    return this.http.get('https://api.myjson.com/bins/14wtt1').map(
      (res:Response) => res.json()
    )
  }

  check4duplicity(bookList,bookTitle){
    var bookTitles = bookList.map( (book) => {return book.title});
    // checks if the title exists in the bookTitles array
    var result = bookTitles.some((val) => val.toLowerCase() == bookTitle.toLowerCase());
    return result;
  }

  //add a book to the book list
  addBook(data){
    this.newBookSubject.next(data);
  }


}

