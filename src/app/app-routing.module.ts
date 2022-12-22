import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HelpComponent } from './views/help/help.component'
import { LoginComponent } from './views/login/login.component'
import { ControllerComponent } from './views/controller/controller.component'

const routes: Routes = [
  { path: 'help', component: HelpComponent },
  { path: 'controller', component: ControllerComponent },
  { path: '', component: LoginComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ObsRoutingModule {}
