import { NgModule } from '@angular/core'
import { HelpComponent } from '../views/help/help.component'
import { LoginComponent } from '../views/login/login.component'
import { ControllerComponent } from '../views/controller/controller.component'
import { ObsLeftSideBarComponent } from '../views/left-side-bar/left-side-bar.component'
import { ObsMaterialUiModule } from './material-ui.module'
import { ObsRoutingModule } from './obs-routing.module'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [
    HelpComponent,
    LoginComponent,
    ControllerComponent,
    ObsLeftSideBarComponent
  ],
  imports: [CommonModule, ObsMaterialUiModule, ObsRoutingModule],
  exports: [
    ObsLeftSideBarComponent,
    HelpComponent,
    LoginComponent,
    ControllerComponent
  ],
  schemas: []
})
export class ObsExportModule {}
