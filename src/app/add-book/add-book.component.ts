import {Component,OnInit,ViewChild,Input, Output, EventEmitter} from '@angular/core';
import {BookListService} from '../book-list.service'
import {Book} from '../book.model';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  animations:[trigger('triggerAddBox',
  [
    state('true',style({  height:'100%'})),//show
    state('false',style({ height:'0px'})),//hide
    transition('true => false', animate('1000ms',style({height:'100%'}))),
    transition('false => true', animate('1000ms',style({ height:'0px'})))

  ]
)]
})

export class AddBookComponent implements OnInit {

  @Input() bookList: Array<Book>;
  @ViewChild('addBookForm') addBookForm;
  @Input() addBoxState:string;
  @Output() emitAddBoxState = new EventEmitter();


    constructor(public bookListService: BookListService) { }

    //removed NgForm type
    addBookToList(book){
      // adding a new book to the list via bookListService
      this.bookListService.addBook(book);
      this.addBookForm.reset();
    }

    toBoolean(state){
     return state === 'true' ? true : false;
    }

    closeAddBox(){
      this.emitAddBoxState.emit('false');
    }

  ngOnInit() {
  }

}
