// src/app/components/message/message.component.ts
import { Component, Input } from '@angular/core';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() message!: Message;  // Using the definite assignment assertion
}
