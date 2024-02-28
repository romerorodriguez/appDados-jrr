import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarJrrComponent } from './components/navbar-jrr/navbar-jrr.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarJrrComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
