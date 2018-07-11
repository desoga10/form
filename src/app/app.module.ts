import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsComponent } from './forms/forms.component';

import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    HighlightModule.forRoot({ theme: 'arduino-light'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
