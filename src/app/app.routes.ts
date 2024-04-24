import { Routes } from '@angular/router';
import { ContactListComponent } from './routes/contact-list/contact-list.component';
import { ContactDetailsComponent } from './routes/contact-details/contact-details.component';
import { ContactEditComponent } from './routes/contact-edit/contact-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/:id', component: ContactDetailsComponent },
  { path: 'contacts/:id/edit', component: ContactEditComponent },
];
