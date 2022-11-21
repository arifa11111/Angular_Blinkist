import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  BannerHeading: string = "Explore Books on entrepreneurship";
  bannerContent: string = " Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start."
  constructor() { }

  ngOnInit(): void {
  }

}
