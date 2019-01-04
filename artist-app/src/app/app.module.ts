import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtistComponent } from './artist/artist.component';
import { BrowserXhr, Http, HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { CustExtBrowserXhr } from './cust-ext-browser-xhr';
import { ArtistTabsComponent } from './artist-tabs/artist-tabs.component';
import {TabsModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistTabsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot()
  ],
  providers: [{ provide: BrowserXhr, useClass: CustExtBrowserXhr }],
  bootstrap: [AppComponent]
})
export class AppModule { }
