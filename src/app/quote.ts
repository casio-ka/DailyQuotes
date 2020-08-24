export class Quote {

	id: number
	quote : string
	author : string
	points: number
	completeDate:Date
	
	constructor( id: number, quote: string, author: string, points?: number){	

      this.id = id;
      this.author = author;
      this.quote = quote;
      this.points = points || 0;
      this.completeDate = new Date;
    }
}
