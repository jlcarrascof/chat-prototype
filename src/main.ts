import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { ChatComponent } from './app/chat/chat.component';

bootstrapApplication(ChatComponent, {
  providers: [
    provideZonelessChangeDetection()
  ],
}).catch(err => console.error(err));

/*
import { bootstrapApplication } from '@angular/platform-browser';
import { ChatComponent } from './app/chat/chat.component';

bootstrapApplication(ChatComponent)
  .catch(err => console.error(err));
*/
/*
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
*/

