import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss',
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  // constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    // this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
    this.contacts = [
      { id: 1, name: 'test1' },
      { id: 2, name: 'test2' },
      { id: 3, name: 'test3' },
      { id: 4, name: 'test4' },
    ];
  }
}
