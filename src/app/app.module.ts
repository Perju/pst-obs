import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ObsExportModule } from './modules/obs-export.module'

import { ObsComponent } from './app.component'
import { ObsMaterialUiModule } from './modules/material-ui.module'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [ObsComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ObsExportModule
  ],
  exports: [],
  bootstrap: [ObsComponent]
})
export class ObsModule {}
