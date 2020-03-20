import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortfolioHomePageComponent } from './portfolio-components/portfolio-home-page/home-page.component';
import { PortfolioSideBarComponent } from '././portfolio-components/portfolio-side-bar/side-bar.component';
import { PageContentOneComponent } from './portfolio-components/portfolio-content-one/portfolio-home-page/page-content-one.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioHomePageComponent,
    PortfolioSideBarComponent,
    PageContentOneComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
