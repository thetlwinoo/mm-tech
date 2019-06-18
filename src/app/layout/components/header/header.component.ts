import { Component, OnInit } from '@angular/core';
import { particles } from '@box/config/particles';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  particleOptions: any;
  constructor() {
    this.particleOptions = particles;
  }

  ngOnInit() {

  }

}
