import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ObsRoutingModule } from './app-routing.module';
import { ObsComponent } from './app.component';

@NgModule({
  declarations: [
    ObsComponent
  ],
  imports: [
    BrowserModule,
    ObsRoutingModule
  ],
  providers: [],
  bootstrap: [],
  exports: [ObsComponent]})
export class ObsModule { }
