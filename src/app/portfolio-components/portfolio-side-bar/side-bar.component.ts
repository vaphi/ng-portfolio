import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class PortfolioSideBarComponent implements OnInit {
  title = 'ng-portfolio';
  navItems: any[];
  constructor() {

  }

  public ngOnInit(): void {

    this.navItems = [
      {
        name: 'navItem1',
        icon: '',
        url: ''
      }, {
        name: 'navItem1',
        icon: '',
        url: ''
      }, {
        name: 'navItem1',
        icon: '',
        url: ''
      }, {
        name: 'navItem1',
        icon: '',
        url: ''
      }
    ]
  }
}
