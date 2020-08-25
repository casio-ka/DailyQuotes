import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-fill-form',
  templateUrl: './fill-form.component.html',
  styleUrls: ['./fill-form.component.css']
})
export class FillFormComponent implements OnInit {
  @Input() quote:Quote
  
  upvotes=0;
  downvotes=0;

  @Output() isComplete = new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}

  constructor() { }

  ngOnInit() {
  }

}
