export class Note {
message: string;
date: Date;
author: string;
id: any;


  constructor(id: number, message: string, author: string, date: Date) {
    this.message = message;
    this.id = id;
    this.date = date;
    this.author = author;
  }
}
