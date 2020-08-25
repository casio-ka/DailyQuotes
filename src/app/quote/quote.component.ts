import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [

    new Quote (1, 'Innovation distinguishes between a leader and a follower' , 'Steve Jobs' , new Date(2018.09, 20) ),
    new Quote (2, 'I learned not to worry so much about the outcome, but to concentrate on the step I was on and to try to do it as perfectly as I could when I was doing it.', 'Steve Wozniak' , new Date(2018.11, 11) ),
    new Quote (3, 'Always wake up with a smile knowing that today you are going to have fun accomplishing what others are too afraid to do.', 'Mark cuban' , new Date(2019.01, 28) ),

  ]

    addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)

    }

    deleteQuote(isComplete,index){
      if (isComplete){
        let toDelete=confirm('Are you sure you want to delete quote')
        if(toDelete){
          this.quotes.splice(index,1)
        }
      }
    }

    
    upvote(i){
      this.quotes[i].upvotes ++;

    }

    
    downvote(i){
      this.quotes[i].downvotes ++;

    }
    
    constructor() { }

    ngOnInit() {
    }

  preNum:number
  lastNum:number
  counter:number

  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }
}