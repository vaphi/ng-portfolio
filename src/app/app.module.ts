import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortfolioHomePageComponent } from './portfolio-home-page/home-page.component'

@NgModule({
  declarations: [
    AppComponent,
    PortfolioHomePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
