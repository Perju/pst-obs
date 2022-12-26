import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ObsExportModule } from './modules/obs-export.module'

import { ObsComponent } from './app.component'
import { MaterialUiModule } from './modules/material-ui.module'

@NgModule({
  declarations: [ObsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ObsExportModule, MaterialUiModule],
  bootstrap: [ObsComponent],
})
export class ObsModule {}
