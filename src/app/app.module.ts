import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialUiModule } from './modules/material-ui.module'
import { ObsRoutingModule } from './app-routing.module'
import { ObsComponent } from './app.component'
import { HelpComponent } from './views/help/help.component'
import { LoginComponent } from './views/login/login.component';
import { ControllerComponent } from './views/controller/controller.component'
import { LeftSideBarComponent } from './views/left-side-bar/left-side-bar.component';

@NgModule({
  declarations: [ObsComponent, HelpComponent, LoginComponent, ControllerComponent, LeftSideBarComponent],
  imports: [
    BrowserModule,
    ObsRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule
  ],
  providers: [
  ],
  bootstrap: [ObsComponent],
  exports: [
    ObsComponent,
  ]
})
export class ObsModule {}
