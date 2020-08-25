import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      "Innovation distinguishes between a leader and a follower",
      "Steve Jobs",
      new Date(2018.20, 12)
    ),
    
    new Quote(
      2,
      "The way to get started is to quit talking and begin doing.",
      "Walt Disney",
      new Date(2018.11, 11)
    ),

    new Quote(
      3,
      "Life is what happens when you're busy making other plans.",
      "John Lennon",
      new Date(2019.01, 28)
    ),
  ];

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm("Are you sure you want to delete quote");
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  upvote(i) {
    this.quotes[i].upvotes++;
  }

  downvote(i) {
    this.quotes[i].downvotes++;
  }

  preNum: number;
  lastNum: number;
  counter: number;

  highestUpvote() {
    this.preNum = 0;
    this.lastNum = 0;

    for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if (this.lastNum > this.preNum) {
        this.preNum = this.lastNum;
      }
    }
    return this.preNum;
  }

  constructor() {}

  ngOnInit() {}
}
