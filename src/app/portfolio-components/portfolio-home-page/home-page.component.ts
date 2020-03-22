import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class PortfolioHomePageComponent implements OnInit{
  title = 'ng-portfolio';
  skills: any[];

  constructor() {
  }

  public ngOnInit(): void {
    this.skills = [{name: 'skill1'},{name: 'skill1'},{name: 'skill1'},{name: 'skill1'},{name: 'skill1'}];
  }

}
