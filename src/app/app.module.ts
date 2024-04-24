import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideRouter, withHashLocation } from '@angular/router';
import { ContactListComponent } from './routes/contact-list/contact-list.component';
import { routes } from './app.routes';
import { ContactDetailsComponent } from './routes/contact-details/contact-details.component';
import { ContactEditComponent } from './routes/contact-edit/contact-edit.component';

@NgModule({
  declarations: [AppComponent, ContactListComponent, ContactDetailsComponent, ContactEditComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideRouter(routes, withHashLocation())],
  bootstrap: [AppComponent],
})
export class AppModule {}
