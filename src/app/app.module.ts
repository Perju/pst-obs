import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ObsModule as ObsModuleLib } from 'obs'

import { ObsComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [ObsComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ObsModuleLib
  ],
  exports: [ObsModuleLib],
  bootstrap: [ObsComponent]
})
export class ObsModule {}
