import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ObsExportModule } from './modules/obs-export.module'

import { ObsComponent } from './app.component'

@NgModule({
  declarations: [
    ObsComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, ObsExportModule],
  bootstrap: [ObsComponent],
  exports: [],
  schemas: []
})
export class ObsModule {}
