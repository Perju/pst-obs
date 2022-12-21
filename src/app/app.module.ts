import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ObsRoutingModule } from './app-routing.module'
import { ObsComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HelpComponent } from './views/help/help.component'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'

@NgModule({
  declarations: [ObsComponent, HelpComponent],
  imports: [
    BrowserModule,
    ObsRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  bootstrap: [ObsComponent],
  exports: [
    ObsComponent,
    MatGridListModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class ObsModule {}
