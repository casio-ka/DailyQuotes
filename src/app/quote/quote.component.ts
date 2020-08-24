import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Goal[] = [

    new Quote (1, 'Innovation distinguishes between a leader and a follower' , 'Steve Jobs' , new Date(2018.09, 20) ),
    new Quote (2, 'I learned not to worry so much about the outcome, but to concentrate on the step I was on and to try to do it as perfectly as I could when I was doing it.', 'Steve Wozniak' , new Date(2018.11, 11) ),
    new Quote (3, 'Always wake up with a smile knowing that today you are going to have fun accomplishing what others are too afraid to do.', 'Mark cuban' , new Date(2019.01, 28) ),

  ];

    deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete=confirm('Are you sure you want to delete quote')
      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

    addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)

    }

    upVotes:number=0;
    upVote(){
      this.upVotes=this.upVotes+1;

    }

    downVotes:number=0;
    downVote(){
      this.downVotes=this.downVotes+1;

    }
    constructor() { }

    ngOnInit() {
    }
}