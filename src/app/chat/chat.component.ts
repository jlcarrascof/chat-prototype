import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  text: string;
  type: 'user' | 'bot';
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
})
export class ChatComponent {
  chatInput = signal<string>('');
  messages: WritableSignal<Message[]> = signal<Message[]>([]);

  answers = [
    'Hi, how can I help you?',
    'I understand. Could you give me more details?',
    "Thank you for your message. I'm processing it...",
  ];

  // Envía el mensaje y añade la respuesta aleatoria
  sendMessage() {
    const message = this.chatInput().trim();
    if (!message) return;

    // Agrega mensaje del usuario
    this.messages.update(msgs => [...msgs, { text: message, type: 'user' }]);
    this.chatInput.set('');

    // Simula respuesta del bot
    setTimeout(() => {
      const answer = this.answers[Math.floor(Math.random() * this.answers.length)];
      this.messages.update(msgs => [...msgs, { text: answer, type: 'bot' }]);
    }, 500);
  }
}
