import { NgModule } from '@angular/core'
import { HelpComponent } from '../views/help/help.component'
import { LoginComponent } from '../views/login/login.component'
import { ControllerComponent } from '../views/controller/controller.component'
import { ObsLeftSideBarComponent } from '../views/left-side-bar/left-side-bar.component'
import { ObsMaterialUiModule } from './material-ui.module'
import { ObsRoutingModule } from './obs-routing.module'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ObsApiService } from '../services/obs-api.service'
import { ObsAuthService } from '../services/obs-auth.service'
import { LoggedInGuardService } from '../services/logged-in-guard.service'

@NgModule({
  declarations: [
    HelpComponent,
    LoginComponent,
    ControllerComponent,
    ObsLeftSideBarComponent
  ],
  imports: [
    CommonModule,
    ObsMaterialUiModule,
    ObsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ObsLeftSideBarComponent,
    HelpComponent,
    LoginComponent,
    ControllerComponent
  ],
  providers:[
    ObsApiService,
    ObsAuthService,
    LoggedInGuardService
  ],
  schemas: []
})
export class ObsExportModule {}
