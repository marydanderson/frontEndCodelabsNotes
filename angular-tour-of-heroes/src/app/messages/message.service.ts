import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  // function for adding messages to an array | ADD TO THE CACHE
  add(message: string) {
    this.messages.push(message)
  }

  // funcitno for clearing all of the messages to blank array | CLEAR THE CACHE
  clear() {
    this.messages = [];
  }

  constructor() { }
}
