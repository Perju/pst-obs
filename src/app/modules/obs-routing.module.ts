import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HelpComponent } from '../views/help/help.component'
import { LoginComponent } from '../views/login/login.component'
import { ControllerComponent } from '../views/controller/controller.component'
import { LoggedInGuardService } from '../services/logged-in-guard.service'

const obsRoutes: Routes = [
  {
    path: 'obs',
    children: [
      { path: 'help', component: HelpComponent },
      {
        path: 'controller',
        component: ControllerComponent,
        canActivate: [LoggedInGuardService]
      },
      { path: 'login', component: LoginComponent }
    ]
  }
]

const routes: Routes = [...obsRoutes]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObsRoutingModule {}
