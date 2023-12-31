import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharePicsComponent } from './share-pics/share-pics.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { SharePicsListComponent } from './share-pics-list/share-pics-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleSharePicsComponent } from './single-share-pics/single-share-pics.component';

@NgModule({
  declarations: [
    AppComponent,
    SharePicsComponent,
    SharePicsListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleSharePicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default)
  }
}
