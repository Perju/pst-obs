import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ObsRoutingModule } from '../app-routing.module'
import { HelpComponent } from '../views/help/help.component'
import { LoginComponent } from '../views/login/login.component'
import { ControllerComponent } from '../views/controller/controller.component'
import { ObsLeftSideBarComponent } from '../views/left-side-bar/left-side-bar.component'
import { MaterialUiModule } from './material-ui.module'

@NgModule({
  declarations: [
    HelpComponent,
    LoginComponent,
    ControllerComponent,
    ObsLeftSideBarComponent
  ],
  imports: [ObsRoutingModule, MaterialUiModule, CommonModule],
  exports: [
    ObsRoutingModule,
    ObsLeftSideBarComponent,
    HelpComponent,
    LoginComponent,
    ControllerComponent
  ],
  schemas: []
})
export class ObsExportModule {}
