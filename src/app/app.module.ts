import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ObsRoutingModule } from './app-routing.module'
import { ObsComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { OnboardingComponent } from './views/onboarding/onboarding.component'
import { MatGridListModule } from '@angular/material/grid-list'

@NgModule({
  declarations: [
    ObsComponent,
    OnboardingComponent,
  ],
  imports: [
    BrowserModule,
    ObsRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [ObsComponent],
  exports: [ObsComponent]
})
export class ObsModule {}
