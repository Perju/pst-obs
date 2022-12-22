import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ObsRoutingModule } from './app-routing.module'
import { ObsComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HelpComponent } from './views/help/help.component'
import { LoginComponent } from './views/login/login.component';
import { ControllerComponent } from './views/controller/controller.component'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [ObsComponent, HelpComponent, LoginComponent, ControllerComponent],
  imports: [
    BrowserModule,
    ObsRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule
  ],
  bootstrap: [ObsComponent],
  exports: [
    ObsComponent,
    MatGridListModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule
  ]
})
export class ObsModule {}
