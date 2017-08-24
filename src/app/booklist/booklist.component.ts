import { Component, OnInit , ViewChild  } from '@angular/core';
import {BookListService} from '../book-list.service';
import { Book } from '../book.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
})
export class BooklistComponent implements OnInit {

  @ViewChild('editBookForm') editBookForm;
  bookList: Array<Book> = new Array<Book>();
  currentBook: Book = new Book('', '', '');
  addBoxState:string = 'false';
  //fields of the current book
  bookTitle: string;
  bookAuthor: string;
  bookDate: string;

  constructor(public bookListService: BookListService) { }

  toggleAddBox(){
    this.addBoxState = (this.addBoxState === 'false' ? 'true' : 'false');
  }

  setAddBoxState(state:string){
    this.addBoxState = state;
  }

  editBookData(editForm: NgForm){
    // find the corresponding book in the list and apply the changes
    var book = new Book(editForm.value.title, editForm.value.author, editForm.value.date);
    this.bookList[this.bookList.indexOf(this.currentBook)] = book;
    this.resetInputs();
  };

  resetInputs(){
    this.bookTitle = this.currentBook.title;
    this.bookAuthor = this.currentBook.author;
    this.bookDate = this.currentBook.date;
  }

  getBook(book){
    this.currentBook = book;
  }

  //removes a book from the bookList
  removeBook(book){
    this.bookList.splice(this.bookList.indexOf(book),1);
  }

  ngOnInit() {
    //
    this.bookListService.fetchBookList().subscribe( (bookList) => this.bookList = bookList );
    // adds a new book from the addForm in libBar component
    this.bookListService.newBookSubject.subscribe( (book) => {this.bookList.push(book)})

  }



}

