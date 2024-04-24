import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss',
})
export class ContactDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
    console.log(`fetch contact with id: ${id}`);
  }

  goBack(): void {
    this.location.back();
  }
}
