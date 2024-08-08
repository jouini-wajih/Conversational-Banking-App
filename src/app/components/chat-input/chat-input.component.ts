import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent {
  message: string = '';

  @Output() sendMessage = new EventEmitter<string>();

  onSendMessage() {
    if (this.message.trim()) {
      this.sendMessage.emit(this.message);
      this.message = '';
    }
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.onSendMessage();
    }
  }
}
