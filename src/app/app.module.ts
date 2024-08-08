import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { MessageComponent } from './components/message/message.component';
import { ChatInputComponent } from './components/chat-input/chat-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent,  // Correctly import ChatWindowComponent
    MessageComponent,
    ChatInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
