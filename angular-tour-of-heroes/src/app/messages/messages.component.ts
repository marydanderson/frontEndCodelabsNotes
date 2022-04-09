import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // below has to be public b/c binding it to the html template; message service is called w/in the hero service when hero is added
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
