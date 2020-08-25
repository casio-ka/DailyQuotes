export class Quote {

    public upvotes: number
    public downvotes: number
	
	constructor( public id: number, public quote: string, public author: string, public completeDate:Date){	

      this.upvotes =0;
      this.downvotes =0;
      this.id = id;
      this.author = author;
      this.quote = quote;
      this.completeDate = new Date;
      
    }
}
