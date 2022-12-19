import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './views/onboarding/onboarding.component';

const routes: Routes = [{path: '', component: OnboardingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ObsRoutingModule { }
