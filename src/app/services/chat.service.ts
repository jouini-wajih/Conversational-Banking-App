// src/app/services/chat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messagesSubject = new BehaviorSubject<Message[]>([]);
  messages$ = this.messagesSubject.asObservable();
  private rasaUrl = '/api/webhooks/rest/webhook'; 

  constructor(private http: HttpClient) {}

  addMessage(message: Message) {
    this.messagesSubject.next([...this.messagesSubject.value, message]);
  }

  sendMessageToRasa(messageContent: string) {
    const userMessage: Message = {
      content: messageContent,
      sender: 'user',  // Correctly assign 'user'
      timestamp: new Date()
    };
    this.addMessage(userMessage);

    this.http.post<any[]>(this.rasaUrl, { sender: 'user', message: messageContent })
      .subscribe(responses => {
        const botMessages: Message[] = responses.map(response => ({
          content: response.text,
          sender: 'bot',  // Correctly assign 'bot'
          timestamp: new Date()
        }));
        botMessages.forEach(message => this.addMessage(message));
      });
  }
}
