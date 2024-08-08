// src/app/models/message.model.ts
export interface Message {
  content: string;
  sender: 'user' | 'bot';  // This should be a union type, not just string
  timestamp: Date;
}
