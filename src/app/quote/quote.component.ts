import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [

    {id: 1, quote: "Innovation distinguishes between a leader and a follower" , author: 'Steve Jobs' },
    {id: 2, quote: 'I learned not to worry so much about the outcome, but to concentrate on the step I was on and to try to do it as perfectly as I could when I was doing it.', author: 'Steve Wozniak' },
    {id: 3, quote: 'Always wake up with a smile knowing that today you are going to have fun accomplishing what others are too afraid to do.', author: 'Mark cuban' , },

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
