import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ObsRoutingModule } from './app-routing.module';
import { ObsComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ObsComponent
  ],
  imports: [
    BrowserModule,
    ObsRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [],
  exports: [ObsComponent]})
export class ObsModule { }
